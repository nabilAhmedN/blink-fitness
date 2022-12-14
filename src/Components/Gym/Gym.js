import React, { useEffect, useState } from 'react';
import Profile from '../Profile/Profile';
import Workout from '../Workout/Workout';

const Gym = () => {

    const [ workouts , setWorkouts  ] = useState([]);
    const [ time , setTime ] = useState([]);

    useEffect(() => {
        fetch('gym.json')
        .then( res => res.json())
        .then( data => setWorkouts(data))
    },[])

    const handleAddToTime = (workout) => {
        const newTime = [...time, workout];
        setTime(newTime)
    }

    return (

        <div className="m-4">
            <div className="row g-3">
                <div className="col-lg-9 col-md-6 col-sm-12">
                    <div>
                        <h3>Select Today's WorkOut</h3>
                        <div className='row g-2'>
                            {
                                workouts.map(workout => <Workout key={workout.id} workout={workout} handleAddToTime = {handleAddToTime}></Workout>)
                            }
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div>
                        {/* <h3>Profile</h3> */}
                        <Profile time={time}></Profile>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gym;