import React from 'react';
import Header from "../components/header";
import Navigator from  "../components/nav"
import Footer from '../components/footer'
import Copyright from '../components/copyright'
import mapa from './img/mapa.PNG'
import mapa2 from './img/mapa2.png'
import './nossaloja.scss'

function scrollToTop ()  {
    window.scrollTo(0, 0)
  }


function NossaLoja() {
    return (
        <div>
            {scrollToTop()}
            <Header />
            <Navigator />
            <a target="_blank" rel="noopener" href='https://www.google.com.br/maps/dir//GILANA+PRESENTES+BAZAR+LTDA+ME+-+Rua+Laura+Teixeira+da+Silva+-+Centro,+Casimiro+de+Abreu+-+RJ/@-22.4798065,-42.2063078,16.5z/data=!4m9!4m8!1m0!1m5!1m1!1s0x97bd07d5eec587:0x7b2d5bb20a5dc4ee!2m2!1d-42.2032444!2d-22.4784361!3e2'>
                <img src={mapa} alt='Mapa' className='mapa1'></img>
                <img src={mapa2} alt='Mapa' className='mapa2'></img>
            </a>
            <Footer />
            <Copyright />
        </div>
    )
}

export default NossaLoja;