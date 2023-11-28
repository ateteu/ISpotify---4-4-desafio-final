import '../../main.css'
import './login.css'
import '../../componentes gerais/comp_gerais.css'

import BotaoEntrar from '../../componentes gerais/BotaoEntrar.jsx'
import api from '../../services/api.jsx'

// Imports do React:
import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

// Imports do MUI para os alertas:
import Alert from "@mui/material/Alert"

function PaginaLogin() {
    
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    async function fazerLogin() {
        try {
            // Usa o método post para fazer o login no sistema:
            await api.post("/users/login", { email: email, password: senha });

            // Navega para a página de artistas após o login bem-sucedido:
            navigate('/artistas');
        }
        catch(error) {
            console.log("Erro ao tentar fazer login!");
            console.log(error);
            setError(error.response.data);
        }
    }

    return (
    <div id="loginBox">
        <div className="mainTitulo"> ISpotify ® </div>
        <div className="mainTitulo" id="loginLine2"> Música para todos. </div>

        <div id="inputsLogin">

            <input 
                className="input" type="text" id="inputEmail" placeholder="Email" value={email}
                onChange={(evento) => { setEmail(evento.target.value); }}
            />

            <input 
                className="input" type="text" id="inputSenha" placeholder="Senha" value={senha}
                onChange={(evento) => { setSenha(evento.target.value); }}
            />

        </div>
        
        <BotaoEntrar onClick={ fazerLogin }></BotaoEntrar>
        
        <div id="loginLastLine">
            <div> NÃO TEM UMA CONTA? </div>
            <Link id="linkCadastro" to="/cadastro"> INSCREVA-SE </Link>
        </div>

        {error 
            // Em caso de erro, retorna uma mensagem de erro
            ? <Alert severity="error"> {error} </Alert> 
            : <div />
        }

    </div>
    );
}

export default PaginaLogin;