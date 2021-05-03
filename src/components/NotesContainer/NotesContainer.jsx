import React from 'react';
import Note from '../Note/Note';
import NoteEditor from '../NoteEditor/NoteEditor';
import './NotesContainer.scss';

const NotesContainer = ({ notes }) => {
  return (
    <div className="notes-container">
      {notes.map((note) => {
        return note.editing === false ? (
          <Note key={note._id} note={note} />
        ) : (
          <NoteEditor key={note._id} note={note} />
        );
      })}
    </div>
  );
};

export default NotesContainer;
