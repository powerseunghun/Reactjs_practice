import React, { Component } from 'react';
import './ValidationSample.css';

// 5.1 Create Example Component
class ValidationSample extends Component {
    state = {
        password: '',
        clicked: false,
        validated: false
    }
    
    handleChange = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    handleButtonClick = (e) => {
        this.setState({
            clicked: true,
            validated: this.state.password === '0000'
        });
        // 5.2.3 ref on input
        this.input.focus();
    }

    render() {
        return (
            <div>
                <input type="password"
                // 5.2.3 ref on input(callback function)
                ref={(ref)=>this.input=ref}
                value={this.state.password}
                onChange={this.handleChange}
                className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}>
                </input>
                <button onClick={this.handleButtonClick}>Validate</button>
            </div>
        )
    }
}

export default ValidationSample;