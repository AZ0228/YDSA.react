import React from 'react';
import './Header.css';
import "../../assets/fonts.css";

const logo = process.env.PUBLIC_URL + '/LOGO.png';

function Header() {
    return (
        <header>
            <nav>
                <div className="left">
                    <img className="logo" src={logo} alt="none"></img>
                    <h1><b>YDSA</b> RENSSELAER</h1>
                </div>
                <button>JOIN</button>
            </nav>
        </header>
    );
}

export default Header;