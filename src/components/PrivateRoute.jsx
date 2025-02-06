// import React from 'react';
// import { Route, Navigate } from 'react-router-dom';
// import { useAuth } from '../contexts/AuthContext';

// const PrivateRoute = ({ element, roles, ...rest }) => {
//   const { isAuthenticated, user } = useAuth();

//    if (!isAuthenticated) {
//     return <Navigate to="/login" replace />;
//   }

//   if (roles && !roles.includes(user?.role)) {
//     return <Navigate to="/" replace />;
//   }

//    return <Route {...rest} element={element} />;
// };

// export default PrivateRoute;
