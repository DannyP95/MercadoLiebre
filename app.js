// const express = require('express');
// const fs = require('fs');
// const path = require('path');


// const app = express();
// const puerto = 3001;

// app.use(express.json());
// app.use('/', express.static(__dirname + '/public'));

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

// app.listen(puerto, () => {
//     console.log('Aplicación esuchando en puerto 3001');
// });

// ==========> requerimos los modulos para trabajar
const path = require("path");
const express = require("express");
const app = express();
const validarRegister = false;

// ==========> creamos la ruta a los archivos estaticos 
app.use(express.json());
app.use ('/', express.static(__dirname + '/public'))

app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
})

// FORMULARIO LOGIN 

app.get("/login", (req,res) => {
    let htmlPath = path.resolve(__dirname, "./views/login.html");
    res.sendFile(htmlPath)
})

app.post("/login", (req, res) => {
    res.send("LLEGO EL FORMULARIO DE LOGIN")
})

// FORMULARIO REGISTER

app.get("/register", (req,res) => {
    let htmlPath = path.resolve(__dirname, "./views/register.html");
    res.sendFile(htmlPath)
})

app.post("/register", (req, res) => {
    res.send("REGISTRO COMPLETADO");    
    let htmlPath = path.resolve(__dirname, "./views/register.html");
    res.sendFile(htmlPath)
})

// ==========> creamos el servidor y le pasamos un mensaje para verificar su funcionalidad

const port = process.env.PORT || 3001;
app.listen(port,() => console.log("Servidor corriendo en el puerto 3001"));

// app.listen(3333,()=>{
//     console.log("El servidor esta funcionando")
// })

