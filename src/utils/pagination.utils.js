class PaginationUtils {
  static #DEFAULT_PAGE = 1;
  static #DEFAULT_LIMIT = 10;

  static getPaginationData(data, total, page, limit) {
    return {
      data,
      pagination: {
        total,
        page: page,
        limit,
        totalPages: Math.ceil(total / limit)
      }
    };
  }

  static getSkipTake(page, limit) {
    const skip = (page - 1) * limit;
    return { skip, take: limit };
  }

  static getPaginationParams(query) {
    return {
      page: Math.max(+(query.page || PaginationUtils.#DEFAULT_PAGE), 1),
      limit: Math.max(+(query.limit || PaginationUtils.#DEFAULT_LIMIT), 1)
    };
  }

}

export default PaginationUtils;
