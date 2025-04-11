import dotenv from "dotenv";
import express from "express";
import routes from "./routes/index.js"

dotenv.config();

const app = express();
app.use("/", routes)

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`));