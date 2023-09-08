import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import './styles/header.css'
import logo from './assets/logo.png'

const Header = () => {
    return (
        <div className='d-flex justify-content-between'>
            <div className='d-flex justify-content-center col-5'>
                <img className='myLogo' src={logo} alt='logo'></img>
            </div>
            <div className='d-flex flex-column justify-content-between align-items-center col-7'>
                <div className='d-flex justify-content-evenly col-8 mt-5 fst-italic'>
                    <p className='fs-3'>Call us today!</p>
                    <p className='fs-3'>555-555-5555</p>
                    <p className='fs-3'> ppaz@ppaz.com</p>
                </div>
                <div className='d-flex justify-content-evenly col-12'>
                    <Link className='btn btn-lg myNavBtn' to=''>Home</Link>
                    <Link className='btn btn-lg myNavBtn' to='/Home#aboutUs'>About Us</Link>
                    <Link className='btn btn-lg myNavBtn' to='/Home#ourTeam'>Meet Our Team</Link>
                    <Link className='btn btn-lg myNavBtn' to='/login'>View My Account</Link>
                    {Auth.loggedIn() ? (
                        <div>
                            <button className='btn' onClick={Auth.logout}>Logout</button>
                        </div>
                    ) : (
                        <Link className='btn btn-lg myNavBtn' to='/book'>Book Now</Link>
                    )}
                </div>

            </div>
        </div>

    )
};

export default Header;