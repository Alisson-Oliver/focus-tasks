import bcrypt from "bcrypt";

export const hashPassword = (password, salt) => {
  try {
    return bcrypt.hash(password, salt);
  } catch (error) {
    throw new Error("Falha no hash");
  }
};

export const comparePassword = (password, hashedPassword) => {
  try {
    return bcrypt.compare(password, hashedPassword);
  } catch (error) {
    throw new Error("Falha ao comparar as senhas");
  }
};
