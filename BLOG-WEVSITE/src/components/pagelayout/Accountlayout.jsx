import React from 'react'
import "./accountlayout.css"
import { Outlet } from 'react-router-dom'

const Accountlayout = () => {
  return (
    <div className='layout'>
       <Outlet />
    </div>
  )
}

export default Accountlayout
