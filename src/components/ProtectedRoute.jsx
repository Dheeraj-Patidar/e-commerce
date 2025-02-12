import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import {login,selectAuth} from '../redux/AuthSlice';

const ProtectedRoute = ({ element, allowedRoles }) => {
    
  const {user}  = useSelector((state) => state.auth);

  if (!user || user.role !== allowedRoles) {
    return <Navigate to="/login" />;
     
  }


  return element;
};

export default ProtectedRoute;
