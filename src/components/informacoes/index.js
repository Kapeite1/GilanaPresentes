import React from 'react';
import './styles.scss';
import sac from './img/SAC.png';

function Item (props) {
    return(
        <div className='info'>
            <img src={props.img}></img>
            <p style={{fontWeight: "bold"}}>{props.nome}</p>
            <p style={{marginBottom: "5%"}}>{props.nome2}</p>
            <p style={{marginBottom: "5%"}}>{props.texto}</p>
            <p style={{fontWeight: "bold"}}>{props.lf}</p>
        </div>
    )
}

function Informacoes () {
    return(
        <div className='component-informacoes'>
                <Item 
                img={sac}
                nome='SAC'
                nome2='Serviço de Atendimento ao Cliente'
                texto='Tire suas dúvidas à respeito de produtos, prazos, formas de pagamento, 
                serviço de entrega, posição de pedidos entre outros assuntos. Estamos prontos 
                para atendê-lo de forma rápida e fácil.'
                lf='Telefone: (22) 2778-4891'
                />
                <Item 
                img={sac}
                nome='SAC'
                nome2='Serviço de Atendimento ao Cliente'
                texto='Tire suas dúvidas à respeito de produtos, prazos, formas de pagamento, 
                serviço de entrega, posição de pedidos entre outros assuntos. Estamos prontos 
                para atendê-lo de forma rápida e fácil.'
                lf='Telefone: (22) 2778-4891'
                />
                <Item 
                img={sac}
                nome='TELEVENDAS'
                nome2='Compre sem sair de casa'
                texto='Agora ficou mais fácil comprar na Gilana Presentes! Compre tudo com
                seu cartão de crédito sem sair de casa. Quer saber mais? Entre em contato através
                do nosso WhatsApp.'
                lf='Telefone: (22) 2778-4891'
                />
        </div>
    )
}

export default Informacoes;