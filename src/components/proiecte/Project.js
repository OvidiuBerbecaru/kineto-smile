import React from 'react';

const loremIpsum = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.';

const Project = ({ name, imagePath, link }) => {
  return (
    <div className="col-lg-5 project text-center justify-content-center pl-0 pr-0 mt-5 mb-5">
      <img className="w-100 h-50 mb-4" src={imagePath} alt="project" />
      <span>{name}</span>
      <p>{loremIpsum}</p>
      <a href={link}>
        <div className="d-flex project-button justify-content-center align-items-center">
          Afla mai mult
        </div>
      </a>
    </div>
  );
};

export default Project;