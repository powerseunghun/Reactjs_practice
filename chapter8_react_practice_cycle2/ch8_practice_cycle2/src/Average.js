// 8.4 useMemo Hook .. without usememo

// useMemo
// possible to optimize the computation
// occur inside Functional Component..

// import React, { useState } from 'react';

// const getAverage = (numbers) => {
//     console.log('calc average...');
//     if (numbers.length === 0) return 0;
//     const sum = numbers.reduce((a, b) => a + b);
//     return sum / numbers.length;
// }

// const Average = () => {
//     const [list, setList] = useState([]);
//     const [number, setNumber] = useState('');

//     const onChange = (e) => {
//         setNumber(e.target.value);
//     }

//     const onInsert = (e) => {
//         const nextList = list.concat(parseInt(number));

//         setList(nextList);
//         setNumber('');
//     }

//     return (
//         <div>
//             <input value={number} onChange={onChange}/>
//             <button onClick={onInsert}>registration</button>
//             <ul>
//                 {list.map((value, index) => (
//                     <li key={index}>{value}</li>
//                 ))}
//             </ul>
//             <div>
//                 <b>Average : </b>{getAverage(list)}
//             </div>
//         </div>
//     )
// }

// above program is when input content's modify.
// unnecessary computation exist..

// useMemo use
import React, { useState, useMemo } from 'react';

const getAverage = (numbers) => {
    console.log('calc average..');
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
}

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');

    const onChange = (e) => {
        setNumber(e.target.value);
    }

    const onInsert = () => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
    }

    const avg = useMemo(() => getAverage(list), [list]);

    return (
        <div>
            <input value={number} onChange={onChange} />
            <button onClick={onInsert}>Registration</button>
            <ul>
                {list.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <b>average: </b>{avg}
            </div>
        </div>
    )
}

export default Average;