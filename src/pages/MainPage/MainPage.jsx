import React from 'react';
import Tube from '../../components/Tube/Tube';
import './MainPage.scss';

const MainPage = () => {
  return (
    <div className="main-page">
      <p style={{ color: 'red' }}>
        Under development. Not all IDs are in the database yet. To try it out,
        click the left-most box once to set the id to 40000 and then click
        search!
      </p>
      <Tube />
    </div>
  );
};

export default MainPage;
