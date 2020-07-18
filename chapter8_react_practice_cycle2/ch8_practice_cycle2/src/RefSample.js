// 8.6.1 use local variable

// local variable 
// --> can be change regardless of rendering
import React, { useRef } from 'react';

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
            refSample
        </div>
    )
}
export default RefSample;