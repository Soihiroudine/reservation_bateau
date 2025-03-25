const express = require("express");
const router = express.Router();
const gerantControl = require("./../../controls/gerantControl");

// route [ Racine utilisateur ]
// Redirige vers la page de profil
router.get("/api/utilisateur", (req, res) => {
    res.redirect("/api/utilisateur/profil");
});

// route [ Connexion ]
router.get("/api/utilisateur/connexion", (req, res) => {
    if(req.session.user) {
        return res.redirect("/api/utilisateur/profil");
    }
    res.json({message : ""});
});

router.post("/api/utilisateur/connexion", gerantControl.connectionGerant.bind(gerantControl));

// route [ Inscription ]
router.get("/api/utilisateur/inscription", (req, res) => {
    if(req.session.user) {
        return res.redirect("/api/utilisateur/profil");
    }
    res.json({message : ""});
});

router.post("/api/utilisateur/inscription", gerantControl.addGerant.bind(gerantControl));

// route [ Deconnexion ]
router.get("/api/utilisateur/deconnexion", (req, res) => {
    // Route pour détruire la session
    req.session.destroy((err) => {
        if (err) {
            return res.send('Erreur lors de la déconnexion.');
        }
        console.log("Déconnexion réussie");
        res.redirect("/api/utilisateur/connexion");
});

});

// route [ Profil ]
router.get("/api/utilisateur/profil", (req, res) => {
    if(req.session.user) {
        return res.json({user : req.session.user});
    }
    return res.redirect("/api/utilisateur/connexion");
});


module.exports = router;