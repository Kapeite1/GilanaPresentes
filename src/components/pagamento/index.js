import React from 'react';
import "./styles.scss";
import entrega from './img/entrega.png';
import cifrao from './img/cifrao.png';
import contato from './img/contato.png'

function Forma(props){
    return (
        <div className='x1'>
            <div className='x2'>
            <img src={props.img}></img>
            </div>
            <div className="pagamento">
                <p className="linha1">{props.l1}</p>
                <p className="linha2">{props.l2}</p>
            </div>
        </div>
    )
}


function Pagamento(){
    return (
        <div className="component-pagamento">
            <Forma
            img={entrega}
            l1="ENTREGA EM SUA CASA"
            l2="Confira nosso raio de entrega"></Forma>
            <Forma 
            img={cifrao}
            l1="FORMAS DE PAGAMAENTO"
            l2="Pague no boleto ou nos cartões de crédito"></Forma>
            <Forma 
            img={contato}
            l1="INFORMAÇÃO PELO TELEFONE"
            l2="(22) 2778-4891"></Forma>
        </div>
    )
}

export default Pagamento;
