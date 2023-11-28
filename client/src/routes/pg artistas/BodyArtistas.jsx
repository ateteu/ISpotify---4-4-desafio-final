import '../../main.css'
import './artistas.css'
import api from '../../services/api.jsx'

// Imports do React:
import React, { useState, useEffect } from "react"

function BodyArtistas() {

    const [error, setError] = useState("");

    // Função para fazer pegar os dados dos artistas:

    const [artistas, setArtistas] = useState([]);
    
    async function getArtists() {
        try {
            const resposta = await api.get("/artists");
            setArtistas(resposta.data);
        
            console.log("Sucesso! Dados dos artistas obtidos.");
        }
        catch(error) {
            setError(error.resposta.data);
            console.log("Houve um erro na requisição de dados dos artistas!");
            console.log(error);
        }
    }

    useEffect(() => {
        getArtists();
    }, []); // Array vazio [] indica que a função será executada apenas uma vez na montagem
    
    return (
    <div id="bodyArtistas">

        <div id="tituloBody"> Artistas </div>
        <div id="linhasBody">
            {artistas.slice(0, 10).map((item, i) => {return (
            
                <div className="blocoArtista" key={i}>

                    <img className="fotoArtista" src={ item.image } />
                    <div className="nomeArtista"> { item.name } </div>
                    <div className="legendaNomeArtista"> Artista </div>

                </div>
                ); })
            }
        </div>

        {error 
            // Em caso de erro, retorna uma mensagem de erro
            ? <Alert severity="error"> { error } </Alert> 
            : <div />
        }

    </div>
    );
}

export default BodyArtistas;