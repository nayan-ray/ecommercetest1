import React from 'react'
import "./socialHome.css"
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import ram from "../../../src/assets/ramkrisna.webp";
import Feed from '../../components/feed/Feed';

const SocialHome = () => {
  return (
    <div className='social-home mt-2'>
        <div className="container">
            <div className="row d-flex ">
                <div className="col-3">
                  <div className="sidebar ">
                     <ul className="sidebar-actions list-unstyled border-gray border-bottom pt-2 pb-2">
                         <li className="sidebar-item p-2 ">
                             <RssFeedIcon className='me-2' /> Feed
                         </li>
                         <li className="sidebar-item p-2">
                             <ChatIcon className='me-2' /> Chats
                         </li>
                         <li className="sidebar-item p-2">
                             <PlayCircleFilledWhiteIcon className='me-2' /> Videos
                         </li>
                         <li className="sidebar-item p-2">
                             <GroupIcon className='me-2' /> Groups
                         </li>
                         <li className="sidebar-item p-2">
                             <BookmarkIcon className='me-2' /> Bookmarks
                         </li>
                         <li className="sidebar-item p-2">
                             <HelpOutlineIcon className='me-2' /> Questions
                         </li>
                         <li className="sidebar-item p-2">
                             <WorkOutlineIcon className='me-2' /> Jobs
                         </li>
                         <li className="sidebar-item p-2">
                             <EventIcon className='me-2' /> Events
                         </li>
                         <li className="sidebar-item p-2">
                             <SchoolIcon className='me-2' /> School
                         </li>
                         <li className="sidebar-item p-2">
                         <button type="button" className="btn btn-secondary ps-5 pe-5">Primary</button>
                         </li>
                     </ul>
                     <ul className="friend-lists list-unstyled">
                           <li className="friendList-item p-2">
                              <img className='friend-img me-3' src={ram} alt="" />
                               Ramkrisna
                           </li>
                           <li className="friendList-item p-2">
                              <img className='friend-img me-3' src={ram} alt="" />
                               Ramkrisna
                           </li>
                           <li className="friendList-item p-2">
                              <img className='friend-img me-3' src={ram} alt="" />
                               Ramkrisna
                           </li>
                           <li className="friendList-item p-2">
                              <img className='friend-img me-3' src={ram} alt="" />
                               Ramkrisna
                           </li>
                           <li className="friendList-item p-2">
                              <img className='friend-img me-3' src={ram} alt="" />
                               Ramkrisna
                           </li>
                           <li className="friendList-item p-2">
                              <img className='friend-img me-3' src={ram} alt="" />
                               Ramkrisna
                           </li>
                           <li className="friendList-item p-2">
                              <img className='friend-img me-3' src={ram} alt="" />
                               Ramkrisna
                           </li>
                       </ul>
                     </div>
                </div>
                <div className="col-6">
                  <Feed />
                </div>
                <div className="col-3">
                  right

                </div>
            </div>
        </div>
    </div>
  )
}

export default SocialHome
