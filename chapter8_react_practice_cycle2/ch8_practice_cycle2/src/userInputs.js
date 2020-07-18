// 8.7 Custom Hooks

// Many Component share similar function..
// possible to make custom hooks
import { useReducer } from 'react';

function reducer(state, action) {
    return {
        ...state,
        [action.name] : action.value
    };
}

export default function useInputs(initialForm) {
    const [state, dispatch] = useReducer(reducer, initialForm);
    const onChange = (e) => {
        dispatch(e.target);
    };

    return [state, onChange];
}