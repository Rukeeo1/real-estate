import React from 'react';
import Input from 'components/Input';
import Button from 'components/Buttons';
import './index.scss'

export default function LoginIn() {
  return (
    <div style={{ height: '100%' }}>
      <h1>Login</h1>
      <div className="auth-page__forms__login-view mt-4">
        <Input label="Email address" className="input input__name" />
        <Input label="Password" className="input input__name mt-4" />
        <div className="d-flex justify-content-end mt-2">
            <p>Forgot Password?</p>
        </div>
        <Button title="Login" className="liveizbtn liveizbtn--primary mt-5" />
        <p className="mt-3">Need a Liveizy account? Create an account</p>
      </div>
    </div>
  );
}
