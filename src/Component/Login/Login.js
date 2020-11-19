import React from 'react';
import './Login.css';
import Auth from './useAuth';

const Login = () => {
    const auth = Auth();
    // console.log(auth);
    return (
        <div className="container">
                <div className="login-style">
                <h1>WellCome To Login Page</h1>
                {
                    auth.user ? <button onClick={auth.signOut}>Sign Out</button> :
                    <button onClick={auth.signInWithGoogle}>Sign in With Google</button>
                }
                </div>
        </div>
    );
};

export default Login;