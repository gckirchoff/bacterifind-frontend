import React from 'react';
import Tube from '../../components/Tube/Tube';
import './MainPage.scss';
import { motion } from 'framer-motion';

const MainPage = ({ firstRender }) => {
  const mainPageVariantsFirst = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.9,
        duration: 0.95,
      },
    },
    exit: {
      x: '-100vw',
      transition: {
        ease: 'easeInOut',
      },
    },
  };

  const mainPageVariantsSecond = {
    hidden: {
      x: '-100vw',
    },
    visible: {
      x: 0,
      transition: {
        ease: 'easeInOut',
      },
    },
    exit: {
      x: '-100vw',
      transition: {
        ease: 'easeInOut',
      },
    },
  };

  console.log(firstRender);

  return (
    <motion.div
      className="main-page"
      variants={firstRender ? mainPageVariantsFirst : mainPageVariantsSecond}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <p style={{ color: 'red' }}>
        Under development. Not all IDs are in the database yet. To try it out,
        click the left-most box once to set the id to 40000 and then click
        search!
      </p>
      <Tube />
    </motion.div>
  );
};

export default MainPage;
