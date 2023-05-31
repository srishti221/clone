import React from 'react'
import './Header.css'
import user from './images/user.png'
import Left from './Left'

function Header() {
  return (
    <>
   
  
   
    <div className='header'>
      <div className='header-menu'>
      <i class="fa-solid fa-bars"></i>
      </div>
      <div className='header-left'>
      <label className='hlabel'>Microsoft Teams</label>
      </div>
      <div className='header-right'>
        

        <div className='search'>
        <i class="fa-solid fa-magnifying-glass"></i>
        <input placeholder='Search'/>
        </div>
        <div className='profile'>
          <div className='avatar'>
          <i class="fa-solid fa-ellipsis"></i>
          </div>
            
            <img className='image' src={user}/>
          

        </div>
        
      </div>
      
      </div>
     
      </>
     
   
  )
}

export default Header
