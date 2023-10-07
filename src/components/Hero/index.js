import React from 'react';
import './hero.css';

const hero_desktop = process.env.PUBLIC_URL + '/YDSA_Hero1.png';

function Hero() {
    return (
        <section id="hero">
            <div className="container">
                <img src={hero_desktop}></img>
            </div>
        </section>
    );
}

export default Hero;