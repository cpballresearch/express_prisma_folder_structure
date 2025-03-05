import PaginationUtils from './pagination.utils.js';

class DatabaseUtils {

  static async findAll(prisma, options) {

    const {
      model,
      searchParams,
      page,
      limit,
      fieldMappings,
      additionalWhere = {},
      orderBy = { created_at: 'desc' },
      include
    } = options;

    const { skip, take } = PaginationUtils.getSkipTake(page, limit);
    const baseWhereClause = this.buildWhereClause(
      searchParams,
      { AND: [], OR: [] },
      fieldMappings
    );

    const whereClause = this.#mergeWhereClauses(baseWhereClause, additionalWhere);
    const [total, records] = await Promise.all([
      prisma[model].count({ where: whereClause }),
      prisma[model].findMany({
        where: whereClause,
        skip,
        take,
        orderBy,
        ...(include && { include })
      }),
    ]);

    return PaginationUtils.getPaginationData(records, total, page, limit);
  }

  static async createOne(prisma, options) {
    const { model, data } = options;
    return prisma[model].create({ data });
  }

  static async findById(prisma, options) {
    const { model, id, include = null } = options;
    const query = { where: { id } };
    if (include) {
      query.include = include;
    }
    return prisma[model].findUnique(query);
  }

  static async updateById(prisma, options) {
    const { model, id, data } = options;
    return prisma[model].update({
      where: { id },
      data: { ...data, updated_at: new Date() },
    });
  }

  static async deleteById(prisma, options) {
    const { model, id, softDelete = true, statusField = 'status' } = options;
    if (softDelete) {
      return prisma[model].update({
        where: { id },
        data: { [statusField]: 'inactive' }
      });
    }
    return prisma[model].delete({ where: { id } });
  }

  static async toggleStatus(prisma, options) {
    const { model, id, currentStatus, statusField = 'status' } = options;
    const newStatus = currentStatus === 'active' ? 'inactive' : 'active';
    return this.updateById(prisma, {
      model,
      id,
      data: { [statusField]: newStatus }
    });
  }

  static #mergeWhereClauses(baseClause, additionalClause) {
    if (Object.keys(additionalClause).length === 0) return baseClause;
    if (Object.keys(baseClause).length === 0) return additionalClause;

    return {
      ...baseClause,
      AND: [
        ...(baseClause.AND || []),
        ...Object.entries(additionalClause).map(([key, value]) => ({ [key]: value }))
      ]
    };
  }

  static buildWhereClause(searchParams, whereClause, fieldMappings) {

    Object.entries(fieldMappings).forEach(([type, fields]) => {
      fields.forEach(field => {
        const value = searchParams?.[field];
        if (value !== undefined) {
          const clause = this.#processField(field, value, type);
          if (type === 'text') {
            whereClause.OR.push(clause);
          } else {
            whereClause.AND.push(clause);
          }
        }
      });
    });

    return this.#cleanWhereClause(whereClause);
  }

  static #processField(field, value, type) {
    switch (type) {
      case 'numeric':
        return { [field]: +value };
      case 'date':
        return { [field]: new Date(value) };
      case 'text':
        return { [field]: { contains: value.toLowerCase() } };
      case 'exact':
      default:
        return { [field]: value };
    }
  }

  static #cleanWhereClause(whereClause) {
    if (whereClause.OR?.length === 0) delete whereClause.OR;
    if (whereClause.AND?.length === 0) delete whereClause.AND;
    return Object.keys(whereClause).length === 0 ? {} : whereClause;
  }
}

export default DatabaseUtils;