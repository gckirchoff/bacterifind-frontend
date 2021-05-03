import React from 'react';
import Tube from '../../components/Tube/Tube';

const MainPage = () => {
  return (
    <>
      <p style={{ color: 'red' }}>
        Under development. Not all IDs are in the database yet. To try it out,
        click the left-most box once to set the id to 40000 and then click
        search!
      </p>
      <Tube />
    </>
  );
};

export default MainPage;
