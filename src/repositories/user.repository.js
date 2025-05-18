import User from "../models/User.js";

class UserRepository {
  async create(data) {
    return await User.create(data);
  }

  async findByEmail(email) {
    return await User.findOne({ where: { email } });
  }
}

export default new UserRepository();
