import React from 'react';
import Header from "../components/header";
import Navigator from  "../components/nav"
import Publicacao from  "../components/publicacao"
import Pagamento from  "../components/pagamento"
import Produtos from  "../components/produtos"
import Informacoes from '../components/informacoes'
import Footer from '../components/footer'
import Copyright from '../components/copyright'

function Home() {
    return (
        <div>
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