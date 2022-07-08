import { LinearProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from './useAuth';

const PrivateRoute = ({ children }) => {

    const { user , isLoading} = useAuth();
    const location = useLocation();

    if(isLoading){return <LinearProgress />}

    if(!user.email){

        return <Navigate to="/login" state={{ from: location }} replace />
    }
    return children;
};

export default PrivateRoute;