import React from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useForm } from "react-hook-form";
import './Login.css';
import useAuth from '../../../Hooks/useAuth';
import userEvent from '@testing-library/user-event';

const Login = () => {
    const {signInUser, user} = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    // console.log(auth);

    // const handleGoogleSign = (e) =>{
    //     e.preventDefault();
    //     googleSignUp();
    // }

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
            password: ''}
    });
    const onSubmit = ({email, password}) => {
        // console.log({email, password});
        // const {email, password} = data;
        signInUser(email, password, location, navigate);

    }
    // if(user.email){
    //     navigate('/')
    // }
    const handleHome = (e) =>{

        e.preventDefault();
        navigate('/')

    }
    return (
        <div className="container">
            <div style={{marginTop: '20px', display: 'flex'}}><button onClick={handleHome}>Back Home</button></div>
        <div className='d-flex justify-content-center mt-4'>
            
            <div>
            
                <div><h5 style={{textAlign: 'center'}}>red onion</h5></div>
                <div className='mt-4 p-4' style={{border: '1px solid crimson'}}>
                    <div><h3>Login</h3></div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register("email", { required: true })}/>
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" {...register("password", { required: true })}/>
                            </div>
                            <button type="submit" className="btn w-100 " style={{background: 'crimson', color: 'white'}}>Submit</button>
                            {errors.exampleRequired && <span>This field is required</span>}
                    </form>
                    <div className='text-center'>..................................</div>

                        <div className='text-center mt-4'><button className='border border-none' >Sign in With Google</button></div>
                        <div className='mt-4 text-center'><small>Create New Account? <span id='register-deign'><NavLink to='/register'>Click Here</NavLink></span></small></div>
                        
                </div>
            </div>

        </div>
        </div>
    );
};

export default Login;