import React, { useEffect, useState } from 'react'
import './single.css'
import SinglePost from '../../components/singlepost/SinglePost'
import Sidebar from '../../components/sidebar/Sidebar'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Single = () => {
  const [post, setPost] = useState('');
  const {id} = useParams();
  //every component can use useParams inside single Page.
  useEffect(()=>{
      const getData = async()=>{
         const response = await axios.get(`http://localhost:3505/api/user/${id}`)
         setPost(response.data)
      }
     getData();
  },[id])
  return (
    <div className='single'>
        <SinglePost post={post}/>
        <Sidebar post={post}/>
        
    </div>
  )
}

export default Single
