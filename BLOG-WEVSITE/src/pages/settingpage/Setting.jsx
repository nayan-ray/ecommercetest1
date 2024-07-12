import React, { useContext, useState } from "react";
import "./setting.css";
import ram from "../../assets/ramkrisna.webp";
import {Link} from "react-router-dom"
import axios from "axios";
import { context } from "../../context/authContext/authContext";



const Setting = () => {
   const [user_img, setUSer_img ] = useState("");
   const [username , setUsername] = useState("");
   const [password , setPassword] = useState("");
   const {user, dispatch} =useContext(context);

   const handleSubmit = async(e)=>{
      e.preventDefault();
      console.log(user._id);

      console.log(user);
       dispatch({type : "update-start"})
      const update_credentials = {
          username, password, userid : user.user._id,
      }
      if(user_img){
        const data = new FormData();
        data.append("file",user_img);
        try {
           const response = await axios.post("http://localhost:3505/uploads", data)
           console.log(response.data);
           if(response.statusText === "OK"){
              update_credentials.user_img = response.data.img_url;
           }
        } catch (error) {
           console.log("hello");
        }
     }

    try {
        const response = await axios.put(`http://localhost:3505/api/auth/${user.user._id}`, update_credentials);
        if(response.statusText === "OK"){
            console.log(response.data);
            dispatch({type : "update-success", payload : response.data});
        } else{
          console.log("error");
        }
    } catch ( error) {
      // console.log("hello");
      dispatch({type : "update-failure"});
    }
   
     
   }
  return (
    <div className="setting">
      <div className="settingTitle">
        <span className="updateTitle">Update your account</span>
        <Link style={{textDecoration:"none"}} to={'/register/new'}><span className="createTitle">Create a account</span></Link>
      </div>
      <form className="settingForm" onSubmit={handleSubmit}>
        <div className="formItem">
          <span className="imgU">Update your img :</span>
          <label htmlFor="img">
            {" "}
            <img src={user_img ? URL.createObjectURL(user_img) : ram} alt="" className="settingImg" />
          </label>
          <input className="setting-input" type="file" id="img" hidden onChange={(e)=>setUSer_img(e.target.files[0])}/>
        </div>
        <div className="formItem">
          <label htmlFor="username"> Update your username :</label>
          <input className="setting-input" type="text" id="username" onChange={(e)=>setUsername(e.target.value)}/>
        </div>
        {/* <div className="formItem">
          <label htmlFor="email"> Update your email:</label>
          <input className="setting-input" type="email" id="email" />
        </div> */}
        <div className="formItem">
          <label htmlFor="password"> Update your password:</label>
          <input className="setting-input" type="password" id="password" onChange={e=>setPassword(e.target.value)}/>
        </div>
        <h1><button className="submit">Update</button></h1>
      </form>
    </div>
  );
};

export default Setting;
