import React, { useEffect, useState } from 'react';
import Workouts from '../Workouts/Workouts';

const Gym = () => {

    const [ workouts , setWorkouts  ] = useState([]);

    useEffect(() => {
        fetch('gym.json')
        .then( res => res.json())
        .then( data => setWorkouts(data))
    },[])


    return (
        // <div className='container'>
        //     <div className='row gx-3'>
        //         <div className='col-9 border'>
        //             <h3>Select Today's Exercise</h3>
        //             <div className='row g-2'>
        //                 {
        //                     workouts.map(workout => <Workouts key={workout.id} workout={workout}></Workouts>)
        //                 }
        //             </div>
        //         </div>

        //         <div className='col-3 border'>
        //             <h3>profile</h3>
        //         </div>
        //     </div>
        // </div>

        <div className="ms-4">
            <div className="row gx-3">
                <div className="col-9">
                    <div>
                        <h3>Select Today's Exercise</h3>
                        <div className='row g-2'>
                            {
                                workouts.map(workout => <Workouts key={workout.id} workout={workout}></Workouts>)
                            }
                        </div>
                    </div>
                </div>

                <div className="col-3">
                    <div>
                        <h3>Profile</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gym;