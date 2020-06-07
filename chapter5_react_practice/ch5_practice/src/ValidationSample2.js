import React, { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
    //input = "";
    state = {
        password: '',
        clicked: false,
        validated: false
    }

    handleChange = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    handleButtonClick = () => {
        this.setState({
            clicked: true,
            validated: this.state.password === '0000'

        });
        this.input.focus();
    }

    handleFocus = () => {
        this.input.focus();
    }

    render() {
        return(
            <div>
                <input type="password"
                value={this.state.password}
                onChange={this.handleChange}
                className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
                ref={(ref) => {
                    this.input=ref
                }}></input>
                <button onClick={this.handleButtonClick}>validation</button>          
            </div>
        );
    }
}

export default ValidationSample;