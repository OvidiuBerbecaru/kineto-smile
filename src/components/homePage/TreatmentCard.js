import React from 'react';

const TreatmentCard = ({ text, ...props }) => {
  return (
    <div {...props} style={{height: '200px'}}>
      {text}
    </div>
  );
};

export default TreatmentCard;