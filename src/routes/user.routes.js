import { Router } from "express";
import userController from "../controllers/user.controller.js";

const router = Router();

router.post("/users", userController.create);
router.get("/users", userController.findAll);
router.get("/users/:id", userController.findById);

export default router;
