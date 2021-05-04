import React from 'react';
import Heading from './Heading';
import { useTranslation } from "react-i18next";
import "../../Translations/i18n";

const GetInTouch = () => {
    const { t } = useTranslation();
    return (
        <section className="main__section">
            <a className="anchor" id="GetInTouch"></a>
            <Heading value={<><span className="special-hover">Get</span> <span className="special-hover">In</span> <span className="special-hover">Touch</span></>} />
            <div className="get-in-touch">
                <div className="get-in-touch__text">
                    <h1 className="get-in-touch__heading">
                        {t("contact_heading")}
                     </h1>
                     {t("contact_text")}
                </div>
                <iframe className="get-in-touch__form" src="https://docs.google.com/forms/d/e/1FAIpQLSekZX2U1kecK4q0gUuZmoeJTflyU2CEeN7DJGBTW2lGkzM40w/viewform?embedded=true" width="400" height="650" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
            </div>
        </section>
    )
}

export default GetInTouch;
