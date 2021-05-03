import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignupForm from '../../components/SignupForm/SignupForm';
import NewNoteForm from '../../components/NewNoteForm/NewNoteForm';
import NotesContainer from '../../components/NotesContainer/NotesContainer';
import './NotesPage.scss';
import { useSelector, useDispatch } from 'react-redux';
import { login, signup, createNote } from '../../state';

const NotesPage = () => {
  const dispatch = useDispatch();
  const reduxUser = useSelector((state) => state.user.user);
  console.log(reduxUser);
  const [user, setUser] = useState(null);
  const [notes, setNotes] = useState([]);

  const onSignup = async (signupInfo) => {
    // const { data } = await axios.post(
    //   process.env.NODE_ENV === 'production'
    //     ? '/api/v1/users/signup'
    //     : 'http://127.0.0.1:3005/api/v1/users/signup',
    //   signupInfo
    // );
    // setUser(data.data.user);
    // console.log('cookie', data.data);
    // console.log(data.data.user);

    dispatch(signup(signupInfo));
    console.log('Redux signed in!', reduxUser);
  };

  const onLogin = async (loginInfo) => {
    // const { data } = await axios.post(
    //   process.env.NODE_ENV === 'production'
    //     ? '/api/v1/users/login'
    //     : 'http://127.0.0.1:3005/api/v1/users/login',
    //   loginInfo
    // );
    // setUser(data.data.user);
    // setNotes(data.data.user.notes);
    // console.log('react state', data);

    dispatch(login(loginInfo));
    console.log('Redux worked!', reduxUser);
  };

  const onNewNoteCreation = async (noteInfo) => {
    // const { data } = await axios.post(
    //   process.env.NODE_ENV === 'production'
    //     ? '/api/v1/notes'
    //     : 'http://127.0.0.1:3005/api/v1/notes',
    //   { ...noteInfo, user: user.id, date: Date.now() }
    // );
    // console.log(data);
    // setNotes([...notes, data.data.newNote]);

    dispatch(createNote(noteInfo, reduxUser.id));
  };

  return (
    <div className="notes-page">
      <p style={{ color: 'red' }}>
        (Under construction. Implementing more features and styling. Don't save
        anything important because the database is periodically emptied during
        development.)
      </p>
      <p>State managed by Redux: {reduxUser !== null ? reduxUser.name : ''}</p>
      <p>State managed by React: {user !== null ? user.name : ''}</p>
      {reduxUser ? (
        <div>
          Hi {reduxUser.name}
          <NewNoteForm onSubmit={onNewNoteCreation} />
          {reduxUser.notes.length > 0 ? (
            <NotesContainer notes={reduxUser.notes} />
          ) : (
            <h3>New notes will go here</h3>
          )}
        </div>
      ) : (
        <div>
          <LoginForm onSubmit={onLogin} />
          <SignupForm onSubmit={onSignup} />
        </div>
      )}
    </div>
  );
};

export default NotesPage;
