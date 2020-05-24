import React from 'react';

const DisplayPanel = (props) => {
    console.log(props);
    return <p>Licznik: {props.displayValue}</p>;
}

export default DisplayPanel;