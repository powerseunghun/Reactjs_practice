import React from 'react';
import useInputs from './userInputs';

const Info_Use_Custom_Hooks = () => {
    const [state, onChange] = useInputs({
        name: '',
        nickname: ''
    });
    const [name, nickname] = state;

    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange}/>
                <input name="nickname" value={nickname} onChange={onChange}/>
            </div>
            <div>
                <div>
                    <b>name: </b>{name}
                </div>
                <div>
                    <b>nickname: </b>{nickname}
                </div>
            </div>
        </div>
    )
}
export default Info_Use_Custom_Hooks;

// 8.8 Another Hooks

// http://nikgraf.github.io/react-hooks/
// https://github.com/rehooks/awesome-react-hooks