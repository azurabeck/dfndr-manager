import React, { Suspense , lazy } from 'react';
import { Switch,  Route,  Link, withRouter} from 'react-router-dom';
import './config_ui/styles/app.css';
import './config_ui/styles/sidebar.css';
import './config_ui/styles/navbar.css';

import Sidebar from './component/sidebar'
import Navbar from './component/navbar'



function App() {

  // CALLING OTHER PROJECTS
  const ContactPage = lazy(() => new Promise(async resolve => {
    const module = await import("ContactApp/ContactPage");
    setTimeout(() => resolve(module), 1000);
  }));

  return (
    <>
        <Sidebar />
        <Navbar />

        <div className='content'>

        <Route exact path="/contact">
            <Suspense fallback={<div>Loading...</div>}>
              <ContactPage />
            </Suspense>
          </Route>       
        
        </div>
    </>
  );
}


export default withRouter((App));
