import db from "../config/database.js";

const getAll = async () => {
  const [rows] = await db.query("SELECT * FROM dados");
  return rows;
}

const getById = async (id) => {
  const query = "SELECT * FROM dados WHERE id = ?";
  const [rows] = await db.execute(query, [id]);
  return rows[0];
}

export {
  getAll,
  getById
}