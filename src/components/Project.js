import React from 'react';

export default function Project({ title, desc, url, repo, img }) {
  const style = {
    width: '100%',
    height: '30rem',
  };
  return (
    <div className="container">
      <div className="card bg-dark ">
        <img
          src={img}
          className="card-img-top"
          alt=""
          style={style}
        />
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p className="card-text desc">{desc}</p>
          <a href={repo} className="btn btn-info">
            Link to Github Repository
          </a>
       <a href={url} className="btn btn-info">
               Deployed Application
              </a>
              </div>
      </div>
    </div>
 );
}