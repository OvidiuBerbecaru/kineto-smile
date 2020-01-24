import React from 'react';

const Tarif = ({ title, services }) => {
  return (
    <div className="tarif">
      <h5>{title}</h5>
      { services.map(service => (<p>{service}</p>)) }
    </div>
  );
};

export default Tarif;