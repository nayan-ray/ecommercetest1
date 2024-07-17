import React, { useContext } from "react";
import "./sidebar.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import rkp from "../../assets/ramkrisna.webp";
import { context } from "../../context/authContext/authContext";

const Sidebar = ({post}) => {
    const {user} = useContext(context)
  return (
    <div className="sidebar">
      <div className="sidebarListItem">
        <span className="sidebarTitle">About Me</span>
         <h1 style={{textAlign : "left", color : "green", margin :"5px 0"}}>{user.user.username}</h1>
        <img src={user.user?.photo} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
          mollitia cum! Impedit, natus modi eum assumenda nihil ducimus totam
          voluptatibus! Impedit libero at, quae ullam temporibus beatae maiores
          ad incidunt?
        </p>
      </div>
      <div className="sidebarListItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
          {/* {post.categories.map((item, i)=>{
              return <li key={i} className="sidebarItem">{item}</li>
          })} */}
           <li className="sidebarItem">video</li>
           <li className="sidebarItem">writing</li>
           <li className="sidebarItem">gardening</li>
        </ul>
      </div>
      <div className="sidebarListItem">
          <div className="sidebarTitle">Follow Me</div>
          <ul className="sidebarList">
           <li className="sidebarItem"><FacebookIcon /></li>
           <li className="sidebarItem"><InstagramIcon /></li>
           <li className="sidebarItem"><TwitterIcon /></li>
           <li className="sidebarItem"><PinterestIcon /></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
