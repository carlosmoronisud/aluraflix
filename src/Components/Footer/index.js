import Header from '../Header';
import './Footer.css';
import logo from './LogoMain.png';
export default function Footer() {
    return (
        <footer>
            <Header />
            <img src={logo} alt="logo" />
            <h4>Desenvolvido por <a href="https://portfolio-carlosgarcias-projects.vercel.app/">Carlos Moroni Garcia/Portfólio.</a></h4>
            <p> <a href="https://github.com/carlosmoronisud">repositório deste projeto-AluraFlix 2024</a> </p>
        </footer>
    );
}