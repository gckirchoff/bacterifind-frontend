import React from 'react';
import Collapsible from 'react-collapsible';
import './BacteriaResult.scss';

const BacteriaResult = ({ bacteria }) => {
  return (
    <div className="bacteria-result-container">
      <div className="bacteria-description">
        <div>
          <h4>Bacteria:</h4>
          <h3>{bacteria.microorganism}</h3>
        </div>
        <div className="atypical-tests-container">
          <h4>Atypical tests:</h4>
          <ul className="atypical-tests">
            {bacteria.atypicalTests.map((test) => {
              return (
                <li className="atypical-test" key={test}>
                  {test}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <Collapsible trigger="More info" transitionTime={300}>
        <span className="icon">
          <i className="fas fa-arrow-down"></i>
        </span>
        <p>
          {bacteria.snippet}&nbsp;
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://en.wikipedia.org/wiki/${bacteria.wikiTitle}`}
          >
            Read more
          </a>
        </p>
      </Collapsible>
    </div>
  );
};

export default BacteriaResult;
