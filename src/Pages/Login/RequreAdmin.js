import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';
import Loading from '../Shared/Loading';

const RequreAdmin = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const location =useLocation();
    const [admin,adminLoading] =useAdmin(user)
    if(loading ||adminLoading){
        return <Loading></Loading>
    }
    if(!user || !admin){
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default RequreAdmin;