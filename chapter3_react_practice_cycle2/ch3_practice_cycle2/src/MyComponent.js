import React, {Component} from 'react';
//3.3.6
import PropTypes from 'prop-types';

// 3.2.2 Arrow Function
// const MyComponent = () => {
//     return <div>My New Component</div>
// }

// 3.3.1 props rendering in JSX
// const MyComponent = props => {
//     return (
//         <div>
//             Hi, My name is {props.name}.. <br/>
//             {/* 3.3.4 children->show contents between tag */}
//             Children value is {props.children}..
//         </div>
//     )
// }

// 3.3.5 Extract props inner value 
// through unstructed allocation grammar
// const MyComponent = props => {
//     const { name, children } = props;
//     return (
//         <div>
//             Hello My Name is {name}.. <br/>
//             Children value is {children}..
//         </div>
//     )
// }

// use Function parameter.
// const MyComponent = ({ name, favoriteNumber, children }) => {
//     return (
//         <div>
//             Hello My Name is {name}! <br/>
//             Children value is {children}! <br/>
//             My favorite Number is {favoriteNumber}!
//         </div>
//     )
// }

// 3.3.7 Class Component, use props
// class MyComponent extends Component {
//     render() {
//         const {name, favoriteNumber, children} = this.props;
//         return (
//             <div>
//                 Hello My Name.. {name} <br/>
//                 children is {children} <br/>
//                 and My Favorite Number {favoriteNumber}
//             </div>
//         )
//     }
// }

// defaultProps, propTypes setting in class inside
class MyComponent extends Component {
    static defaultProps = {
        name: 'default name!'
    };

    static propTypes = {
        name: PropTypes.string,
        favoriteNumber: PropTypes.number.isRequired
    };

    render() {
        const {name, favoriteNumber, children } = this.props;
        return (
            <div>
                 Hello My Name.. {name} <br/>
                 children is {children} <br/>
                 and My Favorite Number {favoriteNumber}
             </div>
        )
    }
} 

// 3.3.3 default Props setting
MyComponent.defaultProps = {
    name: 'default name'
};

// 3.3.6 verify through propTypes
MyComponent.propTypes = {
    name: PropTypes.string,

    // 3.6.3.1 isRequired
    favoriteNumber: PropTypes.number.isRequired
};

// module export
export default MyComponent;