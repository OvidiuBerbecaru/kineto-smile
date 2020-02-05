import React from 'react';

const Project = ({
  name, imagePath, link, desc,
}) => {
  return (
    <div className="col-md-5 project text-center justify-content-center pl-0 pr-0 mt-5 mb-5">
      <img className="mb-4" src={imagePath} alt="project" />
      <h1>{name}</h1>
      <p className="pl-3 pr-3">{desc}</p>
      <a href={link}>
        <div className="d-flex project-button justify-content-center align-items-center">
          Afla mai mult
        </div>
      </a>
    </div>
  );
};

export default Project;