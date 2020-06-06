import React, { Component } from 'react';

// class EventPractice extends Component {
//     state = {
//         message: ''
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Event Practice</h1>
//                 <input 
//                 type="text" 
//                 name="message" 
//                 placeholder="write anything" 
//                 value={this.state.message} 
//                 onChange={
//                     (e) => {
//                         this.setState({
//                             message: e.target.value
//                         })
//                     }
//                 }>
//                 </input>
//                 <button onClick={() => {
//                     alert(this.state.message);
//                     this.setState({
//                         message: ''
//                     });
//                 }}>check</button>
//             </div>
//         );
//     }
// }

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
//         });
//     }
    
//     handleClick() {
//         alert(this.state.message);
//         this.setState({
//             messgae:''
//         });
//     }
//     render() {
//         return (
//             <div>
//                 <h1>Event Practice2</h1>
//                 <input type="text" 
//                 name="message" 
//                 placeholder="write anything" 
//                 value={this.state.message}
//                 onChange={this.handleChange}></input>
//                 <button onClick={this.handleClick}>check</button>
//             </div>
//         );
//     }
// }

// class EventPractice extends Component {
//     state = {
//         message: ''
//     }

//     handleChange = (e) => {
//         this.setState({
//             message: e.target.value
//         })
//     }

//     handleClick = () => {
//         alert(this.state.message);
//         this.setState({
//             message: ''
//         })
//     }

//     render() {
//         return(
//             <div>
//                 <h1>Event Practice</h1>
//                 <input type="text" 
//                 name="message" 
//                 placeholder="anything write" 
//                 value={this.state.message} 
//                 onChange={this.handleChange}/>
//                 <button onClick={this.handleClick}>
//                     check
//                 </button>
//             </div>
//         );
//     }
// }

// class EventPractice extends Component {
//     state = {
//         username: '',
//         message: ''
//     }

//     handleChange = (e) => {
//         this.setState({
//             [e.target.name]: e.target.value
//         })
//     }

//     handleClick = (e) => {
//         alert(this.state.username + " : " + this.state.message);
//         this.setState({
//             username: '',
//             message: ''
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Event Practice</h1>
//                 <input type="text" 
//                 name="username" 
//                 placeholder="username" 
//                 value={this.state.username} 
//                 onChange={this.handleChange}/><br/>
                
//                 <input type="text" 
//                 name="message"
//                 placeholder="anything write"
//                 value={this.state.message}
//                 onChange={this.handleChange}/><br/>
                
//                 <button onClick={this.handleClick}>check</button>
//             </div>
//         )
//     }
// }

class EventPractice extends Component {
    state = {
        username:'',
        message:''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = (e) => {
        alert(this.state.username + " : " + this.state.message);
        this.setState({
            username : '',
            message: ''
        })
    }

    handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            this.handleClick();
        }
    }
    render() {
        return(
            <div>
                <h1>Event Practice</h1>
                <input type="text"
                name="username"
                placeholder="username"
                value={this.state.username}
                onChange={this.handleChange}/><br/>

                <input type="text"
                name="message"
                placeholder="write anything"
                value={this.state.message}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}/><br/>

                <button onClick={this.handleClick}>check</button>
            </div>
        );
    }
}
export default EventPractice;