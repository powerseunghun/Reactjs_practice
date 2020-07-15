import React, { Component } from 'react';

// 6.1 map() function in javascript array
// const IterationSample = () => {
//     const numbers = [1, 2, 3, 4, 5];
//     const result = numbers.map(num => num * num);
//     console.log(result);
//     return (
//         <ul>
//             <li>Snowman</li>
//             <li>Ice</li>
//             <li>Snow</li>
//             <li>Wind</li>
//         </ul>
//     )
// }

// 6.2 convert data array to component array
// warning : list should have a unique 'key' prop..
const IterationSample = () => {
    const names = ['snowman', 'ice', 'snow', 'wind'];

    // const nameList = names.map(name => <li>{name}</li>)
    // 6.3.1 key setting
    // !! : don't exist unique value.. -> use index value as key
    // because when array change. can't rerendering efficiently
    const nameList = names.map((name, index) => <li key={index}>{name}</li>);
    return (
        <ul>{nameList}</ul>
    )
}

export default IterationSample;