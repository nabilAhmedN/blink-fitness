import React, { useEffect, useState } from 'react';

const Gym = () => {

    const [ workouts , setWorkouts  ] = useState([]);

    useEffect(() => {
        fetch('gym.json')
        .then( res => res.json())
        .then( data => setWorkouts(data))
    },[])


    return (
        <div className='container'>
            <div className='row gx-3'>
                <div className='col-9'>
                    <h3>Select Today's Exercise</h3>
                    <div className='row g-2'>
                        
                    </div>
                </div>

                <div className='col-3'>
                    <h3>profile</h3>
                </div>
            </div>
        </div>

    );
};

export default Gym;