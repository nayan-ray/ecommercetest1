import React from 'react'
import "./socialHome.css"
import RssFeedIcon from '@mui/icons-material/RssFeed';

const SocialHome = () => {
  return (
    <div className='social-home mt-5'>
        <div className="container">
            <div className="row">
                <div className="col-6 bg-secondary fs-2">
                     <RssFeedIcon />
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default SocialHome
