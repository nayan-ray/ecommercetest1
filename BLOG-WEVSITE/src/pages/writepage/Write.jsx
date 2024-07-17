import React, { useContext,  useState } from "react";
import "./write.css";
import profileavater from "../../assets/avatarbanner.webp";
import axios from "axios";
import {context} from "../../context/authContext/authContext"
const Write = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [photo, setPhoto] =useState('');
  const {user} = useContext(context);

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
        const response = await axios.post("http://localhost:3505/api/user/post", postDetails)
         window.location.replace(`./${response.data._id}/single`)
         alert("post has been created")
     } catch (error) {
         alert("something is error")
     }

  }
  return (
    <div className="write">
      <h1 className="wTitle">Write Your Blog...</h1>
      <form>
        <div>
          <label htmlFor="avatar">
            <img src={photo ? URL.createObjectURL(photo) : profileavater} alt="" className="WriteImg" />
          </label>
          <input type="file" id="avatar" hidden onChange={(e)=> setPhoto(e.target.files[0])}/>
        </div>
        <div className="textTitle">
          <label className="titletext" htmlFor="title">
            Write your blog title :
          </label>
          <input type="text" id="title" className="titleInput" onChange={e=>setTitle(e.target.value)}/>
        </div>
        <textarea
          className="textarea"
          name=""
          placeholder="Tell your story..."
          rows={10}
          cols={100}
          onChange={(e)=>setDesc(e.target.value)}
        ></textarea>
        <h1 className="button">
          <button type="submit" onClick={handleSubmit}>Submit</button>
        </h1>
      </form>
    </div>
  );
};

export default Write;
