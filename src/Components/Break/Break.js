import React from 'react';

const Break = () => {
    const storeItem = localStorage.getItem('breakTime');
    if(storeItem){
        localStorage.getItem('breakTime')
    }
    else{
        localStorage.setItem('breakTime', 0);
        localStorage.getItem('breakTime')
    }
    return (
        <div>
            <h6 className='rounded-3 p-3 mt-3 exer-time'>Break time: <small className='break-time'>{storeItem}seconds</small></h6>
        </div>
    );
};

export default Break;