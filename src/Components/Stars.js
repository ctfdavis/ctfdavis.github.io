import React from 'react'

const Stars = () => {
    const StarsContainer = () => {
        if (window.matchMedia("(min-width: 450px)").matches) {
            return (
                <div className="stars-container">
                    <div id='stars'></div>
                    <div id='stars2'></div>
                    <div id='stars3'></div>
                    <div id='stars4'></div>
                    <div id='stars5'></div>
                </div>
            )
        } else {
            return <></>
        }
    }
    return (
        <StarsContainer />
    )
}

export default Stars;