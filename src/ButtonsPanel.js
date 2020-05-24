import React from 'react';

const ButtonsPanel = (props) => {
    console.log(props);
    return (
        <div className="buttons-panel">
             <button onClick={props.addCounterMethod}>Add 1</button>
             <button onClick={()=>props.zeroOrReset(false)}>Set 0</button>
             <button onClick={()=>props.zeroOrReset(true)}>Reset</button>
             
        </div>
    );
}

export default ButtonsPanel;