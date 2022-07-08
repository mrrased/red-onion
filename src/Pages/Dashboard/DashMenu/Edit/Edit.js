import React, {useState} from 'react';
import { Container, Fab, TextareaAutosize, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
const ariaLabel = { 'aria-label': 'description' };

const Edit = () => {

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });
    const [ name, setName ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ amount, setAmount ] = useState('');
    const [ productKey, setProductKey ] = useState('');
    const [ category, setCategory ] = useState('');
    const [ stock, setStock ] = useState('');
    const [ shipping, setShipping ] = useState('');
    const [ image, setImage ] = useState(null);

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        setAmount(event.target.value);
    };

    const handleSubmit = e =>{
        e.preventDefault();
        // console.log(name);
        
        const productData = new FormData();
        productData.append('name', name);
        productData.append('description', description);
        productData.append('amount', amount);
        productData.append('productKey', productKey);
        productData.append('category', category);
        productData.append('stock', stock);
        productData.append('shipping', shipping);
        
        productData.append('image', image);

        fetch('http://localhost:5000/food',{

            method: 'POST',
            enctype: "multipart/form-data",
            body: productData
        })
        .then(res => res.json())
        .then(data => {
            if(data?.acknowledged){
                alert("Your Product Add Successful");
            }
        })


    }

    return (
        <>
            <Box>
            <Typography variant="h5" component="h5" sx={{ marginBottom: '40px' }}>
               Edit Menu
            </Typography>
            </Box>
            <form action="" onSubmit={handleSubmit}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={8} md={9}>
                            
                            <Container>
                                <Box sx={{marginTop: '10px', marginBottom: '10px'}}>
                                    <Typography variant="h6" component="h2">
                                        Title
                                    </Typography>
                                    <Input 
                                        required
                                        placeholder="Title" 
                                        inputProps={ariaLabel} 
                                        sx={{width: '100%'}} 
                                        type="name"
                                        onChange={(e)=>setName(e.target.value)}
                                        name="name"
                                    />
                                </Box>
                            
                                <Box sx={{marginTop: '60px'}}>
                                    <TextareaAutosize
                                        required
                                        sx={{ letterSpacing: 6 }}
                                        aria-label="minimum height"
                                        minRows={9}
                                        placeholder="Description"
                                        style={{ width: '100%' }}
                                        type="description"
                                        name='description'
                                        onChange={(e)=>setDescription(e.target.value)}
                                    />
                                </Box>
                            </Container>
                        </Grid>
                        <Grid item xs={4} md={3}>
                            <Box>
                                <Box>
                                    <Item>Amount</Item>
                                    <Paper elevation={3} >
                                        <FormControl  sx={{ m: 1 , padding: '10px', width: '95%'}} variant="standard">
                                            <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
                                            <Input
                                                id="standard-adornment-amount"
                                                value={values.amount}
                                                onChange={handleChange('amount')}
                                                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                                type="amount"
                                                
                                            />
                                        </FormControl>
                                    </Paper>
                                </Box>
                                {/* <Box sx={{marginTop: '30px'}}>
                                    <Item>Product Key</Item>
                                    <Paper elevation={3} >
                                        <FormControl  sx={{ m: 1 , padding: '10px', width: '95%'}} variant="standard">
                                            <InputLabel htmlFor="standard-adornment-amount">Product Key</InputLabel>
                                            <Input
                                                id="standard-adornment-amount"
                                                value={values.amount}
                                                onChange={handleKeyChange('amount')}
                                                startAdornment={<InputAdornment position="start">Key</InputAdornment>}
                                            />
                                        </FormControl>
                                    </Paper>
                                </Box> */}

                                <Box sx={{marginTop: '30px'}}>
                                    <Item>Product Key</Item>
                                    <Paper elevation={3} >
                                        <FormControl  sx={{ m: 1 , padding: '10px', width: '95%'}} variant="standard">
                                            {/* <InputLabel htmlFor="standard-adornment-amount">Product Key</InputLabel> */}
                                            <Input 
                                                required
                                                placeholder="Key" 
                                                inputProps={ariaLabel} 
                                                type="productKey"
                                                onChange={(e)=>setProductKey(e.target.value)}
                                            />
                                        </FormControl>
                                    </Paper>
                                </Box>
                                <Box sx={{marginTop: '30px'}}>
                                    <Item>Category</Item>
                                    <Paper elevation={3} >
                                        <FormControl  sx={{ m: 1 , padding: '10px', width: '95%'}} variant="standard">
                                            {/* <InputLabel htmlFor="standard-adornment-amount">Product Key</InputLabel> */}
                                            <Input 
                                                required
                                                placeholder="category" 
                                                inputProps={ariaLabel} 
                                                onChange={(e)=>setCategory(e.target.value)}
                                                type="category"
                                            />
                                        </FormControl>
                                    </Paper>
                                </Box>
                                <Box sx={{marginTop: '30px'}}>
                                    <Item>Stock Product</Item>
                                    <Paper elevation={3} >
                                        <FormControl  sx={{ m: 1 , padding: '10px', width: '95%'}} variant="standard">
                                            {/* <InputLabel htmlFor="standard-adornment-amount">Product Key</InputLabel> */}
                                            <Input 
                                                required
                                                placeholder="Stock" 
                                                inputProps={ariaLabel} 
                                                name='number'
                                                onChange={(e)=>setStock(e.target.value)}
                                            />
                                        </FormControl>
                                    </Paper>
                                </Box>
                                <Box sx={{marginTop: '30px'}}>
                                    <Item>Shipping</Item>
                                    <Paper elevation={3} >
                                        <FormControl  sx={{ m: 1 , padding: '10px', width: '95%'}} variant="standard">
                                            {/* <InputLabel htmlFor="standard-adornment-amount">Product Key</InputLabel> */}
                                            <Input 
                                                required
                                                placeholder="shipping" 
                                                inputProps={ariaLabel} 
                                                name='shipping'
                                                onChange={(e)=>setShipping(e.target.value)}
                                            />
                                        </FormControl>
                                    </Paper>
                                </Box>
                                <Box sx={{marginTop: '30px'}}>
                                    <Item>Images</Item>
                                    <Paper elevation={3} >
                                        <FormControl  sx={{ m: 1 , padding: '10px', width: '95%'}} variant="standard">
                                            {/* <InputLabel htmlFor="standard-adornment-amount">Product Key</InputLabel> */}
                                            <Input
                                                required
                                                accept="image/*"
                                                id="contained-button-file" 
                                                multiple type="file"
                                                name="photos"
                                                onChange={e=> setImage(e.target.files[0])}
                                            />
                                        </FormControl>
                                    </Paper>
                                </Box>
                                <Box>
                                <Fab variant="extended" sx={{marginTop: '30px', backgroundColor: 'crimson', color: 'white', borderColor: 'crimson', width: '100%', ':hover':{color: 'crimson'}}}
                                type="submit"
                                >
                                        
                                        Submit
                                    </Fab>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </form>
        </>
    );
};

export default Edit;