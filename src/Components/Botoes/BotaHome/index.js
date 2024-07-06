
import { Link } from "react-router-dom";
import "./BotaoHome.css";

export default function BotaoHome() {

    const location = window.location
    return (
        <>
            <nav>
                <Link  to="/"className={location.pathname === '/' ? 'active' : 'inactive'} >
                <button className={`botaoHome ${location.pathname === '/' ? 'active' : 'inactive'}`}>Home</button>
                </Link>
            </nav>
                
         
        </>
    );
}