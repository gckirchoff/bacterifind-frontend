import React from 'react';
import NewNoteForm from '../../components/NewNoteForm/NewNoteForm';
import NotesContainer from '../../components/NotesContainer/NotesContainer';
import LoginSignupContainer from '../../components/LoginSignupContainer/LoginSignupContainer';
import './NotesPage.scss';
import { useSelector, useDispatch } from 'react-redux';
import { createNote } from '../../state';
import { motion } from 'framer-motion';

const notesPageVariants = {
  hidden: {
    x: '100vw',
  },
  visible: {
    x: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
  exit: {
    x: '100vw',
    transition: {
      ease: 'easeInOut',
    },
  },
};

const NotesPage = () => {
  const dispatch = useDispatch();
  const reduxUser = useSelector((state) => state.user.user);

  const onNewNoteCreation = async (noteInfo) => {
    dispatch(createNote(noteInfo, reduxUser.id));
  };

  return (
    <motion.div
      className="notes-page"
      variants={notesPageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {reduxUser ? (
        <div className="notes-section">
          <p>Hello, {reduxUser.name}</p>
          <NewNoteForm onSubmit={onNewNoteCreation} />
          {reduxUser.notes.length > 0 ? (
            <NotesContainer notes={reduxUser.notes} />
          ) : (
            <h3>New notes will go here</h3>
          )}
        </div>
      ) : (
        <LoginSignupContainer />
      )}
    </motion.div>
  );
};

export default NotesPage;
