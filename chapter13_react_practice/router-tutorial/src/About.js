import React from 'react';
// 13.4.2 URL Query
import qs from 'qs';

// const About = () => {
//     // return (
//     //     <div>
//     //         <h1>Introduce</h1>
//     //         <p>This project is Basic practice to React Router..</p>
//     //     </div>
//     // );
// };

const About = ({ location }) => {
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true // this setting -> Skip '?' at the beginning of a string
    });

    const showDetail = query.detail === 'true';
    return (
        <div>
            <h1>Introduce</h1>
            <p>This Project is React Router practice</p>
            {showDetail && <p>detail value setting is true!</p>}
        </div>
    )
}

export default About;