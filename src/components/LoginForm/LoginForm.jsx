import React from 'react';
import { useForm } from 'react-hook-form';
import './LoginForm.scss';

const LoginForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="login-form-container">
      <h2>Log in</h2>
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="email"
          {...register('email', {
            pattern: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
            required: true,
          })}
        />
        {errors.email && <p>Please input a valid email</p>}
        <input
          type="password"
          placeholder="password"
          {...register('password', { required: true })}
        />
        {errors.password && <p>Please input your password</p>}
        <input className="login-submit" type="submit" />
      </form>
    </div>
  );
};

export default LoginForm;
