import React from 'react';
import './Note.scss';
import { useDispatch } from 'react-redux';
import { editNote, deleteNote } from '../../state';

const Note = ({ note }) => {
  const dispatch = useDispatch();
  return (
    <div className="note">
      <h5 className="note-date margin-left-small">
        {new Date(note.date).toString().slice(0, 21)}
      </h5>
      <div className="date-border" />
      {note.codeNumber && (
        <h5 className="code-number margin-left-small">
          Code Number: {note.codeNumber}
        </h5>
      )}
      <p className="comment margin-left-small">{note.comments}</p>
      <div className="bottom-border" />
      <div className="note-buttons-container">
        <div className="note-button-container">
          <button
            onClick={() => {
              dispatch(editNote(note._id));
              console.log(note._id);
            }}
            className="note-button"
          >
            Edit
          </button>
        </div>
        <div className="note-button-container note-button-container-left">
          <button
            onClick={() => {
              dispatch(deleteNote(note._id));
              console.log('clicked');
            }}
            className="note-button"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Note;
