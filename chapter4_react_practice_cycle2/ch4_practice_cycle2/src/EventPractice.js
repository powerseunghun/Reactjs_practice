import React, { Component } from 'react';

// 4.2.2 onChange Event Handling
// class EventPractice extends Component {

//     // 4.2.2.2 input value in state
//     state = {
//         message: ''
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Event Practice</h1>
//                 <input type="text" name="message"
//                 placeholder="input anything"
//                 value={this.state.value}
//                 onChange={
//                     (e) => {
//                         this.setState({
//                             message: e.target.value
//                         })
//                     }
//                 }
//                 ></input>
//                 <button onClick={
//                     () => {
//                         alert(this.state.message);
//                         this.setState({
//                             message: ''
//                         });
//                     }
//                 }>Check</button>
//             </div>
//         );
//     }
// }

// 4.2.3.1 
// class EventPractice extends Component {
//     state = {
//         message: ''
//     }

//     constructor(props) {
//         super(props);
//         this.handleChange = this.handleChange.bind(this);
//         this.handleClick = this.handleClick.bind(this);
//     }

//     handleChange(e) {
//         this.setState({
//             message: e.target.value
//         })
//     }

//     handleClick(e) {
//         alert(this.state.message);
//         this.setState({
//             message: ''
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Event Practice!</h1>
//                 <input type="text"
//                 name="message"
//                 placeholder="input anything!"
//                 value={this.state.message}
//                 onChange={this.handleChange}></input>
//                 <button onClick={this.handleClick}>Check</button>
//             </div>
//         )
//     }
// }

// 4.2.3.2 method write use Property Initializer Syntax
// class EventPractice extends Component {
//     state = {
//         message: ''
//     }

//     handleChange = (e) => {
//         this.setState({
//             message: e.target.value
//         });
//     }

//     handleClick = () =>{
//         alert(this.state.message);
//         this.setState({
//             message: ''
//         });
//     }

//     render() {
//         return(
//             <div>
//                 <h1>Event Practice!</h1>
//                 <input type="text"
//                 name="message"
//                 placeholder="input anything!"
//                 value={this.state.message}
//                 onChange={this.handleChange}></input>
//                 <button onClick={this.handleClick}>
//                     Check
//                 </button>
//             </div>
//         )
//     }
// }

// 4.2.4 Many Input handling
class EventPractice extends Component {
    state = {
        username: '',
        message: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleClick = () => {
        alert(this.state.username + ': ' + this.state.message);
        this.setState({
            username: '',
            message:''
        });
    }

    // 4.2.5 onKeyPress Event Handling
    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.handleClick();
        }
    }

    render() {
        return (
            <div>
                <h1>Event Practice</h1>
                <input type="text"
                name="username"
                placeholder="username.."
                value={this.state.username}
                onChange={this.handleChange}></input>
                <input type="text"
                name="message"
                placeholder="input anything.."
                value={this.state.message}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}></input>
                <button onClick={this.handleClick}>Check</button>
            </div>
        )
    }
}
export default EventPractice;