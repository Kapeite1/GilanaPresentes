import React from 'react';
import './styles.scss';
import {Link} from 'react-router-dom';
import logo from './img/logo.png';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';

function Copyright () {
    return (
        <div className='component-copyright'>
            <Link to="/"><img src={logo} alt='Home page'></img></Link>
            <div className='text-copyright'>
                <p>© Copyright 1993-2020 Gilana Presentes Ltda. |</p>
                <p>Todos os preços e condições comerciais estão sujeitos a alterações sem aviso prévio. |</p>
                <p>Endereço: Rua Laura Teixeira da Silva, 231 - Casimiro de Abreu - RJ - CEP: 28860-000.</p>
            </div>
            <div className='media-copyright'>
                <div>
                    <a target='_blank' href="https://pt-br.facebook.com/gilanapresentes/"><FacebookIcon fontSize= 'large' /></a>
                    <a href="https://www.instagram.com/gilanapresentes/?hl=pt-br"><InstagramIcon fontSize= 'large'/></a>
                    <a href="mailto:gilanapresentes@hotmail.com"><EmailIcon fontSize= 'large'/></a>
                </div>
            </div>
        </div>
    )
}

export default Copyright;