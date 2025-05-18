import express from "express";
import helmet from "helmet";
import userRoutes from "../routes/user.routes.js";

const app = express();

app.use(express.json());
app.use(helmet());

app.use("/api/v1", userRoutes);

app.get("/api/v1", (req, res) => {
  res.status(200).json({
    message: "Bem-vindo(a) a API Focus Tasks",
    version: "1.0.0",
    status: "online",
  });
});

export default app;
