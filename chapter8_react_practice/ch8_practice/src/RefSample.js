// class Component ver. local variable

// import React, { Component } from 'react';

// class RefSample extends Component {
//     id = 1
//     setId = (n) => {
//         this.id = n;
//     }

//     printId = () => {
//         console.log(this.id);
//     }
//     render() {
//         return (
//             <div>
//                 RefSample
//             </div>
//         );
//     }
// }

// function component local variable with useRef

import React, {useRef} from 'react';

const RefSample = () => {
    const id = useRef(1);
    const setId = (n) => {
        id.current = n;
    }

    const printId = () => {
        console.log(id.current);
    }

    return (
        <div>
            RefSample <b>{id.current}{printId()}</b>
        </div>
    )
}
export default RefSample;