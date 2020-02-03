import React, { useState } from 'react';
import classNames from 'classnames';

import TorsoPassive from 'assets/TorsoPassive.png';
import HeadPassive from 'assets/HeadPassive.png';
import LombarPassive from 'assets/LombarPassive.png';
import LegsPassive from 'assets/LegsPassive.png';
import TreatmentCard from './TreatmentCard';

const bulletpointsHead = [
  {
    title: 'Afectiuni neurologice',
    head: 'hemiplegii, paraplegii, etc.',
  },
  {
    title: 'Boli autoimune - PR-poliartrita reumatoida - SA-spondilita anchilopoietica',
    head: '',
  },
  {
    title: 'Intarziere motorie',
    head: 'in achizitionarea miscarilor motorii specifice varstei in cazul nou-nascutilor',
  },
];

const bulletpointsTorso = [
  {
    title: 'Afectiuni cardiovasculare',
    head: 'readaptare la efort in cardiopatia ischemica cronica,readaptare la efort dupa interventii chrurgicale pe aparatul cardio-vascular',
  },
  {
    title: 'Afectiuni pulmonare',
    head: 'DVO-disfunctii ventilatorii obstructive, DVR-disfunctii ventilatorii restrictive',
  },
  {
    title: 'Sechele ale traumatismului muscular',
    head: 'miozita, hematomul muscular, ischemia musculara, atrofia musculara',
  },
];

const bulletpointsLombar = [
  {
    title: 'Afectiuni musculare',
    head: 'diastaza abdominala postpartum,hipotrofie musculara',
  },
  {
    title: 'Afectiuni reumatologice',
    head: 'coxartroza,gonartroza, PSH-periartrita scapulo humerala,lombosciatica',
  },
  {
    title: 'Afectiunile coloanei vertebrale',
    head: 'cifoza, scolioza, hiperlordoza, dureri cervicale, toracale, lombare, hernii de disc, spondiloze',
  },
];

const bulletpointsLegs = [
  {
    title: 'Sechele posttraumatice ale aparatului locomotor',
    head: 'complicatii determinate de aparatul gipsat, sindromul algoneurodistrofic posttraumatic, limitarea mobilitatii articulare, instabilitatea articulara',
  },
  {
    title: 'Afectiuni ale sistemului osos',
    head: 'osteopenie si osteoporoza (exercitiul fizic adecvat stimuleaza producerea de osteoblaste<celule osoase> si amelioreaza semnificativ durerea)',
  },
];

const CeTratam = () => {
  const [actviveElement, setActiveElement] = useState(0);

  const headClassName = (index) => classNames('c-pointer riseOnHover', {
    'd-none': index === actviveElement,
    'd-box': index !== actviveElement,
  });

  const textClassName = (index) => classNames('treatmentCard', {
    'd-none': index !== actviveElement,
    'd-box': index === actviveElement,
  });

  return (
    <div className="container">
      <div className="row justify-content-center">
        <p
          className="mb-5"
          style={{
            color: '#002D4B',
            fontSize: '1.5rem',
            fontFamily: 'nunito',
            fontWeight: '500',
            lineHeight: '2.5rem',
        }}>"La inceput facem o evaluare clinico-functionala din punct de vedere kinetoterapeutic pentru a realiza un plan de tratamentadecvat problemelor existente, plan in care se vor trasa obiectivele recuperarii medicale sau ale kinetoprofilaxiei, perioada de timp propusa pentru efectuarea tratamentului in vederea atingerii obiectivelor sau pana la urmatoarea reevaluare" - Lucica Nedelcu( Profesor Kinetoterapeut principal )</p>
        <div className="w-100 text-center mb-2">
          <img src={HeadPassive} className={headClassName(0)} alt="head" onClick={() => setActiveElement(0)} />
          <TreatmentCard text={bulletpointsHead} className={textClassName(0)} />
        </div>
        <div className="w-100 text-center mb-2">
          <img src={TorsoPassive} className={headClassName(1)} alt="torso" onClick={() => setActiveElement(1)} />
          <TreatmentCard text={bulletpointsTorso} className={textClassName(1)} />
        </div>
        <div className="w-100 text-center mb-2">
          <img src={LombarPassive} className={headClassName(2)} alt="lombar" onClick={() => setActiveElement(2)}/>
          <TreatmentCard text={bulletpointsLombar} className={textClassName(2)} />
        </div>
        <div className="w-100 text-center">
          <img src={LegsPassive} className={headClassName(3)} alt="legs" onClick={() => setActiveElement(3)}/>
          <TreatmentCard text={bulletpointsLegs} className={textClassName(3)} />
        </div>
      </div>
    </div>
  );
};

export default CeTratam;