import React, {Component} from 'react';
import App from './App';

// class Counter extends Component {
//     constructor(props) {
//         super(props);
//         // state's initialize value
//         this.state = {
//             number: 0
//         };
//     }
//     render() {
//         const {number} = this.state;
//         return (
//             <div>
//                 <h1>{number}</h1>
//                 <button 
//                     onClick={() => {
//                         this.setState({number: number+1});
//                     }} 
//                 >+1
//                 </button>
//             </div>
//         )
//     }
// }
// class Counter extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             number: 0,
//             fixedNumber: 0
//         };
//     }

//     render() {
//         const {number, fixedNumber} = this.state;
//         return (
//             <div>
//                 <h1>{number}</h1>
//                 <h2>non-change value : {fixedNumber}</h2>
//                 <button onClick={() => {
//                     this.setState({number: number+1});
//                 }}>+1</button>;
//             </div>
//         )
//     }
// }

// class Counter extends Component {
//     state = {
//         number: 0,
//         fixedNumber: 0
//     };

//     render() {
//         const { number, fixedNumber } = this.state;
//         return (
//             <div>
//                 <h1>{number}</h1>
//                 <h2>non-change value : {fixedNumber}</h2>
//                 <button onClick={() => {
//                     this.setState({number: number+1});
//                 }}>+1</button>
//             </div>
//         )
//     }
// }

// class Counter extends Component {
//     state = {
//         number: 0,
//         fixedNumber: 0
//     };
//     render() {
//         const{number} = this.state;
//         return (
//             <div>
//                 <button onClick={() => {
//                     this.setState(prevState => {
//                         return {
//                             number: prevState.number + 1
//                         }
//                     })
//                     this.setState(prevState => ({
//                         number: prevState.number + 1
//                     }));
//                 }}>1</button>
//                 <h1>{number}</h1>
//             </div>
//         )
//     }
// }

class Counter extends Component {
    state = {
        number: 0
    }

    render() {
        const {number} = this.state;
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        number: number + 1
                    }, ()=> {
                        console.log('state call');
                        console.log(this.state);
                    })
                }}>+1</button>
                <h2>{number}</h2>
            </div>
        )
    }
}
export default Counter;