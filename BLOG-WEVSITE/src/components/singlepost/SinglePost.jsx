import React, {  useContext, useState } from "react";
import "./singlepost.css";
import Img from "../../assets/ramkrisna.webp";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { context } from "../../context/authContext/authContext";
// import {useParams} from "react-router-dom";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const SinglePost = ({post}) => {
  const navigate = useNavigate();
  const {user} = useContext(context);
 
  //  const {id} = useParams();
  //  //every component can use useParams inside single Page.
  //  useEffect(()=>{
  //      const getData = async()=>{
  //         const response = await axios.get(`http://localhost:3505/api/user/${id}`)
  //         setPost(response.data)
  //      }
  //     getData();
  //  },[id])
  const handleDelete= async(e)=>{
     e.preventDefault();
    //  const data ={
    //    username : user.user.username,
    //  }
     console.log(post._id);
     try {
      const response = await axios.delete(`http://localhost:3505/api/user/${post._id}`, {headers : {'username' : user.user.username}});
      if(response.statusText === "OK"){
        console.log(response.data);
        console.log(user.user.username);
         navigate("/");
      }else{
         alert('something is wrong');
      }
        
     } catch (error) {
        console.log("hello");
     }
      
  }

  return (
    <div className="singlepost">
      <div className="singlePostWrapper">
        <img src={post?.photo && post.photo} alt="" className="Img" />
        <div className="deleteEdit">
          <span className="title">{post?.title}</span>
          
          {user.user.username === post.username && 
              <div className="editDelete">
                  <Link style={{textDecoration : "none", color : "inherit"}} to={'/writepost/update'} state={post}>
                        <EditIcon className="icon edit"/>
                  </Link>
                  <DeleteIcon onClick={handleDelete} className="icon delete" />
            </div>
          }
        </div>
         
        <div className="userInfo">
                   <Link style={{textDecoration : "none", color : "inherit"}} to={`/?username=${post.username}`} state={post}>
                        <span className="userName">
                            Author : <b>{post?.username}</b>
                        </span>
                  </Link>
          
          <span className="date">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <div className="desc">
          <p>
               {post?.desc}
          </p>         
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
