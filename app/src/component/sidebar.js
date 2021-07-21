import React, { useState , useEffect, useRef } from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsersCog , faPowerOff } from '@fortawesome/free-solid-svg-icons'

import Logo from '../config_ui/images/logo_yellow.svg'
import { project } from '../config_store/project'


const Sidebar = ({ }) => {

      
    //INTERNAL FUNCTIONS
    const [openMenu, setMenuOpen] = useState(null);
    const showMenu = (index) => setMenuOpen(index);

    return (
        <div className='sidebar'>
            <div className='logo-area'> <img src={Logo} alt="" /> </div> 
            <div className='login-area'> 
                <FontAwesomeIcon icon={faUsersCog}/> 
                <div className='user-name'>Rebecca Souza </div> 
                <div className='log'><FontAwesomeIcon icon={faPowerOff}/> </div>    
            </div> 


            { project.map((item, index) => {

                const sub = item.submenu

                return (
                  <div className='sidebar-item' key={index} onClick={() => showMenu( openMenu === index ? null : index )}>
                    {item.menu}
                    {sub && 
                        <div className='prev-sub' style={ openMenu === index ? { display: 'none' } : null }>
                            {sub.map(item => ( <span>{item.name}</span>  ))}
                        </div>
                    } 

                    {
                       sub && openMenu === index && <div className='submenu'>
                           
                           { sub.map((item , index) => {
                               return (
                                  <a  href={item.route} className='sub-item'> {item.icon} {item.name}</a>
                               )
                           })}


                       </div>
                    }
                  </div>
                )              
            })}
        </div>
    )

}

export default Sidebar