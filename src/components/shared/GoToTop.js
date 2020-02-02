import React from 'react';
import upsideArrow from 'assets/upsideArrow.png';

const GoToTop = () => {
  return (
    <div className="go-to-top" onClick={() => window.scrollTo(0, 0)}>
      <img src={upsideArrow} alt="upsideArrow" />
    </div>
  );
};

export default GoToTop;