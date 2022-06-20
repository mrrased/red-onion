import React from 'react';
import Fab from '@mui/material/Fab';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';

const BKash = () => {

    return (
        <Box>
            <Paper elevation={3} sx={{paddingLeft: '27px', paddingBottom: '30px', paddingTop: '30px', marginTop: '10px'}}>
                <p style={{fontSize: '18px'}}><small>BKash Account 013*****001</small></p>

                <Fab variant="extended" sx={{backgroundColor: 'crimson', color: 'white', width: '40%', marginTop: '15px', ":hover ":{borderColor: 'crimson', color: 'crimson'}}}>
                    Pay Now
                </Fab>
            </Paper>
        </Box>
    );
};

export default BKash;