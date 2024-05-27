const express = require('express');
const {mongoConnet} = require('./src/databases/config');
const clienteRoutes = require('./src/routes/cliente');
const etapasRoutes = require('./src/routes/etapas');
const tipoProyectoRoutes = require('./src/routes/tipoProyecto');
const universidadRoutes = require('./src/routes/universidad');

const dotenv = require("dotenv").config();
const cors = require('cors');
mongoConnet();

const app = express();
const port = process.env.PORT || 9000;

app.use(cors({
    origin: '*'
}))

app.listen(port,() => console.log("server listenig on sport", port));

//Middleware
app.use(express.json());
app.use('/api/v1/cliente',clienteRoutes);
app.use('/api/v1/etapa',etapasRoutes);
app.use('/api/v1/tipoProyecto',tipoProyectoRoutes);
app.use('/api/v1/universidad',universidadRoutes);

//routes
app.get("/",(req,res)=>{
    res.send("Welcome to my api");
})

app.get("*",(req,res)=>{
    res.status(404).json({
        msj: "No encontrado",
        status: 404
    });
})