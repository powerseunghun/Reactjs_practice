import React, { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
    input = React.createRef();

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
        this.input.current.focus();

        console.log(this.state.validated);
        console.log(this.state.password);
    }

    handleFocus = () => {
        this.input.current.focus();
    }

    render() {
        return(
            <div>
                <input type="password"
                value={this.state.password}
                onChange={this.handleChange}
                className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
                ref={this.input}/>
                <button onClick={this.handleButtonClick}>validation</button>          

            </div>
        );
    }
}

export default ValidationSample;