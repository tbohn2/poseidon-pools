import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

const Header = () => {
    return (
        <div>
            <Link to='/book'>
                <button className=''>Book Now</button>
            </Link>
            {Auth.loggedIn() ? (
                <div>
                    <Link to='/appointments'>
                        <button className='btn'>My Appointments</button>
                    </Link>
                    <button className='btn' onClick={Auth.logout}>Logout</button>
                </div>
            ) : (
                <Link to='/login'>
                    <button className='btn'>Login</button>
                </Link>
            )}
        </div>

    )
};

export default Header;