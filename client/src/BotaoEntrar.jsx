import './main.css'

function BotaoEntrar(props) {
    
    return (
        <div id="botaoEntrar" onClick={props.onClick}> ENTRAR </div>
    );
}

export default BotaoEntrar;