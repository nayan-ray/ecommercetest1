import React, { useEffect, useState } from 'react'
import "./register.css"
import { Link} from 'react-router-dom'
import axios from 'axios';

const Register = () => {
   const [username, setUserame] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [photo, setPhoto] = useState('');
   
    const handleSubmit= async(e)=>{
      e.preventDefault();
      const credentials = {
         username,email,password
      }
      if(photo){
         const data = new FormData();
         data.append("file",photo);
         try {
            const response = await axios.post("http://localhost:3505/uploads", data)
            console.log(response.data);
            if(response.statusText === "OK"){
               credentials.photo = response.data.img_url;
            }
         } catch (error) {
            console.log("hello");
         }
      }
      try {
          const response = await axios.post("http://localhost:3505/api/auth/register", credentials);
          if(response.statusText === "OK"){
              window.location.replace("/login");
          }
      } catch (error) {
          alert("something went wrong. Please try again")
      }
    }
    
  return (
    <div className="wrapper">
        <div className='register'> 
        <h1 className='registerTitele'>Register</h1> 
        <form className="regiterForm">
           <div className="reFormItem">
              <label htmlFor="username">Username :</label> 
              <input type="text"  id="username" value={username} onChange={(e)=> setUserame(e.target.value)}/> 
           </div> 
           <div className="reFormItem">
              <label htmlFor="email">Email :</label> 
              <input type="text" id="email" value={email} onChange={(e)=> setEmail(e.target.value)}/> 
           </div> 
           <div className="reFormItem">
              <label htmlFor="password">Password :</label> 
              <input type="password" id="password" value={password} onChange={e=>setPassword(e.target.value)}/> 
           </div> 
           <div className="reFormItem">
              <label htmlFor="photo">Photo :</label> 
              <input type="file" name="" id="photo" onChange={e=>setPhoto(e.target.files[0])}/> 
           </div> 
           <h2><button className='reButton' onClick={(e)=>handleSubmit(e)}>Register</button></h2>
           <p>Have an account? <Link to={"/login"}><b style={{color: "green", cursor:"pointer"}}>Login</b></Link></p>
        </form>
    </div>
    </div>
  )
}

export default Register
