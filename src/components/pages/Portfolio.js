import React from 'react';
import project1 from '../../assets/project1.png';
import project2 from '../../assets/project2.png';
import project3 from '../../assets/project3.png';
import project4 from '../../assets/project4.png';
import project5 from '../../assets/project5.png';
import Project from '../Project.js'

const projects =[

  {
     title :"Flight Planner-A Web API Application",
     img : project1 ,
     url : "https://benliu104.github.io/Project01-FlightPlanner/",
     repo :"https://github.com/BenLiu104/Project01-FlightPlanner",
  },
  {
   
     title :"The Lending Station-MVC based library",
     img : project2 ,
     url : "https://the-lending-station.herokuapp.com/",
    repo :"https://github.com/sashdc/the-lending-station",
  },
  {

     title :"The Goodness Gift  ",
     img : project3,
     url : "https://salty-lowlands-79836.herokuapp.com/",
   repo :"https://github.com/thivsiv28/The-goodness-gift",
  },
  {

     title :"Tech Blog ",
     img :project4 ,
     url : "https://harman-tech-blog.herokuapp.com/",
    repo :"https://github.com/HarmanBoparai/Tech-Blog",
  },
  {

     title : "Text Editor-Progressive Web Application ",
     img :project5 ,
     url : "https://harmans-text-editor.herokuapp.com/",
    repo :"https://github.com/HarmanBoparai/Text-Editor-Progressive-Web-Application",
  },

 ];

export default function Portfolio() {
  return (
    <div className="bg-info">
        {projects.map((project, index) => {
        return (
          <Project
          key={index}
          title={project.title}
          desc={project.desc}
          url={project.url}
          img={project.img}
          repo={project.repo}
        />
      );
    })}
  </div>
);
}
