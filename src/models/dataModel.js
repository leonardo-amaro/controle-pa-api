import db from "../config/database.js";

const getAll = async () => {
  const [rows] = await db.query("SELECT * FROM dados ORDER BY dados.data");
  return rows;
}

const getById = async (id) => {
  const query = "SELECT * FROM dados WHERE id = ?";
  const [rows] = await db.execute(query, [id]);
  return rows[0];
}

const insert = async ({ data, periodo, sistole, diastole }) => {
  const query = "INSERT INTO dados VALUES( DEFAULT, ?, ?, ?, ? )";
  const [result] = await db.execute(query, [data, periodo, sistole, diastole]);
  return result.insertId;

}

export {
  getAll,
  getById,
  insert
}