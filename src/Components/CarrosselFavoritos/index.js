import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CarrosselFavoritos.css';

export default function CarrosselFavoritos({ cards }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: Math.min(3, cards.length), // Mostrar até 3 slides, mas no máximo o número de cards disponíveis
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="carrosselFavoritos">
            <h1>Meus Favoritos</h1>
            <Slider {...settings}>
                
                {cards.map((card, index) => (
                    <div key={index} className="carrosselFavoritos-item">
                        <a href={card.video} >
                            <img src={card.thumbnailURL} alt={card.titulo} />
                        </a>
                        <div className='carrosselFavoritos-item-info'>
                        <h4>{card.titulo}</h4>
                        <p>{card.categoria}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
