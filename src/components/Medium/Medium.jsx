import React from 'react';
import './Medium.scss';

const Medium = ({ medium, handleClick, value }) => {
  return (
    <>
      {/* <div className="medium-container" onClick={handleClick}>
        <h3 className="medium-name">{medium}</h3>
        <div className={`medium ${value}`}></div>
      </div> */}
      <div className={`medium ${value.result}`} onClick={handleClick}>
        <h3 className="medium-name">{medium}</h3>
        <h3 className="medium-code">{value.code}</h3>
      </div>
    </>
  );
};

export default Medium;
