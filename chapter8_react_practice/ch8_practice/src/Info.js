import React, { useState, useEffect } from 'react';

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    const onChangeName = (e) => {
        setName(e.target.value);
    };

    const onChangeNickname = (e) => {
        setNickname(e.target.value);
    };

    // execute every rendering
    // useEffect(() => {
    //     console.log("Rendering Complete");
    //     console.log({
    //         name,
    //         nickname
    //     });
    // });

    // execute mount only
    // [] in useEffect's second parameter 
    // useEffect(() => {
    //     console.log("executing when mount");

    // }, []);
    
    // check when the value changes
    // want check value in [](second parameter)
    // useEffect(() => {
    //     console.log(name);
    // }, [name]);

    useEffect(() => {
        console.log('effect');
        console.log(name);
        return () => {
            console.log('cleanup');
            console.log(name);
        }
    }, []);
    return(
        <div>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickname} onChange={onChangeNickname}/>
            </div>
            <div>
                <div>
                    <b>name : </b> {name}
                </div>
                <div>
                    <b>nickname : </b> {nickname}
                </div>
            </div>
        </div>
    )
}
export default Info;