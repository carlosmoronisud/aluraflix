
import { Link } from "react-router-dom";
import "./BotaoHome.css";

export default function BotaoHome() {
    return (
        <>
            <Link className="Link" to="/">
                <button className="botaoHome">Home</button>
            </Link>
            
                
         
        </>
    );
}