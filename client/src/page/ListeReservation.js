import React, { /* useEffect, useState */ } from 'react';
// import axios from 'axios';
import Header from '../components/Header';
import NavbarGerant from '../components/NavbarGerant';
// import { Navigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import { notification } from "../components/ToastNotification";
// import Chargement from '../components/Spinner';

const Bateau = () => {
    return (
        <div>
            <Header>
                <NavbarGerant />
            </Header>
            <div className="container">
                <h1>Gestion des Bateaux</h1>
            </div>
        </div>
    );

}
export default Bateau;