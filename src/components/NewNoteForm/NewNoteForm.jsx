import React from 'react';
import { useForm } from 'react-hook-form';
import './NewNoteForm.scss';

const NewNoteForm = ({ onSubmit, defaultCode, marginLeft }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div
      className={`new-note-form-container ${
        marginLeft ? 'margin-left-note-form' : ''
      }`}
    >
      <h2>New Note</h2>
      <form className="new-note-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="code-input"
          defaultValue={defaultCode ? defaultCode : ''}
          placeholder="code (optional)"
          {...register('codeNumber')}
        />
        <textarea
          className="comments-input"
          placeholder="comments"
          {...register('comments')}
        ></textarea>
        <input className="new-note-submit-btn" type="submit" />
      </form>
    </div>
  );
};

export default NewNoteForm;
