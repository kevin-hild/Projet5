// components/User.js
import React from 'react';

const User = ({ host }) => {
    const [firstName, lastName] = host.name.split(' ');

    return (
        <div className="host-info">
            <div className='name-photo'>
                <p>
                    {firstName}<br />
                    {lastName}
                </p>
                <img src={host.picture} alt={host.name} className="host-picture" />
            </div>
        </div>
    );
};

export default User;
