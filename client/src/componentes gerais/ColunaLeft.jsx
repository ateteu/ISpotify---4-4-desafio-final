import '../main.css'
import './comp_gerais.css'
import api from '../services/api.jsx'

// Imports do React:
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

function ColunaLeft() {
    
    const navigate = useNavigate();
    const [error, setError] = useState("");

    async function fazerLogout() {
        try {
            // Usa o método post para fazer o logout no sistema:
            await api.post("/users/logout");

            // Navega para a página inicial de login após fazer o logout:
            navigate('/');
        }
        catch(error) {
            console.log("Erro ao tentar fazer logout!");
            console.log(error);
            setError(error.response.data);
        }
    }

    return (  
    <div id="colunaLeft">

        <div id="LCupper">
            <div className="brand"> ISpotify ® </div>
            
            <div id="LCitem1">
                <img id="discoIcon" src="./images/disco.png"/>
                <div className="subtituloLC"> Artistas </div>
            </div>
            
            <div id="LCitem2">
                <img id="coracaoIcon" src="./images/like.png"/>
                <div className="subtituloLC"> Músicas Curtidas </div>
            </div>
        </div>

        <div id="LCitem3">
            <img id="logoutIcon" src="./images/sair.png"/>
            <div className="subtituloLC" id="logout" onClick={ fazerLogout }> Logout </div>
        </div>
        
    </div>
    );
}

export default ColunaLeft;