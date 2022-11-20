import React from 'react';
import avatar from '../../assets/devimg.JPG';
export default function AboutMe() {
  return (
    <div className="bg-info">
      <div className="px-2">
      <h1 className="text-center">About Me</h1>
      <img
        src={avatar}
        alt="profile_picture"
        className="rounded-circle img-center"
        width="10%"/>
      <section>
      <p id="about_me_para">
       I'm a full stack web developer with a focus on the MERN stack,
       but still exploring other technologies and frameworks that catch my interest! 
       Currently,I'm studying at University Of Toronto Coding Bootcamp Program.
       I have learned various front end and back end languages,databases and worked on various projects.
       If you're looking for a developer to add to your team, I'd love to hear from you!
      </p>
      </section>
      </div>
    </div>
  );
}
