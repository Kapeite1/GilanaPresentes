import React from 'react';
import "./styles.scss";
import item1 from './img/item.jpg';
import item2 from './img/item2.jpg';
import item3 from './img/item3.jpg';
import Button from 'react-bootstrap/Button';

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
                foto={item1}
                descricao="Borracha"
                preco="R$ 0,50"/>
                <Item
                foto={item2}
                descricao="Borracha para Desenho"
                preco="R$ 1,50"/>
                <Item
                foto={item3}
                descricao="Borracha"
                preco="R$ 2,90"/>
                <Item
                foto={item3}
                descricao="Borracha"
                preco="R$ 3,50"/>
                <Item
                foto={item3}
                descricao="Borracha"
                preco="R$ 3,50"/>
                 <Item
                foto={item3}
                descricao="Borracha"
                preco="R$ 3,50"/>
                <Item
                foto={item3}
                descricao="Borracha"
                preco="R$ 3,50"/>
                <Item
                foto={item3}
                descricao="Borracha"
                preco="R$ 3,50"/>
            </div>
        </div>
    )
}

export default Produtos;