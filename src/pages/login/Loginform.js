import React, { useState } from 'react';
import './LoginForm.css';
import { TextField, Button } from '@material-ui/core';
import { FaUserCircle } from 'react-icons/fa';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { SYSTEM_CONFIG } from '../../utils/constants';

function Loginform() {

    // const history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const login = () => {
        const loginData = {
            username: username,
            password: password
        }
        Axios.post(`http://localhost:${SYSTEM_CONFIG.PORT}/api/one`,
            loginData
        ).then((response) => {
            console.log(response.data);
        });
    };

    return (
        <center>
            <form >
                <FaUserCircle
                    color="#0000b3"
                    size="5em" />
                <h1>Login Here</h1>
                <TextField
                    autoComplete="off"
                    className="input"
                    id="standard-basic"
                    label="Username"
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}
                />
                <br />
                <TextField
                    autoComplete="off"
                    className="input"
                    id="standard-basic"
                    label="Password"
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
                <br /><br />
                <Link to="/daily">
                    <Button
                        className='btn'
                        color="primary"
                        variant="contained"
                        size="large">
                        Login
                    </Button>
                </Link>
                <br /><br />
                <center>
                    <p>
                        Copyright © B-4.1-Team-11
                    </p>
                </center>
            </form>
        </center>
    )
}

export default Loginform
