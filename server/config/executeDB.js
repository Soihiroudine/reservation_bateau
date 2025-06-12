const fs = require("fs");
const connexionDB = require("./db");

/**
 * Fonction qui prend en paramètre un fichier
 * 
 * Il exécute les commandes SQL
 * 
 * Attention, ne pas utilisé n'importe quel fichier car peut supprimer les donnés des tables
 * - Donc après utilisation il faut enlevé l'appèl de la fonction
 */
const executionFichierPourBDD = (cheminDeFichier) => {
    fs.readFile(cheminDeFichier, 'utf8', (err, data) => {
        if (err) {
            console.error("Erreur de lecture du fichier SQL : ", err);
            return;
        }

        // Séparer les commandes SQL par ligne
        const lines = data.split(';');  // On suppose que chaque commande SQL se termine par ;

        // Exécuter chaque ligne
        let lineIndex = 0;

        function executeNextLine() {
            if (lineIndex < lines.length) {
                const line = lines[lineIndex].trim();
                if (line) {  // Vérifie si la ligne n'est pas vide
                    connexionDB.query(line, (error, results) => {
                        if (error) {
                            console.error(`Erreur lors de l'exécution de la ligne ${lineIndex + 1}: `, error);
                        } 
                        // else {
                        //     console.log(`Résultat de la ligne ${lineIndex + 1}:`, results);
                        // }
                        lineIndex++;
                        executeNextLine(); // Exécuter la ligne suivante
                    });
                } else {
                    lineIndex++;
                    executeNextLine(); // Ignorer les lignes vides
                }
            } else {
                connexionDB.end();  // Fermer la connexion une fois que toutes les lignes sont exécutées
                console.log("Toutes les commandes SQL ont été exécutées.");
            }
        }

        executeNextLine();  // Démarrer l'exécution des lignes
    });
}

module.exports = executionFichierPourBDD;