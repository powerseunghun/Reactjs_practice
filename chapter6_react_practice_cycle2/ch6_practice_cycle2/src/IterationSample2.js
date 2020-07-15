// 6.4 app
// 6.4.1 initialize state
import React, { useState } from 'react';

const IterationSample2 = () => {
    const [names, setNames] = useState([
        {id: 1, text: 'snowman'},
        {id: 2, text: 'ice'},
        {id: 3, text: 'snow'},
        {id: 4, text: 'wind'}
    ]);

    const [inputText, setInputText] = useState('');
    // when new input occur.. use id
    const [nextId, setNextId] = useState(5);

    // 6.4.2 data add function implementation
    const onChange = (e) => setInputText(e.target.value);
    const onClick = () => {
        const nextNames = names.concat({
           id: nextId,
           text: inputText 
        });
        setNextId(nextId + 1);
        setNames(nextNames);
        setInputText('');
    }

    // 6.4.3 data remove function implementation
    const onRemove = (id) => {
        const nextNames = names.filter(name => name.id != id);
        setNames(nextNames);
    };

    const nameList = names.map
    // onDoubleClick = data remove function
    (name => <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
                {name.text}
             </li>)

    return (
        <>
            <input value={inputText} onChange={onChange}/>
            <button onClick={onClick}>add</button>
            <ul>{nameList}</ul>
        </>
    )
}

export default IterationSample2;