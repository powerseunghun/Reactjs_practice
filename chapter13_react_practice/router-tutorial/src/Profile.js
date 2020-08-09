import React from 'react';

const data = {
    seunghun: {
        name: 'AnSeungHun',
        description: 'Developer who React loved'
    },

    gayoung: {
        name: 'BaeGayoung',
        description: 'Somang mom'
    },

    somang: {
        name: 'Somang',
        description: 'chinchilla'
    }
};

const Profile = ({ match }) => {
    const { username } = match.params;
    const profile = data[username];

    if(!profile) {
        return <div>Not Exist User</div>
    }
    return (
        <div>
            <h3>
                {username} ({profile.name})
            </h3>
            <p>{profile.description}</p>
        </div>
    );
};

export default Profile;