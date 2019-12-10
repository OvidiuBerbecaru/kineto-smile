import React from 'react';

const Medic = ({ medicData }) => {
  const {
    name, specialization, quote, description, image,
  } = medicData;

  return (
    <div className="col-md-4 medic">
      {image}
      {name}
      {specialization}
      {description}
      {quote}
    </div>
  );
};

export default Medic;