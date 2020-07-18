// 8.1 useState Hook
import React, { useState } from 'react';

const Counter = () => {
    const [value, setValue] = useState(0);

    return (
        <div>
            <p>
                Current Counter Value is <b>{value}</b>입니다.
            </p>
            <button onClick={()=>setValue(value + 1)}>+1</button>
            <button onClick={()=>setValue(value - 1)}>-1</button>
        </div>
    )
}

export default Counter;