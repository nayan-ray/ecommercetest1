import React from "react";
import "./post.css";


// import pe from "../../assets"

const Post = ({ post }) => {
  const trancate =(str, num)=>{
    // slice(start, end) selects from start to end but end is included
    if(str.length > num){
      return str.slice(0, num) + "..." ;
    } else{
       return str;
    }
  }
  return (
    <div className="post">
      {post.photo && <img src={post.photo} className="pImg" alt="" />}
      <div className="postInfos">
        <div className="postInfo">
          <div className="postcats">
            {post.categories.map((c, i) => (
              <span key={i} className="cat">
                {c}
              </span>
            ))}
          </div>
          <span className="postTitle">{post.title}</span>
        </div>
        <p className="description">{trancate(post.desc, 100)}</p>
       
      </div>
    </div>
  );
};

export default Post;