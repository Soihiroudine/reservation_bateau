// On import le framework express
const express = require("express");

// On créer l'application expressJs avec : app
const app = express();

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

app.get("/acceuil", (res, req) => {
    req.send("Vous étes maintenant dans l'acceuil !");
    return;
});

// On exporter l'application
module.exports = app;