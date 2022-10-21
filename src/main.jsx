import React from 'react'
import ReactDOM from 'react-dom/client'

// Mis importaciones
import './styles.css'
import { DiarioApp } from './DiarioApp';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <DiarioApp />
        </BrowserRouter>
    </React.StrictMode>
)
