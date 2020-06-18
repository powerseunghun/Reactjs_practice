import React, {useState, useMemo} from 'react';

const getAverage = (numbers) => {
    console.log("Average calc..");
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
}
const Average_Memo = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');

    const onChange = (e) => {
        setNumber(e.target.value);
    };

    const onInsert = () => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
    };
    
    const avg = useMemo(() => getAverage(list), [list]);
    
    return (
        <div>
            <input value={number} onChange={onChange}/>
            <button onClick={onInsert}>register</button>
            <ul>
                {list.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <b>Avg: </b> {avg}
            </div>
        </div>
    )
};

export default Average_Memo;