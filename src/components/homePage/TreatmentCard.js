import React from 'react';

const TreatmentCard = ({ text, ...props }) => {
  return (
    <div {...props} style={{ textAlign: 'left' }}>
      {
        text.map(singleRecord => (
          <div className="p-4">
            <span className="mr-3"  style={{ color: '#FF4B00', fontSize: '1.3rem' }}>{singleRecord.title}</span>
            <span>{`${singleRecord.head}`}</span>
          </div>
        ))
      }
    </div>
  );
};

export default TreatmentCard;