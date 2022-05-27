import React from 'react';
import useAuth from '../../../../Hooks/useAuth';
import Navigation from '../../../Shared/Navigation/Navigation';
import Checkout from '../Checkout/Checkout';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';


// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));

const ConfirmOrder = () => {
    const {cart} = useAuth();

    // useEffect(()=>{
    //     if(storeCart?.length){
    //         console.log(storeCart);
    //     }
    // },[storeCart])

    

            let oldPrice = 0;
            let shippingCost = 0;
            let cartQuantity = 0;
        for (const listOfFood of cart){
            
            cartQuantity = cartQuantity + listOfFood.quantity;
            oldPrice = oldPrice + listOfFood.price * listOfFood.quantity;
            shippingCost = shippingCost + listOfFood.quantity * listOfFood.shipping;

        }
        // console.log(total);
        let subTotal = oldPrice + cartQuantity;
        let total = oldPrice + cartQuantity + shippingCost;
    
    return (
        <div>
            <Navigation></Navigation>
            <Container fixed>
                <Box sx={{ flexGrow: 1 , marginBottom: '30px'}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={5}>
                        <div style={{marginBottom: '20px', color: 'crimson'}}><h4 >Order Summary:</h4></div>
                        <div>
                        {
                            cart?.map(foodList => <Checkout 
                                key={foodList._id}
                                foodList={foodList}
                                ></Checkout>)
                        }
                        </div>
                        <Grid container spacing={2} sx={{textAlign: 'center'}}>
                            <Grid item xs={6} md={6}>
                                <Box>
                                <p>Subtotal </p>
                                <p>Shipping </p>
                                <div><hr /></div>
                                <h4 style={{color: 'crimson'}}>Total</h4>
                                </Box>
                            </Grid>
                            
                            <Grid item xs={6} md={6}>
                                <p>$ {subTotal.toFixed(2)}</p>
                                <p>$ {shippingCost.toFixed(2)}</p>
                                <div> <hr /></div>
                                <h4 style={{fontWeight: '600', color: 'crimson'}}>$ {total.toFixed(2)}</h4>
                            </Grid>
                        </Grid>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Box sx={{marginLeft: '10px', marginBottom: '10px'}}>
                                <h4 style={{color: 'crimson'}}>Address*</h4>
                                <p>We ship within Bangladesh. All fields are required unless they’re explicitly marked as optional.</p>
                                </Box>
                            <Box sx={{marginLeft: '10px', marginBottom: '10px'}}>
                            <div style={{marginBottom: '5px'}}>
                                <level>Your Email</level>
                            </div>
                            <Box >
                            <Tooltip 
                                TransitionComponent={Zoom} 
                                title="Please Add your Email">
                            <TextField 
                                required
                                fullWidth 
                                size="small" 
                                label="Email" 
                                id="fullWidth" 
                            />
                            </Tooltip>
                            </Box>
                            </Box>
                            <Box sx={{marginLeft: '10px', marginBottom: '10px'}}>
                            <div style={{marginBottom: '5px'}}>
                                <level>Your Number</level>
                            </div>
                            <Box >
                            <Tooltip 
                                TransitionComponent={Zoom} 
                                title="Please Add your Mobile Number">
                            <TextField 
                                required
                                fullWidth 
                                size="small" 
                                label="Number" 
                                id="fullWidth" 
                            />
                            </Tooltip>
                            </Box>
                            </Box>
                            <Box sx={{marginLeft: '10px', marginBottom: '10px'}}>
                            <div style={{marginBottom: '5px'}}>
                                <level>Shipping Address</level>
                            </div>
                            <Box >
                            <Tooltip 
                                TransitionComponent={Zoom} 
                                title="Please Add your Shipping Address">
                            <TextField 
                                required
                                fullWidth 
                                size="small" 
                                label="Address" 
                                id="fullWidth" 
                            />
                            </Tooltip>
                            </Box>
                            </Box>
                            <Box>
                                <button
                                className='w-100 py-1 mt-3'
                                style={{
                                    backgroundColor: 'crimson', 
                                    color: 'white', 
                                    border: 'none', 
                                    borderRadius: '30px'
                                }}
                                >Proceed To Payment</button>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                    
            </Container>
        </div>
    );
};

export default ConfirmOrder;