import('@dotenvx/dotenvx/config');
import express from "express";
import routes from "./routes/index.js";

const app = express();
app.use("/", routes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`));