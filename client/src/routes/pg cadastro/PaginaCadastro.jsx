import '../../main.css'
import './cadastro.css'
import '../../componentes gerais/comp_gerais.css'

import BotaoCadastro from '../../componentes gerais/BotaoCadastro.jsx'
import api from '../../services/api.jsx'

// Imports do React:
import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

// Imports do MUI para os alertas:
import Alert from "@mui/material/Alert"

function PaginaCadastro() {

    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");

    async function handleSubmit() {
        try {
            await api.post("/users", {
                name: nome,
                email: email,
                password: senha,
                role: "user",
            });
            console.log("Sucesso!");

            // Navega para a página de login após o cadastro bem-sucedido:
            navigate('/');
        } 
        catch(error) {
            console.log("Erro ao tentar fazer o cadastro do usuário!");
            console.log(error);
            setError(error.response.data);
        }
    }

    return (
    <div id="cadastroBox">
        <div id="tituloCadastro">
            <div className="mainTitulo"> Inscrever-se em uma </div>
            <div className="mainTitulo"> conta grátis do </div>
            <div className="mainTitulo"> ISpotify ® </div>
        </div>

        <div id="inputsCadastro">
            <input 
                className="input" type="text" id="inputEmail" placeholder="Email" value={email}
                onChange={(evento) => { setEmail(evento.target.value); }}
            />

            <input 
                className="input" type="text" id="inputSenha" placeholder="Senha" value={senha}
                onChange={(evento) => { setSenha(evento.target.value); }}
            />

            <input 
                className="input" type="text" id="inputNome" placeholder="Como devemos chamar você?" value={nome}
                onChange={(evento) => { setNome(evento.target.value); }}
            />
        </div>

        <BotaoCadastro onClick={ handleSubmit }/>

        <div id="cadastroLastLine">
            <div> Já é um usuário do ISpotify? </div>
            <Link to="/" id="linkLogin"> FAÇA LOGIN </Link>
        </div>

        {error 
            // Em caso de erro, retorna uma mensagem de erro
            ? <Alert severity="error"> {error} </Alert> 
            : <div />
        }
    </div>
    );
}

export default PaginaCadastro;