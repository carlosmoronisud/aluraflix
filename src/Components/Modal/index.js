import React from 'react';
import './Modal.css';
import {  AiOutlineCloseCircle } from 'react-icons/ai';

export default function Modal({ isOpen, onClose, onSave, titulo, descricao, video, categoria, setTitulo, setDescricao, setVideo, setCategoria, categorias }) {
    if (!isOpen) return null;

    const limpar = () => {
        setTitulo('');
        setVideo('');
        setDescricao('');
        setCategoria('');
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                
                <form onSubmit={onSave}>
                <h2>EDITAR CARD:</h2>
                    <div className="modal-field">
                        <label>Título</label>
                        <input  type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                    </div>
                    <div className="modal-field">
                        <label>Categoria</label>
                        <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                            {categorias.map((cat, index) => (
                                <option key={index} value={cat.nome}>{cat.nome}</option>
                            ))}
                        </select>
                    </div>
                    <div className="modal-field">
                        <label>Link do Vídeo</label>
                        <input type="text" value={video} onChange={(e) => setVideo(e.target.value)} />
                    </div>
                    <div className="modal-field">
                        <label>Descrição</label>
                        <input type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                    </div>
                    <div className='modal-field-btn'>
                        <button type="submit">Salvar</button>
                        <button type='button' onClick={limpar}>Limpar </button>
                        
                    </div>                   
                </form>
                <button className='botao-fechar' onClick={onClose}><AiOutlineCloseCircle/></button>
            </div>
        </div>
    );
}
