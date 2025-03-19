const express = require("express");
const router = express.Router();

// route [ Racine ]
// Redirige vers la page d'acceuil
router.get("/api/utilisateur", (req, res) => {
    res.redirect("/api/utilisateur/profil");
});

router.get("/api/utilisateur/connexion", (req, res) => {
    res.json({connexion : "Page de connexion !"});
});

router.get("/api/utilisateur/inscription", (req, res) => {
    res.json({connexion : "Page d'inscription !"});
});

router.get("/api/utilisateur/deconnexion", (req, res) => {
    res.json({connexion : "Page de deconnexion !"});
});

router.get("/api/utilisateur/profil", (req, res) => {
    res.json({connexion : "Page d'inscription !"});
});



module.exports = router;