import React from 'react';
import { useForm } from 'react-hook-form';

const LoginForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <h2>Log in</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="email" {...register('email')} />
        <input
          placeholder="password"
          {...register('password', { required: true })}
        />
        {errors.password && <p>Last name is required.</p>}
        <input type="submit" />
      </form>
    </>
  );
};

export default LoginForm;
