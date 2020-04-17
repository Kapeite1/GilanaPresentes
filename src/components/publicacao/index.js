import React from 'react';
import "./styles.scss";
import slide01 from './img/promocao.png';
import slide02 from './img/promocao2.png';
import slide03 from './img/promocao3.png';
import Carousel from 'react-bootstrap/Carousel';

function Publicacao() {
    return (
        <Carousel interval='3000'>
            <Carousel.Item>
                <img
                src={slide01}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                src={slide02}
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                src={slide03}
                alt="slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default Publicacao;