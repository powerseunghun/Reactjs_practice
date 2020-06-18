import React, {useState, useMemo, useCallback, useRef} from 'react';

const getAverage = (numbers) => {
    console.log("Avg calc...");
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a+b);
    return sum / numbers.length;
};

const Average_Ref = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    const inputEI = useRef(null);

    // only first rendering. function create
    const onChange = useCallback(e => {
        setNumber(e.target.value);
    }, []);

    const onInsert = useCallback(() => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
        inputEI.current.focus();
    }, [number, list]); // when number or list change.. function create

    const avg = useMemo(() => getAverage(list), [list]);

    return (
        <div>
            <input value={number} onChange={onChange} ref={inputEI}/>
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
}
export default Average_Ref