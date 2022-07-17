import React from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useForm } from "react-hook-form";
import useAuth from '../../../Hooks/useAuth';

const Register = () => {
    const location = useLocation()
    const navigate = useNavigate();

    const { signUpWithPassword } = useAuth();

    const { register, handleSubmit,  formState: { errors } } = useForm({
        defaultValues: {
            name: '',
            email: '',
            password: ''}
    });
    const onSubmit = data => {
        console.log(data);
        const {email, password, name} = data;
        signUpWithPassword(email, password, name, location, navigate)
        // signUpWithPassword();
        
    };
    // const handleSubmit = () =>{

    // }

    const handleHome = (e) =>{
        e.preventDefault();
        navigate('/');
    }
    return (
        <div className='container'>
            <div style={{marginTop: '20px'}}><button onClick={handleHome}>Back Home</button></div>
            <div className='d-flex justify-content-center mt-4'>
            <div>
                <div><h5 style={{textAlign: 'center'}}>red onion</h5></div>
                <div className='mt-4 p-4' style={{border: '1px solid crimson'}}>
                    <div><h3>register</h3></div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputName" className="form-label">Your Name</label>
                                <input type="name" className="form-control" id="exampleInputName" aria-describedby="emailHelp"  {...register("name")}/>
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register("email", { required: true })}/>
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-1">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" {...register("password", { required: true })}/>
                            </div>
                            
                            <button type="submit" className="btn  w-100 " style={{background: 'crimson', color: 'white'}}>Submit</button>
                            {errors.exampleRequired && <span>This field is required</span>}
                    </form>
                        <div className='mt-1 text-center'><small>Already Account? <span id='register-deign'><NavLink to='/login'>Click Here</NavLink></span></small></div>
                        
                </div>
            </div>
            </div>
        </div>
    );
};

export default Register;