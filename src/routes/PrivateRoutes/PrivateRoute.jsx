import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    console.log(location)

    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <div className='w-50 mx-auto'>
            <Spinner animation="border" variant="primary" />
        </div>
    }

    if (user) {
        return children;
    }

    return <Navigate state={{ from: location }} to="/login" replace></Navigate>
};

export default PrivateRoute;