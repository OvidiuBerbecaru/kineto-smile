import React from 'react';

const Medic = (props) => {
  const {
    name, specialization, quote, description, image,
  } = props;

  return (
    <div className="col-md-5 p-0 medic text-center medic">
      <img src={image} alt="medic" />
      <div className="text pt-3 pr-4 pl-4 pb-3">
        <p className="name mb-0">{name}</p>
        <p className="specialization">{specialization}</p>
        <p className="text-left description pt-3">{description}</p>
        <p className="quote">{quote}</p>
      </div>
    </div>
  );
};

export default Medic;