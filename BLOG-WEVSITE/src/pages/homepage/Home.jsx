import React, { useEffect, useState } from 'react'
import "./home.css"
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
// import {posts} from "../../components/dummydata"
import Headerbox from '../../components/header/Headerbox'
import axios from 'axios'


const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(()=>{
       const getData = async()=>{
           const response = await axios.get("http://localhost:3505/api/user");
           setPosts(response.data);
       }
       getData();
  },[])
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
