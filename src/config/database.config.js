import { Sequelize } from "sequelize";

const { DB_NAME, DB_PASSWORD, DB_USER, DB_HOST, DB_PORT, DB_DIALECT } =
  process.env;

export const conn = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: DB_DIALECT,
});
