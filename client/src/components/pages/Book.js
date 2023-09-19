import React, { useState } from 'react';
import Auth from '../../utils/auth.js';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations.js';
import { Link } from 'react-router-dom';
import poolBG from '../assets/poolBG.jpg'
import '../styles/book.css'

const Book = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        password: '',
        address: '',
        phone: '',
    });

    const [addUser] = useMutation(ADD_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const createUser = async (event) => {
        event.preventDefault();
        console.log(formState);
        try {
            const { name, email, password, address, phone } = formState;
            const { data } = await addUser({
                variables: { name, email, password, address, phone },
            });

            Auth.login(data.login.token);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className='d-flex flex-column align-items-center pt-5 myLogin' style={{ backgroundImage: `url(${poolBG})` }}>
            <form onSubmit={createUser}>
                <div class="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" name='name' className="form-control" onChange={handleChange}></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" name='email' className="form-control" onChange={handleChange}></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" name='password' className="form-control" onChange={handleChange}></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input type="text" name='address' className="form-control" onChange={handleChange}></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Phone Number</label>
                    <input type="text" name='phone' className="form-control" onChange={handleChange}></input>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default Book;