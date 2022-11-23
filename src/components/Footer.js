import React from 'react';
import linkedin from '../assets/linkedin.png';
import githubimg from '../assets/githubimg.png';
import twitterimg from '../assets/twitterimg.png'
export default function Footer() {
    return (
        <div id="footer">
           <a href="https://github.com/HarmanBoparai">
            <img id="githubicon"  alt="github" src={githubimg}/>
          </a>
          <a href="https://www.linkedin.com/in/er-harman-boparai-32949457/">
            <img id="linkedinicon" alt="linkedin"src={linkedin}/>
          </a>
          <a href="https://twitter.com/HBoparai15">
            <img id="twittericon" alt="twitter"src={twitterimg}/>
          </a>
    </div>
  )
};