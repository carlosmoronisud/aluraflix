import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logo from './LogoMain.png';

export default function Header() {
    const location = useLocation();

    return (
        <>
            <header>
                <div className="logo">                
                    <img src={logo} alt="logo" />
                </div>
                <div className="container-botoes">
                    <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
                        Home
                    </Link>
                    <Link to="/novo-formulario" className={`nav-link ${location.pathname === '/novo-formulario' ? 'active' : ''}`}>
                        Adicionar vídeo
                    </Link>
                </div>
            </header>
        </>
    );
}
