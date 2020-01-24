import React from 'react';

const Separator = ({
  text, separatorMargin = '0px', bgColor = 'white', boxShadow,
}) => {
  return (
    <div
      className="separator container-fluid d-flex w-100 justify-content-center"
      style={{
        margin: separatorMargin,
        background: bgColor,
        boxShadow,
      }}
    >
      <div className="d-flex justify-content-center align-items-center">{text}</div>
    </div>
  );
};

export default Separator;