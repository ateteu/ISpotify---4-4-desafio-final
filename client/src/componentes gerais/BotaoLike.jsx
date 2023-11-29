import React, { useState } from 'react'
import '../main.css'
import './comp_gerais.css'

function BotaoLike() {
    const [curtido, setCurtido] = useState(false);

    const handleLikeClick = () => {
        setCurtido(!curtido); // Inverte o estado curtido ao clicar no botão
    };

    return (
    <div>
        <img
            src={curtido ? './images/likeIconFilled.svg' : './images/likeIcon.svg'}
            id="botaoLike"
            onClick={ handleLikeClick }
        />
    </div>
    );
}

export default BotaoLike;