const express = require("express");
const router = express.Router();
const gerantControl = require("./../../controls/gerantControl");
const BateauControl = require("./../../controls/bateauControl");


const MESSAGE_CONNECTER = "Utilisateur connecté";
const MESSAGE_NON_CONNECTER = "Utilisateur non connecté";
// route [ Racine utilisateur ]

// Redirige vers la page de profil
// router.get("/api/utilisateur", (req, res) => {
//     res.redirect("/utilisateur");
// });

// route [ Connexion ]
router.get("/api/utilisateur/connexion", (req, res) => {
    if(req.session.user) {
        return res.json({
            connecter : true,
            user : req.session.user,
            message : MESSAGE_CONNECTER
        });
    }
    res.json({
        connecter : false,
        user : {},
        message : MESSAGE_NON_CONNECTER
    });
});

router.post("/api/utilisateur/connexion",
    gerantControl.connectionGerant.bind(gerantControl)
);

// route [ Inscription ]
router.get("/api/utilisateur/inscription", (req, res) => {
    if(req.session.user) {
        return res.status(200).json({
            connecter : true,
            user : req.session.user,
            message : MESSAGE_CONNECTER
        });
    }
    res.json({
        connecter : false,
        user : {},
        message : MESSAGE_NON_CONNECTER
    });
});

router.post("/api/utilisateur/inscription",
    gerantControl.addGerant.bind(gerantControl)
);

// route [ Deconnexion ]
router.get("/api/utilisateur/deconnexion", (req, res) => {
    // Route pour détruire la session
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({
                connecter : true,
                user : req.session.user,
                message : 'Erreur lors de la déconnexion.'
            });
        }
        res.status(200).json({
            connecter : false,
            user : {},
            message : "Déconnexion réussie"
        });
    });

});

// route [ Profil ]
router.get("/api/utilisateur/profil", (req, res) => {
    if(req.session.user) {
        return res.status(200).json({
            connecter : true,
            user : req.session.user,
            message : MESSAGE_CONNECTER
        });
    }
    res.json({
        connecter : false, 
        user : {},
        message : MESSAGE_NON_CONNECTER
    });
});


module.exports = router;