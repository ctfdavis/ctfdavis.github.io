import React from 'react';
import Heading from './Heading';
import dcufo_studio from "../../Images/dcufo_studio.svg";
import { useTranslation } from "react-i18next";
import "../../Translations/i18n";

const WhatsNext = () => {
    const { t } = useTranslation();

    return (
        <section className="main__section">
            <a className="anchor" id="WhatsNext"></a>
            <Heading value={<><span className="special-hover">What's</span> <span className="special-hover">Next</span></>} />
            <div className="whatsnext">
                <img className="whatsnext__logo" src={dcufo_studio} alt="dcufo studio logo" />
                <p className="whatsnext__text">
                    {t("dcufo_studio_1")} <span className="whatsnext__name">dcufo studio</span>{t("dcufo_studio_2")}<br />
                    {t("dcufo_studio_3")}

                </p>
            </div>
        </section>
    )
}

export default WhatsNext;