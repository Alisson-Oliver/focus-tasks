import "dotenv/config";
import { conn } from "./config/database.config.js";

conn
  .authenticate()
  .then(() => {
    console.log("Conexão feita com sucesso!");
  })
  .catch((e) => console.log(e));
