import React, { useState } from 'react';

// 4.3 Implements as a Functioning Component
// const EvcentPractice_Func = () => {
//     const[username, setUsername] = useState('');
//     const[message, setMessage] = useState('');

//     const onChangeUsername = (e) => {
//         setUsername(e.target.value);
//     }

//     const onChangeMessage = (e) => {
//         setMessage(e.target.value);
//     }

//     const onClick = () => {
//         alert(username + " : " + message);
//         setUsername('');
//         setMessage('');
//     }

//     const onKeyPress = (e) => {
//         if (e.key === 'Enter') {
//             onClick();
//         }
//     }

//     return (
//         <div>
//             <h1>Event Practice!</h1>
//             <input type="text"
//             name="username"
//             placeholder="username"
//             value={username}
//             onChange={onChangeUsername}></input>
//             <input type="text"
//             name="message"
//             placeholder="input anything"
//             value={message}
//             onChange={onChangeMessage}
//             onKeyPress={onKeyPress}></input>
//             <button onClick={onClick}>Check</button>
//         </div>
//     )
// }


// forward obejct ver (... spread operator)
const EvcentPractice_Func = () => {
    const [form, setForm] = useState({
        username: '',
        message: ''
    });

    const {username, message} = form;
    const onChange = (e) => {
        const nextForm = {
            ...form,
            [e.target.name] : e.target.value
        };
        setForm(nextForm);
    }

    const onClick = () => {
        alert(username + " : " + message);
        setForm({
            username: '',
            message: ''
        });
    }

    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            onClick();
        }
    }

    return (
        <div>
            <h1>Event Practice..</h1>
            <input type="text"
            name="username"
            value={username}
            placeholder="username.."
            onChange={onChange}></input>
            <input type="text"
            name="message"
            value={message}
            placeholder="input anything.."
            onChange={onChange}
            onKeyPress={onKeyPress}></input>
            <button onClick={onClick}>Check</button>
        </div>
    )
}
export default EvcentPractice_Func;