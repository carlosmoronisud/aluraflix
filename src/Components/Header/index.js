import React from 'react';
import './Header.css';
import logo from './LogoMain.png';
import BotaoHome from '../Botoes/BotaHome';
import NovoVideo from '../Botoes/NovoVideoBtn';

export default function Header() {
    return (
        <>
            <header>
                <div className="logo">                
                    <img src={logo} alt="logo" />
                </div>
                <div className="container-botoes">                
                    <BotaoHome />
                    <NovoVideo />             
                </div>
            </header>
        </>
    );
}