import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import './styles/header.css'
import logo from './assets/logo.png'

const Header = () => {
    return (
        <div className='d-flex flex-column py-1 border-bottom '>
            <div className='col-12 d-flex justify-content-end'>
                <Link className='btn btn-dark m-1' to='/book'>Book Now</Link>
                {Auth.loggedIn() ? (
                    <div>
                        <Link className='btn btn-dark m-1' to='/appointments'>My Appointments</Link>
                        <button className='btn' onClick={Auth.logout}>Logout</button>
                    </div>
                ) : (
                    <Link className='btn btn-dark m-1' to='/login'>Login</Link>
                )}

            </div>
            <img className='myLogo align-self-center border col-4' src={logo}></img>
        </div>

    )
};

export default Header;