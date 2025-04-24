const db = require("./../server/config/db.js");

class Gerant {
  constructor() {}

    // On ajoute un gérant
    // nom : nom du gérant
    // prenom : prénom du gérant
    // email : email du gérant
    // password : mot de passe du gérant
    // callback : fonction de rappel pour gérer la réponse
    // On utilise la méthode query de l'objet db pour exécuter une requête SQL
    // On insère un nouveau gérant dans la table gerant avec les valeurs fournies
  addGerant(nom, prenom, email, password, callback) {
    db.query("INSERT INTO gerant(nomGerant, prenomGerant, emailGerant, motDePasse) VALUES (?, ?, ?, ?);",
        [nom, prenom, email, password],
            (err, res) => {
                if (err) {
                    return callback(err, null);
                }
                return callback(null, res);
            }
        );
    }

    // On veut avoir un gerant par son email
    // email : email du gérant
    // callback : fonction de rappel pour gérer la réponse
    // On utilise la méthode query de l'objet db pour exécuter une requête SQL
    // On sélectionne tous les gérants de la table gerant qui ont le même email que celui fourni
    getGerantByEmail(email, callback) {
        db.query("SELECT * FROM gerant WHERE emailGerant = ?;", [email], (err, res) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, res);
        });
    }
    
    // On veut avoir tous les gérants
    // callback : fonction de rappel pour gérer la réponse
    // On utilise la méthode query de l'objet db pour exécuter une requête SQL
    // On sélectionne tous les gérants de la table gerant
    getGerant(callback) {
        db.query("SELECT * FROM gerant;", (err, res) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, res);
        });
    }
}

module.exports = Gerant;