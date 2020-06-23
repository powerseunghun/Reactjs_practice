import React from 'react';
import useInputs from './useInputs';

const Info_Custom_Hook = () => {
    const [state, onChange] = useInputs({
        name: '',
        nickname: ''
    });

    const { name, nickname } = state;

    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange} />
                <input name="nickname" value={nickname} onChange={onChange}/>
            </div>
            <div>
                <div>
                    <b>name: </b> {name}
                </div>
                <div>
                    <b>nickname: </b> {nickname}
                </div>
            </div>
        </div>
    )
}
export default Info_Custom_Hook;