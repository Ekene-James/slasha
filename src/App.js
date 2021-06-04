import React from 'react'

import Dashboard from './components/layout/Dashboard'
import Balances from './pages/balances/Balances';


function App() {

  return (
   <Dashboard>
     <Balances/>
   </Dashboard>

  );
}

export default App;
