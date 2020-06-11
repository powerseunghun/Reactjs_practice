import React from 'react';

const IterationSample2 = () => {
    const name = ['snowman', 'ice', 'snow', 'wind'];
    const nameList = name.map((name, index) => <li key={index}>{name}</li>);
    return <ul>{nameList}</ul>;
}

export default IterationSample2;