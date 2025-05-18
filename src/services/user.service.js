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

  async update(data, id) {
    const user = await userRepository.findById(id);

    if (!user) {
      throw new Error("Usuário não econtrado");
    }

    if (data.password) {
      data.password = await hashPassword(data.password, 10);
    }

    await userRepository.update(id, data);
    return await this.findById(id);
  }

  async delete(id) {
    const user = await userRepository.findById(id);

    if (!user) {
      throw new Error("Usuário não econtrado");
    }

    return await userRepository.delete(id);
  }
}

export default new UserService();
