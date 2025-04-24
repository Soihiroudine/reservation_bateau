const db = require("./../server/config/db.js");

class Bateau {
    constructor() {}
    
    // On ajoute un bateau
    // idGerant : id du gérant qui possède le bateau
    // nom : nom du bateau
    // place : nombre de place du bateau
    // callback : fonction de rappel pour gérer la réponse
    // On utilise la méthode query de l'objet db pour exécuter une requête SQL
    // On insère un nouveau bateau dans la table bateau avec les valeurs fournies
    addBateau(nom, place, idGerant, callback) {
        db.query(
            "INSERT INTO bateau(nomBateau, nbPlace, idGerant) VALUES (?, ?, ?);",
            [nom, place, idGerant],
            (err, res) => {
                if (err) {
                    return callback(err, null);
                }
                return callback(null, res);
            }
        );
    }

    // On récupère tous les bateaux appartenant à un gérant selectionné
    // idGerant : id du gérant qui possède le bateau
    // callback : fonction de rappel pour gérer la réponse
    // On utilise la méthode query de l'objet db pour exécuter une requête SQL
    // On sélectionne tous les bateaux de la table bateau qui ont le même idGerant que celui fourni
    getBateauByIdGerant(idGerant, callback) {
        db.query("SELECT * FROM bateau WHERE idGerant = ?;", [idGerant], (err, res) => {
            if (err) {
                return callback(err, null);
            }
            return callback(null, res);
        });
    }

    // on supprime un bateau
    // idBateau : id du bateau à supprimer
    // callback : fonction de rappel pour gérer la réponse
    // On utilise la méthode query de l'objet db pour exécuter une requête SQL
    // On supprime le bateau de la table bateau qui a le même idBateau que celui fourni
    deleteBateau(idBateau, callback) {
        db.query("DELETE FROM bateau WHERE idBateau = ?;", [idBateau], (err, res) => {
            if (err) return callback(err, null);
            return callback(null, res);
        });
    }

    // on modifie un bateau
    // idBateau : id du bateau à modifier
    // nom : nouveau nom du bateau
    // place : nouveau nombre de place du bateau
    // callback : fonction de rappel pour gérer la réponse
    // On utilise la méthode query de l'objet db pour exécuter une requête SQL
    // On met à jour le bateau de la table bateau qui a le même idBateau que celui fourni
    updateBateau(idBateau, nom, place, callback) {
        db.query(
            "UPDATE bateau SET nomBateau = ?, nbPlace = ? WHERE idBateau = ?;",
            [nom, place, idBateau],
            (err, res) => {
                if (err) return callback(err, null);
                return callback(null, res);
            }
        );
    }
    
    
}

module.exports = Bateau;