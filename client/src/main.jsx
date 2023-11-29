import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'

// Import dos componentes:
import PaginaArtistas from './routes/pg artistas/PaginaArtistas.jsx'
import PaginaLogin from './routes/pg login/PaginaLogin.jsx'
import PaginaCadastro from './routes/pg cadastro/PaginaCadastro.jsx'
import PaginaMusicasArtistas from './routes/pg musicas artistas/PaginaMusicasArtista.jsx'

// Configuração do router:
import { createBrowserRouter, RouterProvider } from "react-router-dom"
const router = createBrowserRouter([
    {
        // Essa página de login seria equivalente a uma página Home de um site:
        path: "/",
        element: <PaginaLogin />
    },
    {
        path: "/cadastro",
        element: <PaginaCadastro />
    },
    {
        path: "/artistas",
        element: <PaginaArtistas />
    },
    {
        path: "/musicas-artista",
        element: <PaginaMusicasArtistas />
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
