import React from 'react';
import './styles.scss'
import formasPagamento from './img/formas-pagamentos.png';
import { Link } from 'react-router-dom'

function InformacaoFooter (props) {
    return (
        <div>
            <p style={{fontWeight: "bold"}}>{props.l1}</p>
            <p>{props.l2}</p>
            <p>{props.l3}</p>
        </div>
        
    )
}


function Footer () {
    return(
        <footer className='component-footer'>
                <div className='informacao-footer-1'>
                    <div>
                        <p className='estilo1'>RECEBA NOSSAS OFERTAS</p>
                        <p>Cadastre seu e-mail para receber nossas ofertas e promoções exclusivas:</p>
                    </div>
                    <form className="search-container">
                        <input type="text" placeholder="Digite seu e-mail" name="search"/>
                        <button type="submit">INSCREVA-SE!<i></i></button>
                    </form>
                </div>
                <div className='informacao-footer-2'>
                    <div className='informacao-footer'>
                        <p className='estilo1'>CONTATO</p>
                        <InformacaoFooter 
                        l1='ENDEREÇO'
                        l2='Rua Laura Teixeira da Silva, 29 - Centro - Casimiro de Abreu'/>
                        <InformacaoFooter 
                        l1='EXPEDIENTE'
                        l2='Segunda - Sexta | 08:00 - 19:00'
                        l3='Sábado | 09:00 - 19:00'/>
                        <InformacaoFooter 
                        l1='TELEFONE'
                        l2='(22) 2778-4891'/>
                        <InformacaoFooter 
                        l1='E-MAIL'
                        l2='gilanapresentes@hotmail.com'/>
                    </div>
                    <div className='informacao-footer'>
                        <p className='estilo1'>INSTITUCIONAL</p>
                        <Link to="/">HOME</Link>
                        <Link to="/servicos">SERVIÇOS</Link>
                        <Link to="/nossa loja">NOSSA LOJA</Link>
                        <Link to="/fale conosco">FALE CONOSCO</Link>
                        <Link to="/trabalhe conosco">TRABALHE CONOSCO </Link>
                        <Link to="/encarte virtual">ENCARTE VIRTUAL</Link>
                    </div>
                    <div className='informacao-footer'>
                        <p className='estilo2'>FORMAS DE PAGAMENTO</p>
                        <div className='img-pag'>
                            <img src={formasPagamento}></img>
                        </div>
                    </div>
                </div>                
        </footer>
        
    )
}

export default Footer;