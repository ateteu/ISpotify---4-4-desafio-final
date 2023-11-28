import '../main.css'
import '../routes/pg cadastro/cadastro.css'
import './comp_gerais.css'

function BotaoCadastro(props) {
    
    return (
    <div id="botaoCadastro" onClick={props.onClick}> CADASTRAR </div>
    );
}

export default BotaoCadastro;