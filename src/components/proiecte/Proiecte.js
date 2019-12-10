import React from 'react';
import Project from 'components/proiecte/Project';
import motivitBackground from 'assets/motivit-background.png';
import corpConsulting from 'assets/corporation-consulting-desk.png'

const projects = [
  {
    name: 'Motivit',
    imagePath: corpConsulting,
    link: 'https://www.facebook.com/MotiVitBucuresti/',
    desc: 'Asociatia MOTIVIT a luat fiinta din dorinta de a veni in intampinarea nevoilor oamenilor din aceasta societate printr-o viziune holistica asupra omului si dezvoltarii acestuia .Prin asociatia MOTIVIT se desfasoara proiecte ca:”Toghether up”,”5 zile,5 simturi,5 emotii,5 zambete”,”Aleea cu 5 terapii” si multe altele care vor fi dezvoltate in colaborare cu terapeuti din alte domenii cu scopul de a creste calitatea vietii.',
  },
  {
    name: 'Corporation Consulting Desk',
    imagePath: corpConsulting,
    link: 'https://www.facebook.com/MotiVitBucuresti/',
    desc: 'Alte proiecte de acest fel sunt “Corporation consulting desk”si “Un exercitiu pe zi la birou” proiecte prin care urmarim cresterea calitatii vietii prin preventie prin informare si educatie.',
  },
  {
    name: 'Saptamana Altfel',
    imagePath: corpConsulting,
    link: 'https://www.facebook.com/MotiVitBucuresti/',
    desc: 'Primul proiect dezvoltat de noi este “Kineto Smile la saptamana altfel”.Am creat un program special pentru saptamana altfel in scoli avand ca scop constientizarea posturii corecte a corpului prin informare si exercitii interactive.',
  },
];

const Proiecte = () => {
  return (
    <div className="proiecte w-100">
      <div className="container pt-5 pb-5">
        <div className="row justify-content-around">
          {
            projects.map(project => <Project name={project.name} imagePath={project.imagePath} link={project.link} desc={project.desc} />)
          }
        </div>
      </div>
    </div>
  );
};

export default Proiecte;