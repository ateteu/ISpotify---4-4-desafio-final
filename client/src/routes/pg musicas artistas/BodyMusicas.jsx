import '../../main.css'
import './musicas_artistas.css'
import Cookies from 'js-cookie'

// Imports do React:
import React, { useState, useEffect } from "react"

// Import dos componentes:
import BotaoLike from '../../componentes gerais/BotaoLike.jsx'
import BotaoExcluir from '../../componentes gerais/BotaoExcluir.jsx'
import BotaoPlay from '../../componentes gerais/BotaoPlay.jsx'
import BotaoDownload from '../../componentes gerais/BotaoDownload.jsx'
import BotaoMoreOptions from '../../componentes gerais/BotaoMoreOptions.jsx'

function BodyMusicas() {

    // Recupera o id do artista armazenado no cookie
    const idArtista = Cookies.get('idArtistaSelecionado');

    const [error, setError] = useState("");
    const [artistdata, setArtistdata] = useState([]);

    // Função pra pegar as músicas do artista:
    async function getArtistData() {
        try {
            const resposta = await api.get("/songs/artist/:id"); // <----- ESSA PARTE AQUI QUE TEM QUE ARRUMAR!!
            setArtistdata(resposta.data);
        
            console.log("Músicas do artista obtidas com sucesso!");
        }
        catch(error) {
            setError(error.resposta.data);
            console.log("Houve um erro na requisição de dados das músicas do artista!");
            console.log(error);
        }
    }
    useEffect(() => {
        getArtistData();
    }, []); 


    return (
    <div id="bodyMusicas">

        <div id="header_MusicasArtistas">

            <div id="header_dadosArtista">
                <img src="" />
                <div> ARTISTA </div>
                <div> { artistdata.artist } </div>
            </div>

            <div id="botoesHeader">
                <BotaoPlay />
                <BotaoLike />
                <BotaoDownload />
                <BotaoMoreOptions />
            </div>

        </div>
        


        <div id="subHeader_MusicasArtistas">
            <div> #TÍTULO </div>
            <div> ÁLBUM </div>
            <img id="relogio" src="../../../images/relogioIcon.svg" />
        </div>

        <div id="musicasArtista">
            {artistdata.map((item, i) => {return (
                
                <div className="blocoMusicaPlaylist" key={ i }>

                    <div> { item.title } </div>
                    <div> { item.artist } </div>
                    <div> { item.genre } </div>

                    <div id="botoesParaMusicas">
                        <BotaoLike />
                        <BotaoExcluir />
                    </div>

                </div>
                ); })
            }
        </div>

    </div>
    );
}

export default BodyMusicas;