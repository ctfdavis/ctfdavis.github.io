import React from 'react';
import Popup from 'reactjs-popup';
import Heading from './Heading';
import medileaf_pic from '../../Images/works_medileaf.jpg';
import java_pic from '../../Images/works_java.jpg';
import task_pic from '../../Images/works_tasks.jpg';
import curiosity_pic from '../../Images/works_curiosity.jpg';
import password_pic from '../../Images/works_password.jpg';
import v3_pic from '../../Images/works_v3.jpg';
import { useTranslation } from "react-i18next";
import "../../Translations/i18n";

const Works = () => {
    const {t} = useTranslation();
    const worksData = [
        [medileaf_pic, "medileaf", t("work_1")
            , "https://medileaf.club/", "https://github.com/ctfdavis/medileaf"]
        ,
        [java_pic, "Java-1Z0-819-Prep", t("work_2")
            , "https://davischan.pro/Java-1Z0-819-Prep/", "https://github.com/ctfdavis/Java-1Z0-819-Prep"]
        ,
        [task_pic, "Simple Task Manager", t("work_3")
            , "https://cranky-nightingale-42a0f8.netlify.app/", "https://codesandbox.io/s/simple-management-system-v1-beta-08ov5?file=/src/App.js"]
        ,
        [curiosity_pic, "Curiosity Learning Center", t("work_4")
            , "https://quirky-lewin-15ecf5.netlify.app/", ""]
        ,
        [password_pic, "Random Password Generator", t("work_5")
            , "https://codepen.io/ctfdavis/full/bGBpePw", "https://codepen.io/ctfdavis/pen/bGBpePw"]
        ,
        [v3_pic, "Personal Website (v3)", t("work_6")
            , "https://davischan.pro/prev/websites/v3/index.html", "https://github.com/ctfdavis/prev/tree/main/websites/v3"]
    ];
    return (
        <section className="main__section">
            <a className="anchor" id="Works"></a>
            <Heading value={<><span className="special-hover">Selected</span> <span className="special-hover">Works</span></>} />
            <div className="works">
                {worksData.map((items, index) => (
                    <Popup key={index} trigger={
                    <div className="works__card">
                        <img src={items[0]} alt={items[1]} className="works__card__image" />
                    </div>
                } position="center">
                    <div className="works__popup">
                        {items[2]}<br />
                        <a className="works__popup__link" href={items[3]} target="_blank">{t("link")}</a>&nbsp;
                    <a className="works__popup__link" href={items[4]} target="_blank">{t("code")}</a>
                    </div>
                </Popup>
                ))}
            </div>
        </section>
    )
}

export default Works;