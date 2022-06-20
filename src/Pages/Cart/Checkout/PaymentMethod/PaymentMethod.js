import { Container } from '@mui/material';
import React , {useState} from 'react';
import Navigation from '../../../Shared/Navigation/Navigation';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import useAuth from '../../../../Hooks/useAuth';
import CreditCard from './CreditCard/CreditCard';
import Installment from './Installment/Installment';
import DBBL from './DBBL/DBBL';
import Rocket from './Rocket/Rocket';
import BKash from './BKash/BKash';
import CashAndDelivery from './CashAndDelivery/CashAndDelivery';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const PaymentMethod = () => {
    const {cart} = useAuth();
    const [show, setShow] = useState(false);
    const [displayContent, SetDisplayContent] = useState();


        let oldPrice = 0;
            let shippingCost = 0;
            let cartQuantity = 0;
        for (const listOfFood of cart){
            
            cartQuantity = cartQuantity + listOfFood.quantity;
            oldPrice = oldPrice + listOfFood.price * listOfFood.quantity;
            shippingCost = shippingCost + listOfFood.quantity * listOfFood.shipping;

        }
        // console.log(total);
        // let subTotal = oldPrice + cartQuantity;
        let total = oldPrice + cartQuantity + shippingCost;

    
    const handleClick = (d) =>{

        // e.preventDefault();

        console.log('click here');
        setShow(true);
        SetDisplayContent(d)

    }

    return (
        <div>
            <Navigation></Navigation>
            
            <Container fixed>
                {/* <h1>Hi this is Payment Method Page</h1> */}
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={8}>
                            <Paper elevation={3} sx={{padding: '10px'}}>
                                <Item>Payable Method</Item>
                                
                                <Box sx={{display: 'flex', textAlign: 'center', marginTop: '20px'}}>
                                
                                    <Grid item xs={3} md={2} sx={{marginLeft: '5px', marginRight: '5px'}} onClick={()=>handleClick(<CreditCard />)}>
                                        <Paper elevation={3}>
                                        <img src="https://laz-img-cdn.alicdn.com/tfs/TB1qIthr67nBKNjSZLeXXbxCFXa-80-80.png" alt="" />
                                        <p><small>Credit/Debit Card</small></p>
                                        </Paper >
                                    </Grid>

                                    <Grid item xs={3} md={2} sx={{marginLeft: '5px', marginRight: '5px'}} onClick={()=>handleClick(<Installment />)}>
                                        <Paper elevation={3}>
                                        <img src="https://laz-img-cdn.alicdn.com/tfs/TB1zkQlr77mBKNjSZFyXXbydFXa-80-80.png" alt="" />
                                        <p><small>Installment</small></p>
                                        </Paper >
                                    </Grid>

                                    <Grid item xs={3} md={2} sx={{marginLeft: '5px', marginRight: '5px'}} onClick={()=>handleClick(<DBBL />)}>
                                        <Paper elevation={3}>
                                            <img src="https://gcp-img.slatic.net/basecamp/images/OSS_F7eugUBH_3d6743c80b6c4652936cfb6e58a04328.png" alt="" />
                                            <p><small>DBBL Nexus Card</small></p>
                                        </Paper >
                                    </Grid>

                                    <Grid item xs={3} md={2} sx={{marginLeft: '5px', marginRight: '5px'}} onClick={()=>handleClick(<Rocket />)}>
                                        <Paper elevation={3}>
                                            <img src="https://gcp-img.slatic.net/basecamp/images/OSS_iWhp8Hi8_b09dedee68e947f9bde1f49182777d7f.png" alt="" />
                                            <p><small>Rocket</small></p>
                                        </Paper >
                                    </Grid>

                                    <Grid item xs={3} md={2} sx={{marginLeft: '5px', marginRight: '5px'}} onClick={()=>handleClick(<BKash />)}>
                                        <Paper elevation={3}>
                                            <img src="https://laz-img-cdn.alicdn.com/tfs/TB14FT1JpOWBuNjy0FiXXXFxVXa-400-400.png" alt="" style={{width: '80px', height: '80px'}}/>
                                            <p><small>Save bKash Account</small></p>
                                        </Paper >
                                    </Grid>
                                    
                                    <Grid item xs={3} md={2} sx={{marginLeft: '5px', marginRight: '5px'}} onClick={()=>handleClick(<CashAndDelivery />)}>
                                        <Paper elevation={3}>
                                            <img src="https://laz-img-cdn.alicdn.com/tfs/TB1utb_r8jTBKNjSZFwXXcG4XXa-80-80.png" alt="" />
                                            <p><small>Cash On Delivery</small></p>
                                        </Paper >
                                    </Grid>
                                </Box>
                            </Paper >
                            {show? <h1>{displayContent}</h1>: <h1 style={{display: 'none'}}>Hi Click you</h1>}
                        </Grid>

                        <Grid item xs={12} md={4}>
                        <Paper elevation={3} sx={{padding: '10px'}}>
                            <Item>Payable History</Item>
                            <h5 style={{marginTop: '15px'}}>Order Summary</h5>
                        <Box sx={{display: 'flex'}}>
                            <Grid item sx={9} md={9}>
                                <p><small><span>Subtotal (<span style={{color: 'crimson'}}> {cart?.length}</span> Items and shipping fee included )</span></small></p>
                                <hr />
                                <h4 style={{color: 'crimson'}}>Total Amount</h4>
                            </Grid>
                            <Grid item xs={3} md={3}>
                                <p style={{textAlign: 'right', fontWeight: '600', color: 'crimson'}}><span >$ {total.toFixed(2)}</span></p>
                                <hr />
                                <p style={{textAlign: 'right', fontWeight: '700', color: 'crimson', fontSize: '20px'}}>$ {total.toFixed(2)}</p>
                            </Grid>
                        </Box>
                        </Paper >
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </div>
    );
};

export default PaymentMethod;