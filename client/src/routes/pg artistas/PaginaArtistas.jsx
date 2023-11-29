import React from 'react'
import '../../main.css'
import './artistas.css'

// Import dos componentes:
import ColunaLeft from '../../componentes gerais/ColunaLeft.jsx'
import BodyArtistas from './BodyArtistas.jsx'

function PaginaArtistas() {
    return (
        <div className="page">
            <ColunaLeft />
            <BodyArtistas />
        </div>
    );
}

export default PaginaArtistas;