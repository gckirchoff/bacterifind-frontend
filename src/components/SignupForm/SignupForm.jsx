import React from 'react';
import { useForm } from 'react-hook-form';

const SignupForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <h2>Sign up</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="email" {...register('email')} />
        <input placeholder="name" {...register('name')} />
        <input placeholder="password" {...register('password')} />
        <input placeholder="passwordConfirm" {...register('passwordConfirm')} />
        <input type="submit" />
      </form>
    </>
  );
};

export default SignupForm;
