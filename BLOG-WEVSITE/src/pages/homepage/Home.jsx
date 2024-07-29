import React, { useEffect, useState } from 'react'
import "./home.css"
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
// import {posts} from "../../components/dummydata"
import Headerbox from '../../components/header/Headerbox'
import axios from 'axios'
import { useLocation } from 'react-router-dom'


const Home = () => {
  const [posts, setPosts] = useState([]);
  const {search} = useLocation();

  useEffect(()=>{
       const getData = async()=>{
           const response = await axios.get("http://localhost:3505/api/user" + search);
           setPosts(response.data);
       }
       getData();
  },[search])
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
