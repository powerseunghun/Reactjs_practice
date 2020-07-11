// 3.4 State
import React, { Component } from 'react';

// class Counter extends Component {
//     constructor(props) {
//         super(props);
//         // state initialize
//         this.state = {
//             number: 0,
//             // 3.4.1.1 many value in state object
//             fixedNumber: 0
//         };
//     }
//     render() {
//         const { number, fixedNumber } = this.state;
//         return (
//             <div>
//                 <h1>{ number }</h1>
//                 <h2>not change value : { fixedNumber }</h2>
//                 <button onClick={() => {
//                     // user this.setState . set state new value
//                     this.setState({number : number+1});
//                 }}>
//                     +1
//                 </button>
//             </div>
//         )
//     }
// }

// not use constructor method ver
class Counter extends Component {
    state = {
        number: 0,
        fixedNumber: 0
    };

    render() {
        const {number, fixedNumber} = this.state;
        return (
            <div>
                <h1>{ number }</h1>
                <h2>not change value : { fixedNumber }</h2>
                <button onClick={() => {
                    // forward function factor instead of object
                    // to this.setState
                    this.setState(prevState => {
                        return {
                            number: prevState.number + 1
                        }
                    },
                    // 3.4.1.4
                    // this.setState end. specific operation
                    // call back function in second paramer
                    () => {
                        console.log('setState call..');
                        console.log(this.state);
                    });
                }}>
                    +1
                </button>
            </div>
         )
    }
}



export default Counter;