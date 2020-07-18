// 8.1.1 multiple useState
import React, { useState, useEffect } from 'react';

// const Info = () => {
//     const [name, setName] = useState('');
//     const [nickname, setNickName] = useState('');

//     const onChangeName = (e) => {
//         setName(e.target.value);
//     }

//     const onChangeNickName = (e) => {
//         setNickName(e.target.value);
//     }

//     return (
//         <div>
//             <div>
//                 <input value={name} onChange={onChangeName}/>
//                 <input value={nickname} onChange={onChangeNickName}/>
//             </div>
//             <div>
//                 <div>
//                     <b>name : </b>{name}
//                 </div>
//                 <div>
//                     <b>nickname : </b>{nickname}
//                 </div>
//             </div>
//         </div>
//     )
// }

// 8.2 useEffect Hook (Info.js add useEffect)
// useEffect = when each time react Component rendering
// certain working .. Hook   
// look like class Component's componentDidMount + componentDidUpdate

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickName] = useState('');

    // useEffect(() => {
    //     console.log('rendering complete!');
    //     console.log({
    //         name,
    //         nickname
    //     });
    // });

    // 8.2.1 
    // when only first rendering execute.. 
    // second parameter forward [] (empty array)
    // useEffect(()=>{
    //     console.log('only execute Mount');
    // }, []);

    // 8.2.2 
    // if you want run when certain value update.
    // check value in second parameter's array
    // in array, value managed through useState
    // value received by props
    // useEffect(()=>{
    //     console.log(name);
    // }, [name]);

    // 8.2.3 Cleaning up
    // you want run when component's unmount, behind update
    // return cleanup function
    useEffect(()=>{
        console.log('effect');
        console.log(name);

        return() => {
            console.log('cleanup');
            console.log(name);
        }
    });

    const onChangeName = (e) => {
        setName(e.target.value);
    }

    const onChangeNickName = (e) => {
        setNickName(e.target.value);
    }

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName}/>
                <input value={nickname} onChange={onChangeNickName}/>
            </div>
            <div>
                <div>
                    <b>name : </b>{name}
                </div>
                <div>
                    <b>nickname : </b>{nickname}
                </div>
            </div>
        </div>
    )
}
export default Info;