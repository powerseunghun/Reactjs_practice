// 8.3.1 Counter useReducer .ver
import React, { useReducer } from 'react';

function reducer(state, action) {
    // according to action.type different work
    switch(action.type) {
        case 'INCREMENT':
            return { value: state.value + 1};
        case 'DECREMENT':
            return { value: state.value - 1};
        default:
            // nothing applies return current state
            return state;
    }
}

const Counter_Reducer = () => {
    const [state, dispatch] = useReducer(reducer, { value: 0 });

    return (
        <div>
            <p>
                current counter value is <b>{state.value}</b>
            </p>
            <button onClick={() => dispatch({type: 'INCREMENT'})}>+1</button>
            <button onClick={() => dispatch({type: 'DECREMENT'})}>-1</button>
        </div>
    )
}

export default Counter_Reducer;