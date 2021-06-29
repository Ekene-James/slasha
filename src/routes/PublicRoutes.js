import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Login from '../pages/login/Login'
function PublicRoutes() {
    return (
        <Switch>
            <Route path='/login' component={Login} />
            <Redirect to='/login'/>
        </Switch>
    )
}

export default PublicRoutes
