import userRepository from "../repositories/user.repository.js";
import { hashPassword } from "../utils/hash-password.util.js";

class UserService {
  async create(data) {
    const user = await userRepository.findByEmail(data.email);

    if (user) {
      throw new Error("E-mail já está sendo utilizado");
    }

    data.password = await hashPassword(data.password, 10);

    return await userRepository.create(data);
  }

  async findAll() {
    return await userRepository.findAll();
  }

  async findById(id) {
    const user = await userRepository.findById(id);

    if (!user) {
      throw new Error("Usuário não econtrado");
    }

    return user;
  }
}

export default new UserService();
