import React from 'react';
import Popup from 'reactjs-popup';
import Heading from './Heading';
import medileaf_pic from '../../Images/works_medileaf.jpg';
import java_pic from '../../Images/works_java.jpg';
import task_pic from '../../Images/works_tasks.jpg';
import curiosity_pic from '../../Images/works_curiosity.jpg';
import password_pic from '../../Images/works_password.jpg';
import v3_pic from '../../Images/works_v3.jpg';

const Works = () => {
    const worksData = [
        [medileaf_pic, "medileaf", "medileaf is a project that I am working on. It's a meditation counter, journal and tracker for meditators"
            , "https://medileaf.club/", "https://github.com/ctfdavis/medileaf"]
        ,
        [java_pic, "Java-1Z0-819-Prep", "java-1z0-819-prep is a project that I am working on as well. It's a set of notes for preparing for the Java certification exam"
            , "https://davischan.pro/Java-1Z0-819-Prep/", "https://github.com/ctfdavis/Java-1Z0-819-Prep"]
        ,
        [task_pic, "Simple Task Manager", "Simple Task Manager (SIM) is a tool I created for logging and prioritizing tasks. Functions include categorization, search, auto-save, etc"
            , "https://cranky-nightingale-42a0f8.netlify.app/", "https://codesandbox.io/s/simple-management-system-v1-beta-08ov5?file=/src/App.js"]
        ,
        [curiosity_pic, "Curiosity Learning Center", "This landing page is a website that I developed for a fictional learning center corporation."
            , "https://quirky-lewin-15ecf5.netlify.app/", ""]
        ,
        [password_pic, "Random Password Generator", "Random Password Generator is a tool I made to quickly generate random and highly customizable passwords."
            , "https://codepen.io/ctfdavis/full/bGBpePw", "https://codepen.io/ctfdavis/pen/bGBpePw"]
        ,
        [v3_pic, "Personal Website (v3)", "My personal website (version 3) is a result of learning from my experiences in building the previous 2 versions."
            , "https://davischan.pro/websites/v3/index.html"]
    ];
    return (
        <section className="main__section">
            <Heading value={<><span className="special-hover">Selected</span> <span className="special-hover">Works</span></>} />
            <div className="works">
                {worksData.map(items => (
                    <Popup trigger={
                    <div className="works__card">
                        <img src={items[0]} alt={items[1]} className="works__card__image" />
                    </div>
                } position="center">
                    <div className="works__popup">
                        {items[2]}<br />
                        <a className="works__popup__link" href={items[3]} target="_blank">link</a>&nbsp;
                    <a className="works__popup__link" href={items[4]} target="_blank">code</a>
                    </div>
                </Popup>
                ))}
            </div>
        </section>
    )
}

export default Works;