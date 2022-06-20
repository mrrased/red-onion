import React from 'react';
import Fab from '@mui/material/Fab';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';

const Rocket = () => {
    return (
        <Box>
             <Paper elevation={3} sx={{paddingLeft: '27px', paddingBottom: '30px', paddingTop: '30px', marginTop: '10px'}}>
                <p style={{fontSize: '18px'}}><small>1. You Have an activated Rocket Mobile Banking Account</small></p>
                <p style={{fontSize: '18px'}}><small>2. Ensure That You are Able to receive a security code om your registered mobile number</small></p>
                <p style={{fontSize: '18px'}}><small>3. You have sufficient balance in your Account</small></p>

                <Fab variant="extended" sx={{backgroundColor: 'crimson', color: 'white', width: '40%', marginTop: '15px', ":hover ":{borderColor: 'crimson', color: 'crimson'}}} >
                    Pay Now
                </Fab>
            </Paper>
        </Box>
    );
};

export default Rocket;