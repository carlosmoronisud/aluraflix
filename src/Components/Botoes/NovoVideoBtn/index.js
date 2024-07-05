import { Link } from 'react-router-dom';
import './NovoVideo.css';

export default function NovoVideo() {
    return (
        <>
            <Link className="Link" to="/novo-formulario">
            <button className="botaoNovoVideo">Novo Video</button>
            </Link>
        </>
    );
}