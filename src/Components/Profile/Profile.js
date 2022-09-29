import React from 'react';
import logo from '../images/profile.jpg'

const Profile = (props) => {
    
    const {time} = props;
    let totalTime = 0;

    for( const workout of time ){
        totalTime = totalTime + workout.time;
    }

    return (
        <div>
            <div className='d-flex align-items-center mb-2 rounded-2'>
                <div>
                    <img src={logo} width='70' height='70' className='rounded-3' alt="" />
                </div>
                <div>
                    <h5 className=''>Nabil Ahmed Nahid</h5>
                    <div>
                        <p>Dhaka, Bangladesh</p>
                    </div>
                </div>
            </div>

            <div>
                
            </div>
        </div>
        
    );
};

export default Profile;