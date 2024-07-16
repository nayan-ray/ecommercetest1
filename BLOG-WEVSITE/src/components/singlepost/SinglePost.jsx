import React, {  useContext, useState } from "react";
import "./singlepost.css";
import Img from "../../assets/ramkrisna.webp";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { context } from "../../context/authContext/authContext";
// import {useParams} from "react-router-dom";
// import axios from "axios";

const SinglePost = ({post}) => {
  const {user} = useContext(context);
  // const [post, setPost] = useState('');
  //  const {id} = useParams();
  //  //every component can use useParams inside single Page.
  //  useEffect(()=>{
  //      const getData = async()=>{
  //         const response = await axios.get(`http://localhost:3505/api/user/${id}`)
  //         setPost(response.data)
  //      }
  //     getData();
  //  },[id])

  return (
    <div className="singlepost">
      <div className="singlePostWrapper">
        <img src={post?.photo && post.photo} alt="" className="Img" />
        <div className="deleteEdit">
          <span className="title">{post?.title}</span>
          
          {user.user.username === post.username && 
              <div className="editDelete">
              <EditIcon className="icon edit"/>
              <DeleteIcon className="icon delete"/>
            </div>
          }
        </div>
         
        <div className="userInfo">
          <span className="userName">
            Author : <b>{post?.username}</b>
          </span>
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
