import React from 'react';
import './Workouts.css'

const Workouts = (props) => {
    const { img, name, descrip, age, time } = props.workout;
    return (
        <div className='col-4'>
            <div className='card'>
                    <img src={img} alt="" className='img'/>
                <div className='card-body'>
                    <h4 className=''> {name} </h4>
                    <p> {descrip.slice(0,55) + '..'} </p>
                    <h4 className='fs-5 text'><small>For Age: {age}</small></h4>
                    <h4 className='fs-5 text'><small>Time: {time} </small></h4>
                    <button className='btn btn-primary w-100'>Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Workouts;