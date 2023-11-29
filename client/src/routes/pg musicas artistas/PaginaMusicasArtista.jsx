import React from 'react'
import '../../main.css'
import './musicas_artistas.css'

// Import dos componentes:
import ColunaLeft from '../../componentes gerais/ColunaLeft.jsx'
import BodyMusicas from './BodyMusicas.jsx'

function PaginaMusicasArtistas() {
    return (
        <div className="page">
            <ColunaLeft />
            <BodyMusicas />
        </div>
    );
}

export default PaginaMusicasArtistas;