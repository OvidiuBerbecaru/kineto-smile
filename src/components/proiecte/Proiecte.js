import React from 'react';
import Project from 'components/proiecte/Project';
import motivitBackground from 'assets/motivit-background.png';
import corpConsulting from 'assets/corporation-consulting-desk.png'

const projects = [
  {
    name: 'Motivit',
    imagePath: corpConsulting,
    url: 'https://www.facebook.com/MotiVitBucuresti/',
  },
  {
    name: 'Corporation Consulting Desk',
    imagePath: corpConsulting,
    url: 'https://www.facebook.com/MotiVitBucuresti/',
  },
  {
    name: 'Saptamana Altfel',
    imagePath: corpConsulting,
    url: 'https://www.facebook.com/MotiVitBucuresti/',
  },
];

const Proiecte = () => {
  return (
    <div className="proiecte w-100">
      <div className="container pt-5 pb-5">
        <div className="row justify-content-around">
          {
            projects.map(project => <Project name={project.name} imagePath={project.imagePath} url={project.url} />)
          }
        </div>
      </div>
    </div>
  );
};

export default Proiecte;