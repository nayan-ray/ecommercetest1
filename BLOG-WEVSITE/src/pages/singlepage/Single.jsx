import React from 'react'
import './single.css'
import SinglePost from '../../components/singlepost/SinglePost'
import Sidebar from '../../components/sidebar/Sidebar'

const Single = () => {
  return (
    <div className='single'>
        <SinglePost/>
        <Sidebar />
        
    </div>
  )
}

export default Single
