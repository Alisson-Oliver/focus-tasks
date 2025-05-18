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
}

export default new UserService();
