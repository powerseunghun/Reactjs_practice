import React, {useState} from 'react';

// const EventPractice_Functional = () => {
//     const [username, setUsername] = useState('');
//     const [message, setMessage] = useState('');
//     const onChangeUsername = (e) => setUsername(e.target.value);
//     const onChangeMessage = (e) => setMessage(e.target.value);

//     const onClick = (e) => {
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
//             <h1>Event Practice Functional ver</h1>
//             <input type="text"
//             name="username"
//             placeholder="username"
//             value={username}
//             onChange={onChangeUsername}/><br/>

//             <input type="text"
//             name="message"
//             placeholder="message"
//             value={message}
//             onChange={onChangeMessage}
//             onKeyPress={onKeyPress}/><br/>

//             <button onClick={onClick}>check</button>
//         </div>
//     )
// }

const EventPractice_Functional = () => {
    const [form, setForm] = useState({
        username: '',
        message: ''
    })

    const {username, message} = form;
    const onChange = (e) => {
        const nextForm = {
            username: form.username,
            message: form.message,
            [e.target.name]: e.target.value
        };
        setForm(nextForm);
    }

    const onClick = () => {
        alert(username + " : " + message);
        setForm({
            username: '',
            message: ''
        })
    }

    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            onClick();
        }
    }

    return(
        <div>
            <h1>Event Practice Functional ver</h1>
            <input type="text"
            name="username"
            placeholder="username"
            value={username}
            onChange={onChange}/><br/>

            <input type="text"
            name="message"
            placeholder="message"
            value={message}
            onChange={onChange}
            onKeyPress={onKeyPress}/><br/>

            <button onClick={onClick}>check</button>
        </div>
    )
}

export default EventPractice_Functional;