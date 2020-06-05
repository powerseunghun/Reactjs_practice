import React from 'react';

// const MyComponent = () => {
//     return <div>My new Component</div>
// };

// const MyComponent = props => {
//     return <div>Hello, my name is {props.name}..</div>
// };

// MyComponent.defaultProps = {
//     name: "Seunghun"
// }

// const MyComponent = props => {
//     return (
//         <div>
//             hello. my name is {props.name}.. <br />
//             children value is {props.children}..
//         </div>
//     );
// }
// MyComponent.defaultProps = {
//     name: "default name"
// }

// const MyComponent = props => {
//     const {name, children } = props;
//     return (
//         <div>
//             hello, my name is {name}.. <br/>
//             children value is {children}..
//         </div>
//     );
// }

const MyComponent = ({name, children}) => {
    return (
        <div>
            Hello, My Name is {name}... <br/>
            and Children value is {children}...
        </div>
    )
}
export default MyComponent;
MyComponent.defaultProps = {
    name : "default name"
}