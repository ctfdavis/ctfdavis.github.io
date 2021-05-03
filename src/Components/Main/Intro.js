import React from 'react';
import Heading from './Heading';
import logo from '../../Images/site_logo.svg';
import sprite from '../../Images/sprite.svg';
import Button from '@material-ui/core/Button';

const Intro = () => {
    return (
        <section className="main__section">
            <Heading value={<><span className="special-hover">DCUFO</span> | <span className="special-hover">DAVIS CHAN</span></>} />
            <div className="intro">
                <img src={logo} alt="site logo" className="intro__logo" />
                <div className="intro__cat">
                    <p className="intro__caption">
                        a self-taught web developer who wishes to inspire others with his works and sharing
                    </p>
                    <Button className="get-in-touch-btn" variant="contained">
                        Get In Touch
                    </Button>
                </div>
            </div>
            <svg className="go-down-icon">
                <use href={sprite + "#icon-chevrons-down"} />
            </svg>
        </section>
    )
}

export default Intro;