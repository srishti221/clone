import React from 'react'
import './SideBar.css'
import { SidebarBottom, SidebarData, SidebarMore } from '../data/sidebard'
import SideBaroption from './SideBaroption';
import {Link } from "react-router-dom"
import Left from './Left';
function SideBar() {
    const topOptions=SidebarData;
    const more= SidebarMore;
    const bottomOptions= SidebarBottom;
  return (
   <div className='sidebar'>
              <div className='top'>
              
                  
                  
                      {topOptions.map((option) => {
                           
                         return  <SideBaroption option={option}
                           />
                          

                      }
                     )}
                      
                  
                  
              </div>
              <div>
                  <div>
                      <SideBaroption option={more} />
                  </div>
                  
              </div>
              <div className='b1'>
                  <div className='bottom'>
                      {bottomOptions.map((option) => {
                          return <SideBaroption option={option} />;


                      })}
                      
                  </div>
                  
              </div>
             
          </div>
       
        
      
    
  )
  
}

export default SideBar
