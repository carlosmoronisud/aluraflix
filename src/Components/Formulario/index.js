import CriarCard from '../Botoes/CriarCard/CriarCard';
import ListaSuspensa from '../Botoes/ListaSuspensa';
import CampoTexto from '../CampoTexto/Index';
import { useState } from 'react';
import './Formulario.css';
import { v4 as uuidv4 } from 'uuid';

export default function Formulario({ categorias }) {

    const [titulo, setTitulo] = useState('');
    const [video, setVideo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [categoria, setCategoria] = useState('');

    // Função para extrair o ID do vídeo do YouTube
    const getYouTubeVideoID = (url) => {
        const urlObj = new URL(url);
        return urlObj.searchParams.get('v');
    };

    // Função para construir a URL da miniatura do vídeo do YouTube
    const getYouTubeThumbnailURL = (videoID) => {
        return `https://img.youtube.com/vi/${videoID}/hqdefault.jpg`;
    };

    const aoSalvar = (evento) => {
        evento.preventDefault();
        
        const videoID = getYouTubeVideoID(video);
        const thumbnailURL = getYouTubeThumbnailURL(videoID);
        const novoCard = { titulo, video, descricao, categoria, thumbnailURL, id: uuidv4() };
        const storedCards = JSON.parse(localStorage.getItem('cards')) || [];
        localStorage.setItem('cards', JSON.stringify([...storedCards, novoCard]));
        console.log('submetido', [titulo, video, descricao, categoria, thumbnailURL]);
        setTitulo('');
        setVideo('');
        setDescricao('');
        setCategoria('');
    };

    const limpar = () => {
        setTitulo('');
        setVideo('');
        setDescricao('');
        setCategoria('');
    }

    

    return (
        <div className='cardForm'>
            <h1>Criar Card</h1>
            <form onSubmit={aoSalvar} className='formulario'>
                <div className='listas'>
                    <CampoTexto
                        valor={titulo}
                        aoAlterado={valor => setTitulo(valor)}
                        obrigatorio={true}
                        label="Título"
                        placeholder="Insira o título do vídeo" />
                    <ListaSuspensa
                        valor={categoria}
                        aoAlterado={valor => setCategoria(valor)}
                        obrigatorio={true}
                        Label="Categoria"
                        itens={categorias.map(categoria => categoria.nome)}
                    />
                </div>
                <CampoTexto
                    valor={video}
                    aoAlterado={valor => setVideo(valor)}
                    obrigatorio={true}
                    label="Vídeo"
                    placeholder="Insira o link do vídeo" />
                <CampoTexto
                    valor={descricao}
                    aoAlterado={valor => setDescricao(valor)}
                    obrigatorio={true}
                    label="Descrição"
                    placeholder="Insira a descrição do vídeo" />
                <div className='botao'>
                    <CriarCard />
                    <button className='limpar' onClick={limpar}>Limpar</button>
                </div>
            </form>
        </div>
    );
}

