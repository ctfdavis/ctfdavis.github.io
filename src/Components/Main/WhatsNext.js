import React from 'react';
import Heading from './Heading';
import dcufo_studio from "../../Images/dcufo_studio.svg";

const WhatsNext = () => {
    return (
        <section className="main__section">
            <Heading value={<><span className="special-hover">What's</span> <span className="special-hover">Next</span></>} />
            <div className="whatsnext">
                <img className="whatsnext__logo" src={dcufo_studio} alt="dcufo studio logo" />
                <p className="whatsnext__text">
                    Taking bold moves, exploring new possibilities, and working tirelessly, <span className="whatsnext__name">dcufo studio</span> is coming soon.<br />
                    Stay tuned!
                </p>
            </div>
        </section>
    )
}

export default WhatsNext;