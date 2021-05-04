import React from 'react';
import './NoteEditor.scss';
import { useDispatch } from 'react-redux';
import { deleteNote, cancelEdit } from '../../state';

const NoteEditor = ({ note }) => {
  const dispatch = useDispatch();
  return (
    <div className="note">
      <button
        onClick={() => dispatch(cancelEdit(note._id))}
        className="cancel-edit"
      >
        Cancel
      </button>
      <h5 className="note-date margin-left-small">
        {new Date(note.date).toString().slice(0, 21)}
      </h5>
      <div className="date-border" />
      {note.codeNumber && (
        <h5 className="code-number margin-left-small">
          Code Number: {note.codeNumber}
        </h5>
      )}
      <textarea
        defaultValue={note.comments}
        name="note-editor"
        className="note-editor margin-left-small"
      ></textarea>

      <div className="bottom-border" />
      <div className="note-buttons-container">
        <div className="note-button-container">
          <button
            onClick={() => {
              console.log('clicked');
            }}
            className="note-button"
          >
            Update
          </button>
        </div>
        <div className="note-button-container note-button-container-left">
          <button
            onClick={() => dispatch(deleteNote(note._id))}
            className="note-button"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteEditor;
