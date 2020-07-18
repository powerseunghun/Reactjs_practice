// 8.5 useCallback
// rendering performance optimization

import React, { useState, useMemo, useCallback } from 'react';

const getAverage = (numbers) => {
    console.log('calc average...');
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
}

const Average_Callback = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');

    // when component's first rendering.. function create
    const onChange = useCallback(e => {
        setNumber(e.target.value);
    }, []);

    // when number, list change.. function create
    const onInsert = useCallback(() => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
    }, [number, list]);

    const avg = useMemo(() => getAverage(list), [list]);

    return (
        <div>
            <input value={number} onChange={onChange}/>
            <button onClick={onInsert}>Registration</button>
            <ul>
                {list.map((index, value) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <b>Average: </b>{avg}
            </div>
        </div>
    )
}

// number, string, object ... (general value) reuse -> useMemo
// function ... reuse -> useCallback

// two soures below are same...
// useCallback(()=>{
//     console.log('hello world!');
// }, [])

// useMemo(()=>{
//     const fn = () => {
//         console.log('hello World!');
//     };
//     return fn;
// }, [])

export default Average_Callback;