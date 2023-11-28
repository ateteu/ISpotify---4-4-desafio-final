import './main.css'
import './comp_gerais.css'

function CampoDeInput(props) {
    
    return (
    <div>
        <input
            className="input" type="text"
            id={props.idInput}
            placeholder={props.inputPlaceholder}
        />
    </div>
    );
}

export default CampoDeInput;