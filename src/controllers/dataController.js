import getAll from "../models/dataModel.js"

const getData = async (req, res) => {
  try {
    const data = await getAll();
    res.send(data);
  } catch (error) {
    res.status(500).send("Erro ao buscar dados: " + error.message);
  }
}

export default getData;