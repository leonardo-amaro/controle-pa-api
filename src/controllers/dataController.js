import { getAll, getById, insert } from "../models/dataModel.js"

const getData = async (req, res) => {
  try {
    const data = await getAll();
    res.send(data);
  } catch (error) {
    res.status(500).send("Erro ao buscar dados: " + error.message);
  }
}

const getDataById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await getById(id);
    if (!data) {
      return res.status(404).send("Registro inexistente.");
    }
    res.send(data);
  } catch (error) {
    res.status(500).send("Erro ao buscar registro: " + error.message);
  }
}

const createData = async (req, res) => {
  const { data, periodo, sistole, diastole } = req.body;
  await insert({ data, periodo, sistole, diastole });
  res.status(201).send("Registro criado com sucesso!");
}

export {
  getData,
  getDataById,
  createData
}