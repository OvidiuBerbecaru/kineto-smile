import React from 'react';

const Separator = (props) => {
  return (
    <div className="separator container-fluid d-flex w-100 justify-content-center bg-white">
      {props.children}
    </div>
  );
};

export default Separator;