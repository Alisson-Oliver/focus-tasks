import express from "express";
import helmet from "helmet";

const app = express();

app.use(express.json());
app.use(helmet());

app.get("/api/v1", (req, res) => {
  res.status(200).json({
    message: "Bem-vindo(a) a API Focus Tasks",
    version: "1.0.0",
    status: "online",
  });
});

export default app;
