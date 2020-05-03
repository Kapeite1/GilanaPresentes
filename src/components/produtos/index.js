import React from 'react';
import "./styles.scss";
import mop from './img/mop.jpg';
import item3 from './img/item2.jpg';
import caderno from './img/caderno.jpg';
import kimeleka from './img/kimeleka.png'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'

function Item(props){
    return (
        <div className="item">
            <div className="imagem">
                <img src={props.foto}></img>
            </div>
            <div className="informacao">
                <p>{props.descricao}</p>
                <h1>{props.preco}</h1>
                <Button variant="secondary">Comprar</Button>
            </div>
        </div>
    )
}

function Titulo(props){
    return (
        <div className="titulo">
            <p>{props.l1}</p>
        </div>
    )
}

function Produtos(){
    return (
        <div className="component-produtos">
            <div className="titulo">
                <Titulo l1="PRODUTOS EM DESTAQUE"/>
            </div>
            <div className="produtos">
                <Item
                foto={kimeleka}
                descricao="Kimeleka Slime Glitter 180g Cores - Acrilex"
                preco="R$ 5,99"/>
                <Item
                foto={mop}
                descricao="Balde Mop Spin Mop360"
                preco="R$ 52,90"/>
                <Item
                foto={caderno}
                descricao="Caderno Espiral Capa Dura Colegial 10 Matérias Aloha 160 Folhas"
                preco="R$ 2,90"/>
                <Item
                foto={item3}
                descricao="Borracha"
                preco="R$ 3,50"/>
            </div>
            <Link to="/encarte virtual">
                <Button renderAs="button">
                    <span>Ver mais</span>
                </Button>
            </Link>
        </div>
    )
}

export default Produtos;