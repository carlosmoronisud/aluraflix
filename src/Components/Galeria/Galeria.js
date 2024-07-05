import CardsCategoria from '../CardsCategorias/idex';
import './Galeria.css';

export default function Galeria(props) {    
    

    return (
        <>
            <section   style={{backgroundColor: props.corfundo}}>
                <h1 style={{color: props.corNome}}>
                    {props.nome}
                </h1>
                <div >
                    <CardsCategoria />
                </div>

            </section >
        </>
    );
}

