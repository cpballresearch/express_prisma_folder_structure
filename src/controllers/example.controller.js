import UserService from '../services/example.service.js';
import { ValidationError } from '../utils/errors/custom.errors.js';
import { handleDataRetrieval, handleSuccess } from '../utils/responsehandler/index.utils.js';

class ExampleUserController {
  static async createUser(req, res) {
    const userData = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      image: req.uploadedFiles?.image[0]?.fileName,
      roleId: parseInt(req.body.roleId, 10)
    } ;

    const user = await UserService.createUser(userData);
    return handleSuccess(res, user, 'User created successfully');
  }

  static async getUsers(req, res) {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;
    const users = await UserService.getUsers(page, limit);
    console.log(users);
    return handleDataRetrieval(res, users, 'Users retrieved successfully');
  }

  static async getUserById(req, res) {
    const { id } = req.params;
    if (!id) throw new ValidationError('User ID is required');

    const user = await UserService.getUserById(parseInt(id));
    return handleSuccess(res, user, 'User retrieved successfully');
  }
}

export default ExampleUserController;
