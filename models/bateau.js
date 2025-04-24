const db = require("./../server/config/db.js");

class Bateau {
    constructor() {}
    
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

    getBateauByIdGerant(idGerant, callback) {
        db.query("SELECT * FROM bateau WHERE idGerant = ?;", [idGerant], (err, res) => {
            if (err) {
                return callback(err, null);
            }
            return callback(null, res);
        });
    }

    deleteBateau(idBateau, callback) {
        db.query("DELETE FROM bateau WHERE idBateau = ?;", [idBateau], (err, res) => {
            if (err) return callback(err, null);
            return callback(null, res);
        });
    }

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