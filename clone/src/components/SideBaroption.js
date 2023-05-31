import React from 'react'
import './SideBaroption.css'

function SideBaroption({option,isActive}) {
    const classList=isActive?'sidebar-option active':'sidebar-option'
  return (
    
    <div className={classList}>
      <div className='tea'>
      <div className='icon'>{option.button}</div>
      {option.name&&<label className='label'>{option.name}</label>}
      </div>
      
    </div>
    
  )
}

export default SideBaroption
