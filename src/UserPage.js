import React from 'react';

import './UserPage.css';

const UserPage = () => {
    return (
        <div className='UserPage-container'>
            <h1 className='greeting'>Welcome, Jake!</h1>
            <div className='bucketlist-container'>
                <ul className='bucketlist'>
                    <h3>Your bucket list:</h3>
                    <li>Walk the dog</li>
                    <li>Wash the dishes</li>
                    <li>Mow the lawn</li>
                    <li>Pay rent</li>
                </ul>
            </div>
        </div>
    );
}

export default UserPage;