import './main.css'

function BlocoArtista(props) {
    
    return (
    <div className="blocoArtista">
        <img className="fotoArtista" src={props.srcFotoArtista}/>
        <div className="nomeArtista"> {props.nomeArtista} </div>
        <div className="legendaNomeArtista"> Artista </div>
    </div>
    );
}

export default BlocoArtista;