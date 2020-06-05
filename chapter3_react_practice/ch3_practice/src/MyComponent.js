import React, {Component} from 'react';
import PropTypes from 'prop-types';

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

// const MyComponent = ({name, children}) => {
//     return (
//         <div>
//             Hello, My Name is {name}... <br/>
//             and Children value is {children}..
//         </div>
//     )
// }
// export default MyComponent;
// MyComponent.defaultProps = {
//     name : "default name"
// }

// const MyComponent = ({name, children}) => {
//     return <div>{name}</div>
// }

// MyComponent.defaultProps = {
//     name: "default name"
// };

// MyComponent.propTypes = {
//     name: PropTypes.string
// }

// const MyComponent = ({name, favoriteNumber, children}) => {
//     return (
//         <div>
//             hello. my name is {name}...<br/>
//             my children value is {children}..<br/>
//             my favorite number is {favoriteNumber}...
//         </div>
//     );
// }

// MyComponent.defaultProps = {
//     name: "default name"
// };

// MyComponent.propTypes = {
//     name: PropTypes.string,
//     favoriteNumber: PropTypes.number.isRequired
// };

class MyComponent extends Component {
    // static defaultProps = {
    //     name: "default name"
    // };
    // static propTypes = {
    //     name: PropTypes.string,
    //     favoriteNumber: PropTypes.number.isRequired
    // };

    render() {
        const {name, favoriteNumber, children} = this.props;
        return (
            <div>
                Hello. My name is {name}.. <br/>
                my children value is {children}.. <br/>
                my favorite number is {favoriteNumber}
            </div>
        );
    }
}

MyComponent.defaultProps = {
    name: "default name"
}

MyComponent.propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
};

export default MyComponent;