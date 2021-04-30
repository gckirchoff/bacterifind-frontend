import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignupForm from '../../components/SignupForm/SignupForm';
import NewNoteForm from '../../components/NewNoteForm/NewNoteForm';

const NotesPage = () => {
  const [user, setUser] = useState(null);
  const [notes, setNotes] = useState([]);

  const onSignup = async (signupInfo) => {
    const { data } = await axios.post(
      process.env.NODE_ENV === 'production'
        ? '/api/v1/users/signup'
        : 'http://127.0.0.1:3005/api/v1/users/signup',
      signupInfo
    );
    setUser(data.data.user);
    console.log(data.data.user);
  };

  const onLogin = async (loginInfo) => {
    const { data } = await axios.post(
      process.env.NODE_ENV === 'production'
        ? '/api/v1/users/login'
        : 'http://127.0.0.1:3005/api/v1/users/login',
      loginInfo
    );
    setUser(data.data.user);
    setNotes(data.data.user.notes);
    console.log(data.data.user);
  };

  const onNewNoteCreation = async (noteInfo) => {
    const { data } = await axios.post(
      process.env.NODE_ENV === 'production'
        ? '/api/v1/notes'
        : 'http://127.0.0.1:3005/api/v1/notes',
      { ...noteInfo, user: user.id }
    );
    setNotes([...notes, data.data.newNote]);
  };

  return (
    <div>
      <p style={{ color: 'red' }}>
        (Under construction. Implementing more features and styling. Don't save
        anything important because the database is periodically emptied during
        development.)
      </p>
      {user ? (
        <div>
          Hi {user.name}
          <NewNoteForm onSubmit={onNewNoteCreation} />
          {notes.length > 0 ? (
            notes.map((note) => {
              return (
                <div key={note._id}>
                  <h3>{note.codeNumber}</h3>
                  <h2>{note.comments}</h2>
                </div>
              );
            })
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
