

import Formulario from '../Formulario';
import './NovoFormulario.css';

export default function NovoFormulario({ categorias }) {

    

    return (
        <>
            <div className='paginaNovoFormulario'>
                <h1>Novo Vídeo</h1>
                <p>Complete o formulário para criar um novo card de vídeo.</p>            
            </div>
            <Formulario categorias={categorias} />
            
        </>
    );
}
