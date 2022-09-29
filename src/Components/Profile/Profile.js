import React from 'react';
import './Profile.css'
import logo from '../images/profile.jpg'

const Profile = (props) => {
    
    const {time} = props;
    let totalTime = 0;

    for( const workout of time ){
        totalTime = totalTime + workout.time;
    }

    const button1 = 10;
    const button2 = 10;
    const button3 = 10;
    const button4 = 10;
    const button5 = 10;

    return (
        <div>
            <div className='d-flex align-items-center mb-2 rounded-2'>
                <div>
                    <img src={logo} width='70' height='70' className='rounded-3' alt="" />
                </div>
                <div  className='ps-2'> 
                    <h5>Nabil Ahmed Nahid</h5>
                    <div>
                        <p>Dhaka, Bangladesh</p>
                    </div>
                </div>
            </div>

            <div className='border p-3 mb-3 rounded-3 info'>
                <div className='d-flex justify-content-between'>
                    <div className='d-flex'>
                        <h3>75</h3>
                        <p className='pt-2'><small>kg</small></p>
                    </div>
                    <div>
                        <h3>5.5</h3>
                    </div>
                    <div className='d-flex'>
                        <h3>22</h3>
                        <p className='pt-2'><small>Yrs</small></p>
                    </div>
                </div>
                
                <div className='d-flex justify-content-between'>
                    <div>
                        <p>Weight</p>
                    </div>
                    <div>
                        <p>Height</p>
                    </div>
                    <div>
                        <p>Age</p>
                    </div>
                </div>
            </div>

            <h4 className=''> Add a Break </h4>

            <div className='d-flex justify-content-evenly rounded p-2 time-cart'>
                <button className='btn btn-light rounded-circle p-2'>{button1}s</button>
                <button className='btn btn-light rounded-circle p-2'>{button2}s</button>
                <button className='btn btn-light rounded-circle p-2'>{button3}s</button>
                <button className='btn btn-light rounded-circle p-2'>{button4}s</button>
                <button className='btn btn-light rounded-circle p-2'>{button5}s</button>
            </div>

            <h4 className='mt-5'>Exercise Details</h4>
            <h6 className='rounded-3 p-3 mt-3 exer-time'>Exercise time: <small className='ps-5'>{totalTime}seconds</small></h6>
            <h6 className='rounded-3 p-3 mt-3 exer-time'>Break time: <small className='break-time'>10seconds</small></h6>

            <div>
                <button className='mt-5 btn btn-primary w-100'>Activity Completed</button>
            </div>
        </div>
        
    );
};

export default Profile;