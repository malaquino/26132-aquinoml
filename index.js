import express from 'express';
import cors from "cors";
import "dotenv/config";
import loginRouter from "./src/routes/auth.routes.js"
import productsRouter from './src/routes/products.routes.js';

const app = express();

app.use(cors({

  origin: (origin, callback) => {

    if (!origin || origin === `http://localhost:${PORT}`) {

      callback(null, true);

    } else {

      callback(new Error("No permitido por CORS"));

    }

  },

  methods: ["GET", "POST", "PUT", "DELETE"],

  allowedHeaders: ["Content-Type", "Authorization"]

}));

app.use(express.json());
//app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log(`Datos recibidos: ${req.method} ${req.url}`);
  next();
})

app.use("/auth", loginRouter)
app.use("/api", productsRouter);

app.use(function (req, res, next) {
    res.status(404)
    res.send("Ruta No Encontrada")
});

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})

