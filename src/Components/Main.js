import React from 'react'
import Intro from './Main/Intro';
import Works from './Main/Works';
import TechStack from './Main/TechStack';
import WhatsNext from './Main/WhatsNext';
import GetInTouch from './Main/GetInTouch';

const Main = () => {
    return (
        <main className="main">
            <Intro />
            <Works />
            <TechStack />
            <WhatsNext />
            <GetInTouch />
        </main>
    )
}

export default Main;
