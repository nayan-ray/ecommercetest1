import React from 'react'
import "./feed.css";
import img from "../../../src/assets/ramkrisna.webp";
import VideoFileIcon from '@mui/icons-material/VideoFile';
import LabelIcon from '@mui/icons-material/Label';
import RoomIcon from '@mui/icons-material/Room';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

const Feed = () => {
  return (
    <div className='feed'>
        <div className="share">
              <div className="share-top p-3">
                 <img className='user-img me-3' src={img} alt="" />
                 <input className='user-details text-opacity-50 w-80' placeholder ="What's on your mind ramakrishna ?"/>
              </div>
               <hr className='feed-hr'/>
              <div className="share-bottom d-flex align-items-center justify-content-between p-4">
                   <div className="share-bottom-left d-flex">
                       <div className="action-item me-2 me-2">
                           <VideoFileIcon htmlColor='gold'/> Photos or Video
                        </div> 
                        <div className="action-item me-2">
                           <LabelIcon htmlColor='blue'/> Tag
                        </div> 
                        <div className="action-item me-2">
                           <RoomIcon htmlColor='green'/> Location
                        </div> 
                        <div className="action-item me-2">
                           <EmojiEmotionsIcon htmlColor='gold' /> feelings
                        </div> 
                   </div>
                   <div className="share-bottom-right">
                   <button type='button' className='btn btn-info'>Share</button>
                   </div>
              </div>
        </div>
        {/* <div className="post">

        </div> */}
    </div>
  )
}

export default Feed
