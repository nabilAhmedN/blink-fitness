import React from 'react';

const Profile = (props) => {
    
    const {time} = props;
    let totalTime = 0;

    for( const workout of time ){
        totalTime = totalTime + workout.time;
    }

    return (
        <div>
            <h2>hi;{totalTime}</h2>
        </div>
    );
};

export default Profile;