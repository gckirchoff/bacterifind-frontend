import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import SignupForm from '../SignupForm/SignupForm';
import { login, signup } from '../../state';
import { useDispatch } from 'react-redux';
import './LoginSignupContainer.scss';

const LoginSignupContainer = () => {
  const dispatch = useDispatch();

  const onSignup = async (signupInfo) => {
    dispatch(signup(signupInfo));
  };

  const onLogin = async (loginInfo) => {
    dispatch(login(loginInfo));
  };
  return (
    <div className="login-signup-container">
      <LoginForm onSubmit={onLogin} />
      <SignupForm onSubmit={onSignup} />
    </div>
  );
};

export default LoginSignupContainer;
