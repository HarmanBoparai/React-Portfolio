import React from 'react';
import resume from '../../assets/resume.png';
export default function Resume() {
  return (
       <div className="bg-info">
      <div className="px-2">
      <h1 className="text-center">Resume</h1>
      <a href="harmansresume.pdf"
  download="harmansresume.pdf">
   <button className="btn btn-dark">Download My Resume</button>
   </a>
      <img className="resume" class="center" 
       height={1000}
       width={1500}
        src={resume}
        alt="biography"
      ></img>
   </div>
    </div>
  );
}