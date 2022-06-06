import React from 'react';
import './NavBar.scss';
import NavEl from '../NavEl/NavEl';
import Title from '../Title/Title';
import { motion } from 'framer-motion';

const navVariants = {
  hidden: {
    y: -100,
  },
  visible: {
    y: 0,
    transition: {
      delay: 0.3,
      type: 'spring',
      damping: 15,
      stiffness: 70,
    },
  },
};

const NavBar = () => {
  return (
    <motion.nav
      className="nav-container"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <Title />
      <div className="links-container">
        <NavEl type="home" />
        <NavEl type="notes" />
      </div>
    </motion.nav>
  );
};

export default NavBar;
