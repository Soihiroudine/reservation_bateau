// On import le framework express
const express = require("express");

// On créer l'application expressJs avec : app
const app = express();

// on importe le fichier qui permet le changement dans notre base de donné
const executionDB = require("./server/config/executeDB");
executionDB("requetes.sql");

// On appele les routes


// Acces au fichier du projet - css, image
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Creation de routes
app.get("/", (res, req, next) => {
    req.send("Binvenu dans le serveur");
    return;
});

app.get("/api/acceuil", (res, req) => {
    req.json({ message: 'Hello from Node.js backend!' });
});


// On exporter l'application
module.exports = app;