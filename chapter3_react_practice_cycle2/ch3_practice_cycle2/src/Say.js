//3.4.2.2 useState
import React, { useState } from 'react';

const Say = () => {
    const [message, setMessage] = useState('');
    const onClickEnter = () => setMessage('hello!');
    const onClickLeave = () => setMessage('good bye!');

    //3.4.2.3 many useState in One component
    const [color, setColor] = useState('black');


    return (
        <div>
            <button onClick={onClickEnter}>enter</button>
            <button onClick={onClickLeave}>leave</button>
            <h1 style={{color}}>{message}</h1>
            <button style={{color:'red'}} onClick={()=>{setColor('red')}}>
                Red
            </button>
            <button style={{color:'green'}} onClick={() => {setColor('green')}}>
                Green
            </button>
            <button style={{color:'blue'}} onClick={() => {setColor('blue')}}>
                Blue
            </button>
        </div>
    )
}
export default Say;