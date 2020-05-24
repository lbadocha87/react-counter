import React, { Component } from 'react';

import DisplayPanel from './DisplayPanel';
import ButtonsPanel from './ButtonsPanel';




class Counter extends Component {


    constructor(props) {
        super(props);
        this.state = {
            counterValue: this.props.initValue
        }
    }

    addCounter = () => {
        this.setState(prevState => {
            return ({ counterValue: prevState.counterValue + 1 });
        });
    }
    setZeroReset = (reset) => {
        console.log(reset);
        if (reset) {
            this.setState({ counterValue: this.props.initValue })
        }
        else {
            this.setState({ counterValue: 0 });
        }
    }
    render() {
        return (
            <div className="counter">

                <DisplayPanel displayValue={this.state.counterValue} />
                <ButtonsPanel addCounterMethod={this.addCounter} setZeroReset={this.setZeroReset} />
            </div>
        );
    }
}

export default Counter;