import React from 'react';
import Heading from './Heading';

const GetInTouch = () => {
    return (
        <section className="main__section">
            <Heading value={<><span className="special-hover">Get</span> <span className="special-hover">In</span> <span className="special-hover">Touch</span></>} />
            <div className="get-in-touch">
                <div className="get-in-touch__text">
                    <h1 className="get-in-touch__heading">
                       Seeking freelance opportunities! 
                     </h1>
                    I’m eager to listen to your bold ideas and turn them into fruition.  If you have an idea you think is perhaps worth building,
                     drop me a message here:
                </div>
                <iframe className="get-in-touch__form" scrolling="no" src="https://docs.google.com/forms/d/e/1FAIpQLSekZX2U1kecK4q0gUuZmoeJTflyU2CEeN7DJGBTW2lGkzM40w/viewform?embedded=true" height="700" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>
        </section>
    )
}

export default GetInTouch;
