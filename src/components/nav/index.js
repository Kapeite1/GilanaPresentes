import React from 'react';
import "./styles.scss";
import { Link } from 'react-router-dom'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

function Navigator() {
    return (
        <nav className='component-nav'>
            <div>
                <Link to="/">HOME</Link>
                <Link to="/servicos">SERVIÇOS</Link>
                <Link to="/nossa loja">NOSSA LOJA</Link>
                <Link to="/encarte virtual">ENCARTE VIRTUAL</Link>
                <div class="dropdown">
                    <button class="dropbtn">CONTATO<ArrowDropDownIcon /></button>
                    <div class="dropdown-content">
                        <Link to="/fale conosco">Fale Conosco</Link>
                        <Link to="/trabalhe conosco">Trabalhe Conosco</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigator;