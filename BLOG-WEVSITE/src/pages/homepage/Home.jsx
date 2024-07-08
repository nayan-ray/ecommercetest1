import React from 'react'
import "./home.css"
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import {posts} from "../../components/dummydata"
import Headerbox from '../../components/header/Headerbox'


const Home = () => {
  
  return (
    <div className='home'>
        <Headerbox />
        <div className="homeWrapper">
             <Posts posts={posts}/> 
             <Sidebar />
        </div>
    </div>
  )
}

export default Home
