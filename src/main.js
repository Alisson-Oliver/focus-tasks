import "dotenv/config";
import { conn } from "./config/database.config.js";
import app from "./config/server.config.js";

const PORT = process.env.PORT;

conn
  .authenticate()
  .then(() => {
    console.log("Conexão feita com sucesso!");
    app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
  })
  .catch((e) => console.log(e));
