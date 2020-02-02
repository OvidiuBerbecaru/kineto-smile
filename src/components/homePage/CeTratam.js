import React, { useState } from 'react';
import classNames from 'classnames';

import TorsoPassive from 'assets/TorsoPassive.png';
import HeadPassive from 'assets/HeadPassive.png';
import LombarPassive from 'assets/LombarPassive.png';
import LegsPassive from 'assets/LegsPassive.png';
import TreatmentCard from './TreatmentCard';

const cardText = {
  head: 'asdadadasdadadadd',
  torso: 'Torso',
  lombar: 'Lombar',
  legs: 'Legs',
};

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
        <div className="w-100 text-center mb-2">
          <img src={HeadPassive} className={headClassName(0)} alt="head" onClick={() => setActiveElement(0)} />
          <TreatmentCard text={cardText.head} className={textClassName(0)} />
        </div>
        <div className="w-100 text-center mb-2">
          <img src={TorsoPassive} className={headClassName(1)} alt="torso" onClick={() => setActiveElement(1)} />
          <TreatmentCard text={cardText.torso} className={textClassName(1)} />
        </div>
        <div className="w-100 text-center mb-2">
          <img src={LombarPassive} className={headClassName(2)} alt="lombar" onClick={() => setActiveElement(2)}/>
          <TreatmentCard text={cardText.lombar} className={textClassName(2)} />
        </div>
        <div className="w-100 text-center">
          <img src={LegsPassive} className={headClassName(3)} alt="legs" onClick={() => setActiveElement(3)}/>
          <TreatmentCard text={cardText.legs} className={textClassName(3)} />
        </div>
      </div>
    </div>
  );
};

export default CeTratam;