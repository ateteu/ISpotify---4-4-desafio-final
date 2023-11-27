import './main.css'
import BlocoArtista from './BlocoArtista.jsx';

function Body() {
    
    return (
    <div id="body">

        <div id="tituloBody"> Artistas </div>

        <div id="linhasBody">
            <div id="linha1Body">
                <BlocoArtista 
                    srcFotoArtista="./images/engenheiros.png"
                    nomeArtista="Engenheiros do Hawaii"
                />
                <BlocoArtista 
                    srcFotoArtista="./images/cidadeNegra.png"
                    nomeArtista="Cidade Negra"
                />
                <BlocoArtista 
                    srcFotoArtista="./images/capital.png"
                    nomeArtista="Capital Inicial"
                />
                <BlocoArtista 
                    srcFotoArtista="./images/skank.png"
                    nomeArtista="Skank"
                />
                <BlocoArtista 
                    srcFotoArtista="./images/paralamas.png"
                    nomeArtista="Paralamas do Sucesso"
                />
            </div>

            <div id="linha2Body">
                <BlocoArtista 
                    srcFotoArtista="./images/lulu.png"
                    nomeArtista="Lulu Santos"
                />
                <BlocoArtista 
                    srcFotoArtista="./images/cazuza.png"
                    nomeArtista="Cazuza"
                />
                <BlocoArtista 
                    srcFotoArtista="./images/kidAbelha.png"
                    nomeArtista="Kid Abelha"
                />
                <BlocoArtista 
                    srcFotoArtista="./images/biquini.png"
                    nomeArtista="Biquini Cavadão"
                />
                <BlocoArtista 
                    srcFotoArtista="./images/rappa.png"
                    nomeArtista="O Rappa"
                />
            </div>
        </div>

    </div>
    );
}

export default Body;