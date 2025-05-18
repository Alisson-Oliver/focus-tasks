import { Router } from "express";
import userController from "../controllers/user.controller.js";

const router = Router();

router.post("/users", userController.create);
router.get("/users", userController.findAll);
router.get("/users/:id", userController.findById);
router.put("/users/:id", userController.update);
router.delete("/users/:id", userController.delete);

export default router;
