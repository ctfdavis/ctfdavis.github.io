import React from 'react';
import Heading from './Heading';

const TechStack = () => {
    return (
        <section className="main__section">
            <Heading value={<><span className="special-hover">GO-TO</span> <span className="special-hover">TECH</span> <span className="special-hover">STACK</span></>} />
            <div className="techstack">
                <h1 className="techstack__category">
                    Front-end
                </h1>
                <h2 className="techstack__items">
                    HTML, CSS, Sass, JavaScript &amp; React
                </h2>
                <h1 className="techstack__category">
                    Back-end
                </h1>
                <h2 className="techstack__items">
                    Node.js &amp; MySQL
                </h2>
            </div>
        </section>
    )
}

export default TechStack;