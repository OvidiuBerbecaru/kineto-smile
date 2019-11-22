import React from 'react';

const Medic = ({ medicData }) => {
  const {
    name, specialization, quote, description, image,
  } = medicData;

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="d-flex justify-content-between align-items-center">
            { name }
            { specialization }
          </div>
        </div>
        <div className="col-md-6">
          { description }
        </div>
      </div>
    </div>
  );
};

export default Medic;