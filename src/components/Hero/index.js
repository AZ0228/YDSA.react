import React from 'react';
import './hero.css';
import YDSA_Hero1 from '../../assets/YDSA_Hero1.png';

function Hero() {
    return (
        <section id="hero">
            <div className="container">
                <img src={YDSA_Hero1} alt="hero"></img>
            </div>
        </section>
    );
}

export default Hero;