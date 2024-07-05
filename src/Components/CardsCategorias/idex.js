import './CardsCategorias.css';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

export default function CardsCategoria(props) {
    return (
        <div className="cardsCategorias">
            <div className="cardCategoria">
                <img src={props.imagem} alt={props.titulo} />
                <h4>{props.titulo}</h4>
                <div className="cardsCategorias-botoes">
                    <button className="botaoFavorito" onClick={props.onToggleFavorite}>
                        {props.isFavorite ? <AiFillHeart color="red" /> : <AiOutlineHeart />}
                    </button>
                    <button className="botaoCategoria" onClick={props.onEdit}>Editar</button>
                    <button className="botaoCategoria" onClick={props.onDelete}>Apagar</button>
                </div>
            </div>
        </div>
    );
}

