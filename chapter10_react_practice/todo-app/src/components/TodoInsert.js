import React, { useState, useCallback } from 'react';
// ref : https://react-icons.netlify.com/#/icons/md
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
    const [value, setValue] = useState('');

    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(
        e => {
            onInsert(value);
            // value initialize
            setValue('');

            // submit -> brower repage
            // prevent repage
            e.preventDefault();
        },
        [onInsert, value],
    );

    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input placeholder="Please enter what you want to do."
                    value={value}
                    onChange={onChange}/>
            <button type="submit">
                <MdAdd/>
            </button>
        </form>
    );
}

export default TodoInsert;