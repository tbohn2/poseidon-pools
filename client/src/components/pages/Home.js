import React from 'react';
import poolBG from '../assets/poolBG.jpg'
import poolFloat from '../assets/poolFloat.jpg'
import '../styles/home.css'

const Home = () => {
    return (
        <div className='d-flex flex-column align-items-center'>
            <div className='firstCard col-12 d-flex' style={{ backgroundImage: `url(${poolFloat})` }}>
                <p className='fs-3 m-5 col-5'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam odit quia nesciunt exercitationem, doloribus maxime architecto. Quidem unde odio nam beatae quod reprehenderit natus fuga similique officiis, tempore incidunt placeat.

                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam odit quia nesciunt exercitationem, doloribus maxime architecto. Quidem unde odio nam beatae quod reprehenderit natus fuga similique officiis, tempore incidunt placeat.

                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam odit quia nesciunt exercitationem, doloribus maxime architecto. Quidem unde odio nam beatae quod reprehenderit natus fuga similique officiis, tempore incidunt placeat.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam odit quia nesciunt exercitationem, doloribus maxime architecto. Quidem unde odio nam beatae quod reprehenderit natus fuga similique officiis, tempore incidunt placeat.
                </p>
            </div>

        </div>
    );
};

export default Home;