import React from 'react';
import './Workout.css'

const Workout = (props) => {
    const { img, name, descrip, age, time } = props.workout;

    return (
        <div className='col-lg-4 col-md-12 col-sm-12'>
            <div className='card'>
                    <img src={img} alt="" className='img'/>
                    <div className='card-body'>
                    <h4 className=''> {name} </h4>
                    <p> {descrip.slice(0,55) + '..'} </p>
                    <h4 className='fs-5 text'><small>For Age: {age}</small></h4>
                    <h4 className='fs-5 text'><small>Time: {time}s </small></h4>
                    <button className='btn btn-primary w-100' onClick={() => props.handleAddToTime(props.workout)}>Add to cart</button>
                </div>
            </div>
        </div>

    );
};

export default Workout;