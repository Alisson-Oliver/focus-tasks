import userService from "../services/user.service.js";

class UserController {
  async create(req, res) {
    try {
      const user = await userService.create(req.body);

      return res.status(201).json(user);
    } catch (error) {
      if (error.message === "E-mail já está sendo utilizado") {
        return res
          .status(409)
          .json({ error: "E-mail já está sendo utilizado" });
      }
      return res.status(500).json({ error });
    }
  }

  async findAll(req, res) {
    try {
      const users = await userService.findAll();

      return res.status(200).json({ data: users });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  async findById(req, res) {
    try {
      const user = await userService.findById(req.params.id);
      return res.status(200).json(user);
    } catch (error) {
      if (error.message === "Usuário não econtrado") {
        return res.status(404).json({ error: "Usuário não econtrado" });
      }

      return res.status(500).json({ error });
    }
  }

  async update(req, res) {
    try {
      const user = await userService.update(req.body, req.params.id);

      return res.status(204).json(user);
    } catch (error) {
      if (error.message === "Usuário não econtrado") {
        return res.status(404).json({ error: "Usuário não econtrado" });
      }

      return res.status(500).json({ error });
    }
  }

  async delete(req, res) {
    try {
      await userService.delete(req.params.id);
      return res.status(204).json();
    } catch (error) {
      if (error.message === "Usuário não econtrado") {
        return res.status(404).json({ error: "Usuário não econtrado" });
      }

      return res.status(500).json({ error });
    }
  }
}

export default new UserController();
