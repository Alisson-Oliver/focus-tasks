import { DataTypes } from "sequelize";
import { conn } from "../config/database.config.js";
import User from "./User.js";

const Task = conn.define(
  "Task",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM("todo", "in_progress", "done"),
    },
    imagem_url: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    tableName: "tasks",
    timestamps: true,
  }
);

Task.hasMany(User, {
  foreignKey: "user_id",
  as: "users",
});

export default Task;
