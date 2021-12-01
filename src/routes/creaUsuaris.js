// Rutes
const http = require("http");
const router = require('express').Router();
const path = require('path');

const hostname = "localhost"
const port = "3001"

const usuaris = require('../components/usuaris.js');
// 

//Per executar aquest fitxer s'ha d'afegir a la ruta de /index.js

/*
usuaris.setUsuari("Kilian","Jornet",200);
usuaris.setUsuari("Jaume","Casanovas",201);
usuaris.setUsuari("Quiku","Mistu",202);
usuaris.setUsuari("Pere","Tàpies",203);
*/


//usuaris.setUsuari();

//module.exports = creaUsuari;