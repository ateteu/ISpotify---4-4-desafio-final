import React from 'react'
import '../main.css'

// Import dos componentes:
import ColunaLeft from '../ColunaLeft.jsx'
import Body from '../Body.jsx'

function PaginaArtistas() {
    return (
        <div id="page">
            <ColunaLeft />
            <Body />
        </div>
    );
}

export default PaginaArtistas;