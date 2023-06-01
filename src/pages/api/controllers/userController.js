import conn from "../config/db";

export const getUsers = async () => {
  const query = "SELECT * FROM users;";
  const users = await conn.query(query);
  if (users) {
    return users;
  } else {
    throw new Error("No redeems");
  }
};
