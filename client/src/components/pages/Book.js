import React, { useState } from 'react';
import Auth from '../../utils/auth.js';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations.js';
import { Link } from 'react-router-dom';
import poolBG from '../assets/poolBG.jpg'
import '../styles/book.css'

const Book = () => {

    const [formState, setFormState] = useState({
        username: '',
        password: '',
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

        try {
            const { username, password } = formState;
            const { data } = await addUser({
                variables: { username, password },
            });

            Auth.login(data.login.token);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className='d-flex flex-column align-items-center pt-5 myLogin' style={{ backgroundImage: `url(${poolBG})` }}>
            <form onSubmit={createUser}>

            </form>
        </div>
    );
};

export default Book;