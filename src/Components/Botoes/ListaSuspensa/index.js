import './ListaSuspensa.css';

const ListaSuspensa = (props) => {
    return (
        <div className='lista-suspensa'>
            <label>{props.Label}</label>
            <select
                
                onChange={evento => props.aoAlterado(evento.target.value)}
                required={props.obrigatorio}
                value={props.valor}
            >
                {props.itens.map(item => (
                    <option key={item}>{item}</option>
                ))}
            </select>
        </div>
    );
}

export default ListaSuspensa;
