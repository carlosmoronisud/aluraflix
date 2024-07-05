
import CarrosselFavoritos from '../../CarrosselFavoritos';
import Modal from '../../Modal';
import { useState, useEffect } from 'react';
import './Home.css';
import CardsCategoria from '../../CardsCategorias/idex';

const getYouTubeThumbnail = (videoURL) => {
    const videoId = videoURL.split('v=')[1];
    const ampersandPosition = videoId.indexOf('&');
    if (ampersandPosition !== -1) {
        return `https://img.youtube.com/vi/${videoId.substring(0, ampersandPosition)}/0.jpg`;
    }
    return `https://img.youtube.com/vi/${videoId}/0.jpg`;
};

export default function Home() {
    const [cards, setCards] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentCardId, setCurrentCardId] = useState(null);
    const [editTitulo, setEditTitulo] = useState('');
    const [editDescricao, setEditDescricao] = useState('');
    const [editVideo, setEditVideo] = useState('');
    const [editCategoria, setEditCategoria] = useState('');

    const categoriaVideos = [
        { nome: 'Musicas', corNome: '#fff', corfundo: '#6BD1FF' },
        { nome: 'Filmes', corNome: '#E53935', corfundo: '#00C86F' },
        { nome: 'Series', corNome: '#000', corfundo: '#FFBA05' },
        { nome: 'Animes', corNome: '#00C86F', corfundo: '#E53935' }
    ];

    useEffect(() => {
        const initialCards = [
            {
                id: 1,
                titulo: 'Título de Música',
                descricao: 'Descrição de Música',
                video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Link do vídeo de música
                thumbnailURL: getYouTubeThumbnail('https://www.youtube.com/watch?v=dQw4w9WgXcQ'),
                categoria: 'Musicas',
                isFavorite: true
            },
            {
                id: 2,
                titulo: 'Título de Filme',
                descricao: 'Descrição de Filme',
                video: 'https://www.youtube.com/watch?v=abcd1234', // Link do vídeo de filme
                thumbnailURL: getYouTubeThumbnail('https://www.youtube.com/watch?v=abcd1234'),
                categoria: 'Filmes',
                isFavorite: true
            },
            {
                id: 3,
                titulo: 'Título de Série',
                descricao: 'Descrição de Série',
                video: 'https://www.youtube.com/watch?v=efgh5678', // Link do vídeo de série
                thumbnailURL: getYouTubeThumbnail('https://www.youtube.com/watch?v=efgh5678'),
                categoria: 'Series',
                isFavorite: true
            },
            {
                id: 4,
                titulo: 'Título de Anime',
                descricao: 'Descrição de Anime',
                video: 'https://www.youtube.com/watch?v=ijkl9012', // Link do vídeo de anime
                thumbnailURL: getYouTubeThumbnail('https://www.youtube.com/watch?v=ijkl9012'),
                categoria: 'Animes',
                isFavorite: true
            }
        ];

        const storedCards = JSON.parse(localStorage.getItem('cards')) || [];
        if (storedCards.length === 0) {
            localStorage.setItem('cards', JSON.stringify(initialCards));
            setCards(initialCards);
        } else {
            setCards(storedCards);
        }
    }, []);

    const handleDelete = (id) => {
        const updatedCards = cards.filter(card => card.id !== id);
        setCards(updatedCards);
        localStorage.setItem('cards', JSON.stringify(updatedCards));
    };

    const handleEdit = (id) => {
        const cardToEdit = cards.find(card => card.id === id);
        setCurrentCardId(id);
        setEditTitulo(cardToEdit.titulo);
        setEditDescricao(cardToEdit.descricao);
        setEditVideo(cardToEdit.video);
        setEditCategoria(cardToEdit.categoria);
        setIsModalOpen(true);
    };

    const handleSave = (event) => {
        event.preventDefault();
        const updatedCards = cards.map(card => 
            card.id === currentCardId ? 
            { ...card, titulo: editTitulo, descricao: editDescricao, video: editVideo, categoria: editCategoria } : 
            card
        );

        setCards(updatedCards);
        localStorage.setItem('cards', JSON.stringify(updatedCards));
        setIsModalOpen(false);
    };

    const handleToggleFavorite = (id) => {
        const updatedCards = cards.map(card => 
            card.id === id ? { ...card, isFavorite: !card.isFavorite } : card
        );
        setCards(updatedCards);
        localStorage.setItem('cards', JSON.stringify(updatedCards));
    };

    const favoriteCards = cards.filter(card => card.isFavorite);

    return (
        <div className='paginaHome'>
            <section className='paginaHome-content'>
                {favoriteCards.length > 0 && <CarrosselFavoritos cards={favoriteCards} />}
                
                {categoriaVideos.map(categoria => (
                    <div key={categoria.nome} className="galeria" style={{ backgroundColor: categoria.corfundo }}>
                        <h2 style={{ color: categoria.corNome }}>{categoria.nome}</h2>
                        <div className="galeria-cards">
                            {cards.filter(card => card.categoria === categoria.nome).map((card) => (
                                <CardsCategoria
                                    key={card.id}
                                    titulo={card.titulo}
                                    descricao={card.descricao}
                                    video={card.video}
                                    imagem={card.thumbnailURL}
                                    isFavorite={card.isFavorite}
                                    onDelete={() => handleDelete(card.id)}
                                    onEdit={() => handleEdit(card.id)}
                                    onToggleFavorite={() => handleToggleFavorite(card.id)}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </section>
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={handleSave}
                titulo={editTitulo}
                video={editVideo}
                descricao={editDescricao}
                categoria={editCategoria}
                setTitulo={setEditTitulo}
                setVideo={setEditVideo}
                setDescricao={setEditDescricao}
                setCategoria={setEditCategoria}
                categorias={categoriaVideos}
            />
        </div>
    );
}
//style={{ color: categoria.corNome }}