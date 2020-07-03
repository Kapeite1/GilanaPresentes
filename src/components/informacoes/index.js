import React from 'react';
import './styles.scss';
import sac from './img/SAC.png';
import impressao from './img/impressao.png';

function Item (props) {
    return(
        <div className='info'>
            <img src={props.img} alt='imagem'></img>
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
                texto='Tire suas dúvidas à respeito de produtos, prazos, formas de pagamento, posição de pedidos entre outros assuntos. Estamos prontos para atendê-lo de forma rápida e fácil.'
                lf='Telefone: (22) 2778-4891'
                />
                <Item 
                img={impressao}
                nome='SERVIÇOS IMPRESSÃO'
                nome2='Envie seus documentos pelo Whatsapp'
                texto='Venha imprimir seus documentos na Gilana Presentes! Envie diretamente para o Whatsapp do setor de impressões. Quer saber mais? Entre em contato através
                do nosso WhatsApp.'
                lf='Telefone: (22) 999608-2881'
                />
        </div>
    )
}

export default Informacoes;