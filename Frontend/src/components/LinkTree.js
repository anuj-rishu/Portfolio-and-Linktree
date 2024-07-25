import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin,faCode, faInstagram, faXTwitter, faDev } from '@fortawesome/free-brands-svg-icons';

import { faBriefcase,faFileAlt } from '@fortawesome/free-solid-svg-icons';
import ImageComponent from './ImageComponent'; 



function Linktree( {UserName}) {
  return (
     <div className=' mb-auto '>
        <a id="profilePicture" href="#popup">
   

        <ImageComponent imageName="Link Tree User Photo.svg"  />
        </a>
        
        <div id="userName">
        {UserName}
        </div>
        
        <div id="links" >


        <a className="link" href={process.env.REACT_APP_RESUME_URL} target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faFileAlt} />&nbsp;Portfolio
</a>
 {/* <Link className="link"  to="/project">
    <FontAwesomeIcon icon={faBriefcase} />&nbsp;Projects
    </Link> */}

       <a className="link" href={process.env.REACT_APP_LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faLinkedin} />&nbsp;Linkedin
</a>
<a className="link" href={process.env.REACT_APP_LEETCODE_URL} target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faBriefcase} />&nbsp;LeetCode
   
</a>
<a className="link" href={process.env.REACT_APP_GITHUB_URL} target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faGithub} />&nbsp;Github
</a>
<a className="link" href={process.env.REACT_APP_DEV_URL} target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faDev} />&nbsp;Dev Community
</a>
<a className="link" href={process.env.REACT_APP_INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faInstagram} />&nbsp;Instagram
</a>
<a className="link" href={process.env.REACT_APP_TWITTER_URL} target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faXTwitter} />&nbsp;&nbsp;Twitter
</a>

         
        </div>
        
        <div id="hashtag">
          #Just_Smile
        </div>
     </div>
  );
}

export default Linktree;