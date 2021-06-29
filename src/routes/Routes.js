import React, { useContext } from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import AuthRoutes from './AuthRoutes';
import PublicRoutes from './PublicRoutes';
import { AuthContext } from '../store/auth/AuthStore';

function Routes() {
   
    const {state} = useContext(AuthContext);
    return (
       <Router>
           {state.authenticated ? <AuthRoutes/> : <PublicRoutes/>}
       </Router>
    )
}

export default Routes
