import React, { useState } from 'react';
import Auth from '../../utils/auth.js';
import { useMutation } from '@apollo/client';
import { USER_LOGIN } from '../../utils/mutations.js';
import { Link } from 'react-router-dom';
import poolBG from '../assets/poolBG.jpg'
import '../styles/login.css'

const Login = () => {

    const [formState, setFormState] = useState({
        email: '',
        password: '',
    });

    const [userLogin] = useMutation(USER_LOGIN);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const loginUser = async (event) => {
        event.preventDefault();

        try {
            const { email, password } = formState;
            const { data } = await userLogin({
                variables: { email, password },
            });

            Auth.login(data.login.token);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className='d-flex flex-column align-items-center pt-5 myLogin' style={{ backgroundImage: `url(${poolBG})` }}>
            <form onSubmit={loginUser}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" name='email' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange}></input>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" name='password' class="form-control" id="exampleInputPassword1" onChange={handleChange}></input>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default Login;