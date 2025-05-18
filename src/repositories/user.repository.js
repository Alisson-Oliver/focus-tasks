import User from "../models/User.js";

class UserRepository {
  async create(data) {
    return await User.create(data);
  }

  async findAll() {
    return await User.findAll();
  }

  async findById(id) {
    return await User.findByPk(id);
  }

  async findByEmail(email) {
    return await User.findOne({ where: { email } });
  }

  async update(id, data) {
    return await User.update(data, { where: { id } });
  }

  async delete(id) {
    return await User.destroy({ where: { id } });
  }
}

export default new UserRepository();
