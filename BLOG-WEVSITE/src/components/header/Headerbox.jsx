import React from 'react'
import "./header.css"
import banner from "../../assets/banner.jpg"

const Headerbox = () => {
  return (
    <div className='headerbox'>
        <div className="headerTitles">
             <span className="titleSm">Mern-Stack Development</span>
             <span className="titleLg">Blog</span>
        </div>
        <img src={banner} alt="" className='headerImg'/>
    </div>
  )
}

export default Headerbox
