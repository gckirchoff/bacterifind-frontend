import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import './SignupForm.scss';

const SignupForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = useRef({});
  password.current = watch('password', '');

  return (
    <div className="signup-container">
      <h2>Sign up</h2>
      <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="email"
          {...register('email', {
            pattern: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
            required: true,
          })}
        />
        {errors.email && <p>Please input your email</p>}
        <input placeholder="name" {...register('name', { required: true })} />
        {errors.name && <p>Please input your name</p>}
        <input
          type="password"
          placeholder="password"
          {...register('password', { required: true })}
        />
        {errors.password && <p>Please input your password</p>}
        <input
          type="password"
          placeholder="confirm password"
          {...register('passwordConfirm', {
            required: true,
            validate: (value) => value === password.current,
          })}
        />
        {errors.passwordConfirm && <p>Please ensure that passwords match</p>}
        <input className="signup-submit" type="submit" />
      </form>
    </div>
  );
};

export default SignupForm;
