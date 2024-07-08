import React, { useContext, useState } from 'react'
import "./login.css"
import { Link } from 'react-router-dom'
import axios from 'axios';
import { context } from '../../context/authContext/authContext';

const Login = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const {user, dispatch} = useContext(context);
    const handleSubmit= async(e)=>{
      e.preventDefault();
      dispatch({type : "login-start"});
      const credentials = {
         email,password
      }
       
      try {
          const response = await axios.post("http://localhost:3505/api/auth/login", credentials);
          if(response.statusText === "OK"){
              dispatch({type : "login-success", payload : response.data})
          }
      } catch (error) {
         dispatch({type : "login-failure"})
      }
      // console.log(user);user is not visible on one clik
      //we can't work with user here as soon as one clik
    }
    
  return (
    <div className='wrapper'> 
      {/* {console.log(user)} 
      with clicking the button userinformation will be applicable here(in wrapper div)    
      */}
        <div className="login">
        <h1 className='loginTitele'>Login</h1> 
        <form className="regiterForm">
           <div className="loFormItem">
              <label htmlFor="email">Email :</label> 
              <input type="text"  id="email" value={email} onChange={e=>setEmail(e.target.value)} required/> 
           </div> 
           <div className="loFormItem">
              <label htmlFor="password">Password :</label> 
              <input type="text"  id="password" value={password} onChange={e=>setPassword(e.target.value)} required/> 
           </div> 
           <h2><button className='loButton' onClick={e=>handleSubmit(e)}>Login</button></h2>
           <p>Have an account? <Link to={"/register"}><b style={{color: "green", cursor:"pointer"}}>Register</b></Link></p>
        </form>
        </div>
    </div>
  )
}

export default Login
