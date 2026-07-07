import express from 'express';
import cors from "cors";
import "dotenv/config";

const app = express();

app.use(cors({

  origin: (origin, callback) => {

    if (!origin || origin === `http://localhost:${PORT}`) {

      callback(null, true);

    } else {

      callback(new Error("No permitido por CORS"));

    }

  },

  methods: ["GET", "POST", "DELETE"],

  allowedHeaders: ["Content-Type", "Authorization"]

}));

app.use(express.json());

app.use((req, res, next) => {
  console.log(`Datos recibidos: ${req.method} ${req.url}`);
  next();
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})

