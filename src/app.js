import('@dotenvx/dotenvx/config');
import express from "express";
import cors from "cors";
import routes from "./routes/index.js";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/", routes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`));