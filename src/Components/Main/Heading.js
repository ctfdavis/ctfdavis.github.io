import React from 'react';

const Heading = (props) => {

    return (
        <h1 className="main__section__heading">
            {props.value}
        </h1>
    )
}

export default Heading;