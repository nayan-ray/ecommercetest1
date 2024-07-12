import React, { useContext, useState } from 'react'
import "./checktopbar.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import RkI from "../../assets/ramkrisna.webp";
import { context } from '../../context/authContext/authContext';
import { Link } from 'react-router-dom';

const CheckTopbar = ({user}) => {
    const {dispatch} = useContext(context);
    const [toggle , setToggle] = useState(false);
    const handleclick =()=>{
        // e.preventDefault();
        dispatch({type : "logout"})
    }
  return (
    <div className='topbar'>
       <div className="topLeft">
           <FacebookIcon className='topIcon'/>
           <InstagramIcon className='topIcon'/>
           <TwitterIcon className='topIcon'/>
           <PinterestIcon className='topIcon'/>
       </div>
       <div className="topCenter">
           <ul className="topList">
              <li className="topListItem">Home</li>
              <li className="topListItem">About</li>
              <li className="topListItem">Contact</li>
              <li className="topListItem">Write</li>
           </ul>
       </div>
       <div className="topRight">
           {user ? (
              <div className="logout">
                   <button className='logout-btn' onClick={handleclick}>Logout</button>
                  <img onClick={()=>setToggle(!toggle)} src={RkI} alt="" className="topImg" />
              </div>
              
           ) : (
              <ul className="topList">
                  <li className="topListItem">Register</li>
                  <li className="topListItem">Login</li>
              </ul>
           )}
       </div>

       {toggle &&  <div className="modal">
            <ul className='item-list'>
                <Link style={{textDecoration : "none", color : "inherit"}} to={'/setting'}>
                    <li onClick={()=>setToggle(!toggle)} className='item'> setting</li>
                </Link>
                
               <li className='item'> setting</li>
           </ul>  
        </div>}


    </div>
  )
}

export default CheckTopbar
