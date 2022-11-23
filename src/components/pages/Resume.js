import React from 'react';
import resume from '../../assets/resume.png';
export default function Resume() {
  return (
       <div className="bg-info">
      <div className="px-2">
      <h1 className="text-center">Resume</h1>
      <a href="harmansresume.pdf"
  download="harmansresume.pdf">
   <button className="resumebtn">Download My Resume</button>
   </a>
      <img className="resume"
        src={resume}
        alt="biography"
      ></img>
   </div>
    </div>
  );
}
