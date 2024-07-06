
import './CampoTexto.css';

export default function CampoTexto(props) {

    const aoDigitado = (evento) => {

        props.aoAlterado(evento.target.value);
    }

    return (
        <div className="campo-texto">
            <label> </label>
            <input value={props.valor} onChange={aoDigitado}  required={props.obrigatorio} type="text" placeholder={props.placeholder}/>
        </div>
    );
}