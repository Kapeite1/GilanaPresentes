import React, {useState} from 'react';
import "./styles.scss";
import { Link } from 'react-router-dom'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import DehazeIcon from '@material-ui/icons/Dehaze';
import logo from './img/logo.png'

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (!isLoggedIn) {
      return null;
    }
    return( 
        <div className='component-nav2'>
            <Link to="/">HOME</Link>
            <Link to="/servicos">SERVIÇOS</Link>
            <Link to="/nossa loja">NOSSA LOJA</Link>
            <Link to="/encarte virtual">ENCARTE VIRTUAL</Link>
            <div className="dropdown">
                <button className="dropbtn">CONTATO<ArrowDropDownIcon /></button>
                <div className="dropdown-content">
                    <Link to="/fale conosco">Fale Conosco</Link>
                    <Link to="/trabalhe conosco">Trabalhe Conosco</Link>
                </div>
            </div>
        </div>
    );
  }

function Navigator() {
    const [state, setState] = useState({
        isOpen: false
    })

    function handleChange() {
        setState({
            isOpen : !state.isOpen
        });
    }

    return (
        <nav className='navi'>
            <div className='toggle'>
                <div className='teste'>
                    <img src={logo} className="logo" alt="Logo" />
                    <div > <DehazeIcon onClick={handleChange}/> </div>
                </div>
            </div>
            <Greeting isLoggedIn={state.isOpen}/>
            <div className='component-nav'>
                <Link to="/">HOME</Link>
                <Link to="/servicos">SERVIÇOS</Link>
                <Link to="/nossa loja">NOSSA LOJA</Link>
                <Link to="/encarte virtual">ENCARTE VIRTUAL</Link>
                <div className="dropdown">
                    <button className="dropbtn">CONTATO<ArrowDropDownIcon /></button>
                    <div className="dropdown-content">
                        <Link to="/fale conosco">Fale Conosco</Link>
                        <Link to="/trabalhe conosco">Trabalhe Conosco</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigator;