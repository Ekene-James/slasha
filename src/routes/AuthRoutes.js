import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Dashboard from '../components/layout/Dashboard'
import Analytics from '../pages/analytics/Analytics';
import Balances from '../pages/balances/Balances';
import Overview from '../pages/Dashboard/Overview';
import Settings from '../pages/settings/Settings';
import Products from '../pages/products/Products';
import Support from '../pages/support/Support';
import SupportMsg from '../pages/support/SupportMsg';


function AuthRoutes() {
    return (
      <Dashboard>
          <Switch>
            <Route path='/overview' component={Overview} />
            <Route path='/balances' component={Balances} />
            <Route path='/analytics' component={Analytics} />
            <Route path='/settings' component={Settings} />
            <Route path='/products' component={Products} />
            <Route exact path='/support' component={Support} />
            <Route path='/support/:id' component={SupportMsg} />
            <Redirect to='/overview'/>

          </Switch>
       
      </Dashboard>
    )
}

export default AuthRoutes
