import React from 'react';
import Heading from './Heading';
import { useTranslation } from "react-i18next";
import "../../Translations/i18n";

const TechStack = () => {
    const {t} = useTranslation();
    return (
        <section className="main__section">
            <a className="anchor" id="TechStack"></a>
            <Heading value={<><span className="special-hover">GO-TO</span> <span className="special-hover">TECH</span> <span className="special-hover">STACK</span></>} />
            <div className="techstack">
                <h1 className="techstack__category">
                   {t("front_end")} 
                </h1>
                <h2 className="techstack__items">
                    HTML, CSS, Sass, JavaScript &amp; React
                </h2>
                <h1 className="techstack__category">
                   {t("back_end")} 
                </h1>
                <h2 className="techstack__items">
                    Node.js &amp; MySQL
                </h2>
            </div>
        </section>
    )
}

export default TechStack;