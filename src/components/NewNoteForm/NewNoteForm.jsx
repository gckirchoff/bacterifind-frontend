import React from 'react';
import { useForm } from 'react-hook-form';
import './NewNoteForm.scss';

const NewNoteForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="new-note-form">
      <h2>New Note</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="codeNumber" {...register('codeNumber')} />
        <input placeholder="comments" {...register('comments')} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default NewNoteForm;
