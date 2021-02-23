import React, { useState } from 'react';
import balconyMan from 'assets/png/man-on-balcony.png';
import logoWithText from 'assets/png/liveizy-text-logo.png';

import Signup from 'pages/Auth/SignUp';
import Login from 'pages/Auth/LoginIn';
import Message from 'components/Message';
import './index.scss';
import SingUp from 'pages/Auth/SignUp';

export default function AuthPage() {
  return (
    <div className="auth-page">
      <div className="auth-page__banner">
        <img src={balconyMan} alt="man-standing-on-balcony" />
      </div>
      <div className="auth-page__forms">
        <img
          src={logoWithText}
          alt="company-logo"
          className="auth-page__forms__logo"
        />
        {/* <h1>Create your Free Account</h1>
        <p className="auth-page__forms_login-text">
          Already have an account? <span>Log in</span>
        </p> */}
        <Login />
        <div style={{ position: 'absolute', bottom: '30px', left: '101px' }}>
          <Message />
        </div>
      </div>
    </div>
  );
}
