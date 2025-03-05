import { PrismaClient } from '@prisma/client';
import PaginationUtils from '../utils/pagination.utils.js';

class UserRepository {
  static prisma = new PrismaClient();
   
  static async create(userData) {
    return this.prisma.exampleUser.create({
      data: userData,
      include: {
        role: true
      }
    });
  }

  static async findAll(page, limit) {
    const { skip, take } = PaginationUtils.getSkipTake(page, limit);
        
    const [users, total] = await Promise.all([
      this.prisma.exampleUser.findMany({
        skip,
        take,
        select: {
          id: true,
          username: true,
          email: true,
          roleId: true,
          role: {
            select: {
              name: true
            }
          },
          createdAt: true,
          updatedAt: true
        }
      }),
      this.prisma.exampleUser.count()
    ]);

    return PaginationUtils.getPaginationData(users, total, page, limit);
  }

  static async findById(id) {
    return this.prisma.exampleUser.findUnique({
      where: { id },
      select: {
        id: true,
        username: true,
        email: true,
        roleId: true,
        role: {
          select: {
            name: true
          }
        },
        createdAt: true,
        updatedAt: true
      }
    }); 
  }

  static async findByEmail(email) {
    return this.prisma.exampleUser.findUnique({
      where: { email }
    });
  }
}

export default UserRepository;
