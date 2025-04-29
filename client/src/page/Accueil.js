import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavbarDafault from '../components/Navbar';
import Header from '../components/Header';
import bateau from "../assets/image acceuil/bateau.jpeg";
import drapeau from "../assets/image acceuil/drapeau.png";
import yacht from "../assets/image acceuil/yacht.jpeg";
import tortue from "../assets/image acceuil/tortue.jpeg";
import ilot from "../assets/image acceuil/ilot.jpg";
import ylang from "../assets/image acceuil/ylang2.jpg";
import Maki from "../assets/image acceuil/Maki.jpeg";

const Accueil = () => {

    const [message, setMessage] = useState('');

    useEffect(() => {
        // Appel API vers le backend
        axios.get('/api/accueil')
            .then(response => {
            setMessage(response.message);
        })
        .catch(error => {
            console.error('Erreur lors de la récuperation du message', error);
        });

    }, []);

    

    return (
        <div>
            {/* <NavbarDafault /> */}
            <Header>
                <NavbarDafault/>
            </Header>

    <div id="slider">
        <img src={bateau} alt="La forêt de peupliers" id="slide"/>
        <div id="precedent" onclick="ChangeSlide(-1)"></div>
        <div id="suivant" onclick="ChangeSlide(1)"></div>

        <img src={drapeau} alt="La forêt de peupliers" id="slide"/>
        <div id="precedent" onclick="ChangeSlide(-1)"></div>
        <div id="suivant" onclick="ChangeSlide(1)"></div>
    </div>

    <div id="slider">
        <img src={yacht} alt="La forêt de peupliers" id="slide"/>
        <div id="precedent" onclick="ChangeSlide(-1)"></div>
        <div id="suivant" onclick="ChangeSlide(1)"></div>
    </div>

    <div id="slider">
        <img src={tortue} alt="La forêt de peupliers" id="slide"/>
        <div id="precedent" onclick="ChangeSlide(-1)"></div>
        <div id="suivant" onclick="ChangeSlide(1)"></div>
    </div>

    <div id="slider">
        <img src={ilot} alt="La forêt de peupliers" id="slide"/>
        <div id="precedent" onclick="ChangeSlide(-1)"></div>
        <div id="suivant" onclick="ChangeSlide(1)"></div>
    </div>

    <div id="slider">
        <img src={ylang} alt="La forêt de peupliers" id="slide"/>
        <div id="precedent" onclick="ChangeSlide(-1)"></div>
        <div id="suivant" onclick="ChangeSlide(1)"></div>
    </div>


    <div id="slider">
        <img src={Maki} alt="La forêt de peupliers" id="slide"/>
        <div id="precedent" onclick="ChangeSlide(-1)"></div>
        <div id="suivant" onclick="ChangeSlide(1)"></div>
    </div>




    <p>{message}</p>

    
        </div>
    );
}

export default Accueil;