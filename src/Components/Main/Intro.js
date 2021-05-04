import React, { useRef } from 'react';
import Heading from './Heading';
import logo from '../../Images/site_logo.svg';
import sprite from '../../Images/sprite.svg';
import Button from '@material-ui/core/Button';
import { HashLink } from 'react-router-hash-link';
import { useTranslation } from "react-i18next";
import "../../Translations/i18n";

const Intro = () => {
    const { t } = useTranslation();

    const logoContainer = useRef();
    const containerEnter = (e) => {
        let xAxis = (window.innerWidth / 4 - e.pageX) / 2;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 2;
        logoContainer.current.style.transition = 'none';
        logoContainer.current.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    }
    const containerLeave = (e) => {
        logoContainer.current.style.transition = 'all .75s ease';
        logoContainer.current.style.transform = "rotateY(0deg) rotateX(0deg)";
    }
    return (
        <section id="Home" className="main__section">
            <Heading value={<><span className="special-hover">DCUFO</span> | <span className="special-hover">DAVIS CHAN</span></>} />
            <div className="intro">
                <div className="threed-container" onMouseMove={(e) => containerEnter(e)} onMouseLeave={(e) => containerLeave(e)}>
                    <img src={logo} alt="site logo" className="intro__logo" ref={logoContainer} />
                </div>
                <div className="intro__cat">
                    <p className="intro__caption">
                        {t("intro")}
                    </p>
                    <HashLink className="hashlink" smooth to="#GetInTouch">
                        <Button className="get-in-touch-btn" variant="contained">
                            {t("get_in_touch")}
                    </Button></HashLink>
                </div>
            </div>
            <svg className="go-down-icon">
                <use href={sprite + "#icon-chevrons-down"} />
            </svg>
        </section>
    )
}

export default Intro;