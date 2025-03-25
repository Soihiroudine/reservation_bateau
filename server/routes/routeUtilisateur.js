const express = require("express");
const router = express.Router();
const gerantControl = require("./../../controls/gerantControl");
const { connect } = require("http2");

// route [ Racine utilisateur ]
// Redirige vers la page de profil
// router.get("/api/utilisateur", (req, res) => {
//     res.redirect("/utilisateur");
// });

// route [ Connexion ]
router.get("/api/utilisateur/connexion", (req, res) => {
    if(req.session.user) {
        return res.json({connecter : true});
    }
    res.json({connecter : false});
});

router.post("/api/utilisateur/connexion",
    gerantControl.connectionGerant.bind(gerantControl)
);

// route [ Inscription ]
router.get("/api/utilisateur/inscription", (req, res) => {
    if(req.session.user) {
        res.json({connecter : true});
    }
    res.json({connecter : false});
});

router.post("/api/utilisateur/inscription",
    gerantControl.addGerant.bind(gerantControl)
);

// route [ Deconnexion ]
router.get("/api/utilisateur/deconnexion", (req, res) => {
    // Route pour détruire la session
    req.session.destroy((err) => {
        if (err) {
            res.send('Erreur lors de la déconnexion.');
            return res.json({connecter : true});
        }
        console.log("Déconnexion réussie");
        res.json({connecter : false});
    });

});

// route [ Profil ]
router.get("/api/utilisateur/profil", (req, res) => {
    if(req.session.user) {
        return res.json({user : req.session.user});
    }
    res.json({connecter : false});
});


module.exports = router;