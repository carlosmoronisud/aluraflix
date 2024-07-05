import React from 'react';
import './Modal.css';

export default function Modal({ isOpen, onClose, onSave, titulo, descricao, video, categoria, setTitulo, setDescricao, setVideo, setCategoria, categorias }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Editar Card:</h2>
                <form onSubmit={onSave}>
                    <div className="modal-field">
                        <label>Título</label>
                        <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
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
                        <label>Descrição</label>
                        <input type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                    </div>
                    <div className="modal-field">
                        <label>Link do Vídeo</label>
                        <input type="text" value={video} onChange={(e) => setVideo(e.target.value)} />
                    </div>
                    <button type="submit">Salvar</button>
                    <button type="button" onClick={onClose}>Cancelar</button>
                </form>
            </div>
        </div>
    );
}
