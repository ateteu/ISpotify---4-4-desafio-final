import '../main.css'
import '../routes/pg login/login.css'
import './comp_gerais.css'

function BotaoEntrar(props) {
    
    return (
        <div id="botaoEntrar" onClick={props.onClick}> ENTRAR </div>
    );
}

export default BotaoEntrar;