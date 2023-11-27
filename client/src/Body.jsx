import './main.css'
import BlocoArtista from './BlocoArtista.jsx';

// Imports do React:
import React, { useState, useEffect } from "react"

function Body() {

    const [error, setError] = useState("");

    // Função para fazer pegar os dados dos artistas:

    const [artistas, setArtistas] = useState([]);
    useEffect(() => {
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
        
        getArtists();

    }, []); // O array vazio [] garante a execução única do getArtists
    
    return (
    <div id="body">

        <div id="tituloBody"> Artistas </div>
        <div id="linhasBody">
            {artistas.map((item, i) => {return (
                <div key={i}>
                    <img
                        src={ item.image }
                        width={ 100 }
                        style={{ borderRadius: "50%" }}
                    />
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

export default Body;