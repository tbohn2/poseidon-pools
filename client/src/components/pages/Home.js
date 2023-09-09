import React from 'react';
import poolBG from '../assets/poolBG.jpg'
import poolFloat from '../assets/poolFloat.jpg'
import '../styles/home.css'

const Home = () => {
    return (
        <div className='d-flex flex-column align-items-center'>
            <div className='firstCard col-12 d-flex' style={{ backgroundImage: `url(${poolFloat})` }}>
                <div className='col-1'></div>
                <div className='relaxCard d-flex flex-column my-5 align-items-center col-4'>
                    <h1 className='relaxHeading'>RELAX! WE GOT THIS!</h1>
                    <p className='fs-3 my-5 col-11'>
                        Swimming pool maintenance is a chore. Let us take care of it for you! We offer a variety of services to keep your pool clean and safe for your
                        family and friends. We offer weekly services, one time cleanings for special events, and pool repair services.
                        Our quality care is unrivaled, and the first visit if completely free!</p>
                </div>
            </div>

        </div>
    );
};

export default Home;