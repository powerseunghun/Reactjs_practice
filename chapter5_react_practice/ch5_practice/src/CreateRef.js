import React, { Component } from 'react';

class CreateRef extends Component {
    input = React.createRef();

    handleFocus = () => {
        this.input.current.focus();
    }

    render() {
        return(
            <div>
                <input ref={this.input}></input>
            </div>
        )
    }
}

export default CreateRef;