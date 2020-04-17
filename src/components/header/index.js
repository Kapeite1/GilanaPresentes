import React from 'react';
import "./styles.scss";
import logo from './img/logo.png';

function Header() {
    return (
        <header className="component-header">
            <img src={logo} className="logo" alt="Logo" />
            <div className="search-container">
                <form>
                    <input type="text" placeholder="Search.." name="search"/>
                    <button type="submit">OK<i></i></button>
                </form>
            </div>
        </header>
    )
}

export default Header;