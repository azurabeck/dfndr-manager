import React, { Suspense } from 'react';
import {  Switch,  Route } from 'react-router-dom';

// CSS
import './config_ui/styles/app.css';
import './config_ui/styles/sidebar.css';
import './config_ui/styles/navbar.css';

// COMPONENTS
import Sidebar from './component/sidebar'
import Navbar from './component/navbar'

const App = () => {

  // MF
  const AdminPage = React.lazy(() => import("AdminApp/AdminPage"));

  return(
      <>       
        <Sidebar />
        <Navbar />

        <div className='content'>
          <Switch>
            <Route exact path="/admin">
              <Suspense fallback={<div>Loading...</div>}>
                <AdminPage />
              </Suspense>
            </Route>
          </Switch>
        </div>
      </>
  )

}

export default App;