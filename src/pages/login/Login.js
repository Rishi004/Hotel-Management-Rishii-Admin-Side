import React from 'react';
import './Login.css';
import { Grid } from '@material-ui/core';
import { LoginPicture } from '../../assets/images';
import { Loginform } from '../../pages';

function Login() {
    return (
        <Grid container >
            <Grid item xs={7} >
                <img src={LoginPicture} alt="hotelLogin" className="img" />
            </Grid>
            <Grid item xs={5} className="grid2">
                <div className="paper">
                    <Loginform />
                </div>
            </Grid>
        </Grid>

    )
}

export default Login;
