import React from 'react';
import Header from "../components/header";
import Navigator from  "../components/nav"
import Publicacao from  "../components/publicacao"
import Produtos from  "../components/produtos"
import Informacoes from '../components/informacoes'
import Footer from '../components/footer'
import Copyright from '../components/copyright'

function scrollToTop ()  {
    window.scrollTo(0, 0)
}

function Home() {
    return (
        <div>
            {scrollToTop()}
            <Header />
            <Navigator />
            <Publicacao />
            <Produtos />
            <Informacoes />
            <Footer />
            <Copyright />
        </div>
    )
}

export default Home;