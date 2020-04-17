import React from 'react';
import Header from "../components/header";
import Navigator from  "../components/nav"
import Footer from '../components/footer'
import Copyright from '../components/copyright'

function Produtos() {
    return (
        <div>
            <Header />
            <Navigator />
            <p>produtos</p>
            <Footer />
            <Copyright />
        </div>
    )
}

export default Produtos;