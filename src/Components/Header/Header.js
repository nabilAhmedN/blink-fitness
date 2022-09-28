import React from 'react';
import logo from '../images/logo.png'

const Header = () => {
    return (
        <div className='navbar p-4'>

            <a className='d-flex text-decoration-none align-items-center' href="/">
                <img src={logo} alt="" width="60" height="60" className='me-2'/>
                <h3 className='mt-2 text-dark'>Blink Fitness</h3>
            </a>
            
        </div>
    );
};

export default Header;