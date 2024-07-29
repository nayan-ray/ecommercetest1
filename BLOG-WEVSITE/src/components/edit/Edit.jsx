import React, { useContext,  useState } from "react";
import "./edit.css";
import axios from "axios";
import {context} from "../../context/authContext/authContext"
import { useLocation, useNavigate } from "react-router-dom";
const Edit = () => {
  const {state} = useLocation();
  const [title, setTitle] = useState(state.title);
  const [desc, setDesc] = useState(state.desc);
  const [photo, setPhoto] =useState('');
  const {user} = useContext(context);
  const navigate = useNavigate();
  

  const handleSubmit = async(e)=>{
     e.preventDefault();
     const postDetails = {
        title, desc, username : user.user.username,
     }

     if(photo){
      const data = new FormData();
      data.append("file",photo);
      try {
         const response = await axios.post("http://localhost:3505/uploads", data)
         console.log(response.data);
         if(response.statusText === "OK"){
            postDetails.photo = response.data.img_url;
         }
      } catch (error) {
         console.log("hello");
      }
   }
      
     try {
        const response = await axios.put(`http://localhost:3505/api/user/${state._id}`, postDetails)
        //  navigate(`./${response.data._id}/single`); for ./ it was not working.
        navigate(`/${response.data._id}/single`); //now it is working
        
     } catch (error) {
         alert("something is error")
     }

  }
  return (
    <div className="write">
     
      <h1 className="wTitle">Edit Your Blog...</h1>
      <form>
        <div>
          <label htmlFor="avatar">
            <img src={ photo  ? URL.createObjectURL(photo) : state.photo} alt="" className="WriteImg" />
          </label>
          <input type="file" id="avatar" hidden onChange={(e)=> setPhoto(e.target.files[0])}/>
        </div>
        <div className="textTitle">
          <label className="titletext" htmlFor="title">
            Write your blog title :
          </label>
          <input type="text" id="title" value={title} className="titleInput" onChange={e=>setTitle(e.target.value)}/>
        </div>
        <textarea
          className="textarea"
          name=""
          value={desc}
          rows={10}
          cols={100}
          onChange={(e)=>setDesc(e.target.value)}
        ></textarea>
        <h1 className="button">
          <button type="submit" onClick={handleSubmit}>Update</button>
        </h1>
      </form>
    </div>
  );
};

export default Edit;
