const Gerant = require("../models/gerant");
const bycrypt = require("bcryptjs");

// Create and Save a new Gerant
class GerantControl {
    constructor() {
        this.gerant = new Gerant();
    }

    addGerant(req, res) {
        const nom = req.body.nom;
        const prenom = req.body.prenom;
        const email = req.body.emailInscription;
        const password = req.body.mdpInscription;

        // Hash password
        const hash = bycrypt.hashSync(password, 10);

        this.gerant.addGerant(nom, prenom, email, hash, (err) => {
            if (err) {
                console.log("Erreur lors de l'ajout du gérant :", err);
                return res.status(500).json({
                    connecter : false,
                    user : {},
                    message: "Gerant non ajouté"
                });
            }else if (err.code === "ER_DUP_ENTRY") {
                console.log("Email déjà utilisé");
                return res.status(400).json({
                    connecter : false,
                    user : {},
                    message: "Email déjà utilisé"
                });
            }
            // On envoie un message de succès
            console.log("Gérant ajouté avec succès");
            return res.status(200).json({
                connecter : false,
                user : {},
                message: "Gerant ajouté"
            });
        });
    }

    // connection d'un gerant
    connectionGerant(req, res) {
        const email = req.body.emailConnexion;
        const password = req.body.mdpConnexion;

        if (!email || !password) {
            return res.status(400).json({
                connecter : false,
                user : {},
                message: "Email ou mot de passe manquant"
            });
        }

        this.gerant.getGerantByEmail(email, (err, data) => {
            if (err) {
                console.error("Erreur lors de la connexion :", err);
                return res.status(500).json({
                    connecter: false,
                    user: {},
                    message: "Une erreur lors de la connexion est survenue."
                });
            } else {
                if (data.length > 0) {
                    // On compart les mot de passe
                    // Premier parametre le mot de passe en clair
                    // Deuxieme parametre le mot de passe crypté
                    const result = bycrypt.compareSync(password, data[0].motDePasse);

                    if (result) {
                        // res.send(data);
                        req.session.user = data[0];
                        console.log("Gérant connecté avec succès!");
                        
                        // On envoie un message de succès
                        return res.status(200).json({
                            connecter : true,
                            user : req.session.user,
                            message: "Vous etes bien connecté" 
                        });
                    } else if (!result) {
                        console.log("Mot de passe incorrect");
                        return res.status(400).json({
                            connecter : false,
                            user : {},
                            message: "Email ou mot de passe incorrect"
                        });
                    }else if (data.length === 0) {
                        console.log("Email non trouvé");
                        return res.status(400).json({
                            connecter : false,
                            user : {},
                            message: "Email ou mot de passe incorrect"
                        });
                    }else {
                        console.log("Mot de passe incorrect");
                        return res.status(400).json({
                            connecter : false,
                            user : {},
                            message: "Email ou mot de passe incorrect"
                        });
                    }
                }
            }
        });
    }

    // Retrieve all Gerants from the database.
    getGerant(req, res) {
        this.gerant.getGerant((err, data) => {
            if (err) {
                console.error("Erreur lors de la récupération des gérants :", err);
                return res.status(500).json({
                    connecter : false,
                    user : {},
                    message: "Une erreur s'est produite lors de la récupération des gérants."
                });
            } else {
                console.log("Gérants récupérés avec succès");
                return res.status(200).json({
                    connecter : true,
                    user : req.session.user,
                    message: "Gérants récupérés avec succès"
                });
            }
        });
    }
}

module.exports = new GerantControl;