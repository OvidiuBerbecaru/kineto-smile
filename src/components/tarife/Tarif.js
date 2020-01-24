import React from 'react';

const Tarif = ({ title, services }) => {
  return (
    <div className="tarif">
      <h2>{title}</h2>
      { services.map(service => (<p>{service}</p>)) }
    </div>
  );
};

export default Tarif;