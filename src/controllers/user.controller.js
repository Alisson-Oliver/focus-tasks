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
}

export default new UserController();
