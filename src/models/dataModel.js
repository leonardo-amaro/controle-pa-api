import db from "../config/database.js";

const getAll = async () => {
  const [rows] = await db.query("SELECT * FROM dados");
  return rows;
}

export default getAll;