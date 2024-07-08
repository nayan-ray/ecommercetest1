import React from 'react'
import "./checktopbar.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import RkI from "../../assets/ramkrisna.webp";

const CheckTopbar = ({user}) => {
  
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
              <img src={RkI} alt="" className="topImg" />
           ) : (
              <ul className="topList">
                  <li className="topListItem">Register</li>
                  <li className="topListItem">Login</li>
              </ul>
           )}
       </div>
    </div>
  )
}

export default CheckTopbar
