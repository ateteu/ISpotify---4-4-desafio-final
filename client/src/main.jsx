import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'

// Import dos componentes:
import PaginaArtistas from './routes/PaginaArtistas.jsx'
import PaginaLogin from './routes/PaginaLogin.jsx'
import PaginaCadastro from './routes/PaginaCadastro.jsx'

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
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
