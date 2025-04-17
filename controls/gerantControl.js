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
                res.status(500).json({
                    connecter : false,
                    user : {},
                    message: "Quelques problèmes sont arriver à la création du Gerant."
                });
            }
            res.status(200).json({
                connecter : false,
                user : {},
                message: "Gerant ajouté"
            });
            console.log("Gerant ajouté");
        });
    }

    // connection d'un gerant
    connectionGerant(req, res) {
        const email = req.body.emailConnexion;
        const password = req.body.mdpConnexion;

        this.gerant.getGerantByEmail(email, (err, data) => {
            if (err) {
                res.status(500).json({
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
                        
                        res.status(200).json({
                            connecter : true,
                            user : req.session.user,
                            message: "Gerant connecté" 
                        });
                    } else {
                        res.status(500).json({
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
                res.status(500).json({
                    connecter : false,
                    user : {},
                    message: "Une erreur s'est produite lors de la récupération des gérants."
                });
            } else {
                res.status(200).json({
                connecter : true,
                user : req.session.user,
                message: "Réussie"
            });}
        });
    }
}

module.exports = new GerantControl;