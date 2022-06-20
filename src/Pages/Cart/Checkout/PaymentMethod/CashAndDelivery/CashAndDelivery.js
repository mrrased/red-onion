import React from 'react';
import Fab from '@mui/material/Fab';
import Paper from '@mui/material/Paper';

const CashAndDelivery = () => {
    return (
        <div>
            <Paper elevation={3} sx={{paddingLeft: '27px', paddingBottom: '30px', paddingTop: '30px', marginTop: '10px'}}>
                <p style={{fontSize: '18px'}}><small>You Can Pay in Cash to our courier when you received the goods at your doorstep</small></p>

                <Fab variant="extended" sx={{backgroundColor: 'crimson', color: 'white', width: '40%', marginTop: '15px', ":hover ":{borderColor: 'crimson', color: 'crimson'}}}>
                    Confirm Order
                </Fab>
            </Paper>
        </div>
    );
};

export default CashAndDelivery;