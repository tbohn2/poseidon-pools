import React from 'react';
import { Link } from 'react-router-dom';
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
                        Our quality care is unrivaled, and the first visit is completely free!
                    </p>
                    <Link className='btn btn-lg mb-3 fs-3 fw-semibold bookBtn' to='/book'>Book Free Consult!</Link>
                </div>
            </div>
            <div id='aboutUs' className='col-12 mt-5 d-flex flex-column align-items-center'>
                <h1 className='col-12 text-center fs-1 fw-bold'>About Us</h1>
                <p className='col-10 fs-3 my-5 border border-dark'>Our mission is to be as transparent as your clean pool. We believe our clients deserve good organization and open communication. That is why we specially designed
                    the Poseidon Pools AZ app to easily schedule when you want us to come service your pool. We serve you personally and professionally, and you can always see exactly who is coming
                    and when. We are a family owned and operated business, and we treat our clients like family too. Join the Poseidon Pools AZ family today!
                </p>
                <Link className='btn btn-lg mb-3 fs-3 fw-semibold bookBtn' to='/book'>Book Free Consult!</Link>
            </div>
            <div id='ourTeam' className='col-12 d-flex flex-column' style={{ backgroundImage: `url(${poolBG})` }}>
                <h1 className='col-12 text-center mt-5 fs-1 fw-bold'>Meet Our Team</h1>
                <div className='col-12 d-flex justify-content-evenly'>
                    <div className='d-flex flex-column col-3 align-items-center'>
                        <div className='border border-dark teamPic'></div>
                        <h2 className='fs-2 fw-bold'>John Doe</h2>
                        <p>John is the CEO and founder of Poseidon Pools AZ. His 25 years of experience with pools has shown him that the client's needs must always come first.
                        </p>
                    </div>
                    <div className='d-flex flex-column col-3 align-items-center'>
                        <div className='border border-dark teamPic'></div>
                        <h2 className='fs-2 fw-bold'>John Doe</h2>
                        <p>John is the CEO and founder of Poseidon Pools AZ. His 25 years of experience with pools has shown him that the client's needs must always come first.
                        </p>
                    </div>
                    <div className='d-flex flex-column col-3 align-items-center'>
                        <div className='border border-dark teamPic'></div>
                        <h2 className='fs-2 fw-bold'>John Doe</h2>
                        <p>John is the CEO and founder of Poseidon Pools AZ. His 25 years of experience with pools has shown him that the client's needs must always come first.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;