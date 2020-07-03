import React from 'react';
import Header from "../components/header";
import Navigator from  "../components/nav";
import Footer from '../components/footer';
import Copyright from '../components/copyright'
import './servicos.scss'

// ao carregar a pagina leva para o topo
function scrollToTop ()  {
    window.scrollTo(0, 0)
}

//importa toras as imagems da pasta img
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

//container de cada item
function Servicoitem(props) {
    return(
        <div className="item">
            <img src={props.imagem} alt='imagem servico'></img>
            <div>
                <p className='title'>{props.item1}</p>
                <p className='informacao'>{props.item2}</p>
            </div>

        </div>
    )
}

function Servicos() {
    const images = importAll(require.context('./img', false));
    return(
        <div className="component-servicos">   
            {scrollToTop()}
            <h1>Serviços de Papelaria</h1>
            <div className="servicos-explicando">
                <Servicoitem
                    imagem = {images['encadernacao.jpg']} 
                    item1='Serviço de encadernação'
                    item2='Encadernações em aspirais e capas plásticas com diversas cores, modelos e tamanhos.' />
                <Servicoitem
                    imagem = {images['copia.jpg']} 
                    item1='Cópias'
                    item2='Cópias de documentos e diversos.' />
                <Servicoitem
                    imagem = {images['digitalizacao.jpg']} 
                    item1='Digitalização'
                    item2='Digitalização de fotos, textos e documentos entre outros.' />
                <Servicoitem
                    imagem = {images['escritorio.jpg']} 
                    item1='Itens para escritório'
                    item2='Calculadoras, Clips, Porta-canetas, Papeis, Cola, faltou algo para seu escritório ? Nos procure!' />
                <Servicoitem
                    imagem = {images['impressao.jpg']} 
                    item1='Impressão'
                    item2='Impressão de fotos até a medida A4. Inclusive fotos 3x4. Impressões de documentos coloridos e preto e branco em qualquer tipo e formato de folha.' />
                <Servicoitem
                    imagem = {images['plastificacao.jpg']} 
                    item1='Plastificações'
                    item2='Plastificação de documentos.' />
                <Servicoitem
                    imagem = {images['segundavia.jpg']} 
                    item1='Segunda via'
                    item2='Fornecemos a opção de impressão de contas como água, luz, gás, energia ou qualquer outro tipo de boleto ou documento que necessite ser impresso via internet, CD ou pendrive.' />
                
                             
            </div>
        </div>
    )
}



function Historia() {
    return (
        <div>
            <Header />
            <Navigator />
            <Servicos />
            <Footer />
            <Copyright />
        </div>
    )
}

export default Historia;