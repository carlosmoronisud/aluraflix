import { Link } from 'react-router-dom';

import './NovoVideo.css';


export default function NovoVideo() {
    const location = window.location
    return (
        <>
            <Link  to="/novo-formulario" className={location.pathname === '/novo-formulario' ? 'active' : 'inactive'} >
                <button className={`botaoNovoVideo ${location.pathname === '/novo-formulario' ? 'active' : 'inactive'}`}>Novo Video</button>
            </Link>
        </>
    );
}