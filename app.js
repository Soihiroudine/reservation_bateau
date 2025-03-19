// On import le framework express
const express = require("express");
const path = require("path");

// On créer l'application expressJs avec : app
const app = express();

// on importe le fichier qui permet le changement dans notre base de donné
const executionDB = require("./server/config/executeDB");
executionDB("requetes.sql");

// On appele les routes
const routeAcceuil = require("./server/routes/routeAcceuil");

// Acces au fichier du projet - css, image
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Creation de routes
app.use("/", routeAcceuil);

// On exporter l'application
module.exports = app;