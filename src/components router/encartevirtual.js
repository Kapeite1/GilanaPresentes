import React from 'react';
import Header from "../components/header";
import Navigator from  "../components/nav"
import Footer from '../components/footer'
import Copyright from '../components/copyright'
import './encartevirtual.scss'

function Encarte() {
    return (
        <div>
            <Header />
            <Navigator />
            <div className='encarte'>
            <h3>EM BREVE</h3>
            </div>
            <Footer />
            <Copyright />
        </div>
    )
}

export default Encarte;