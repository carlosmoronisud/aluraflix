

import Formulario from '../Formulario';
import './NovoFormulario.css';

export default function NovoFormulario({ categorias }) {

    

    return (
        <div className='paginaNovoFormulario'>
            <h1>Novo Vídeo</h1>
            <Formulario categorias={categorias} />
            
        </div>
    );
}
