import React, { useState } from 'react';

const Say = () => {
    const [message, setMessage] = useState('');
    const onClickEnter = () => setMessage('Hello!');
    const onClickLeave = () => setMessage("Good bye!");

    const [color, setColor] = useState('black');

    return (
        <div>
            <button onClick={onClickEnter}>enter</button>
            <button onClick={onClickLeave}>leave</button>
        </div>
    )
}
export default Say;