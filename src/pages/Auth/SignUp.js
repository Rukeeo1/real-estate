import React from 'react';
import Input from 'components/Input';
import Button from 'components/Buttons'

export default function SingUp() {
  return (
    <div>
      <h1>Create your Free Account</h1>
      <p className="auth-page__forms_login-text">
        Already have an account? <span>Log in</span>
      </p>
      <div className="auth-page__forms__inputs">
        <Input label="Full Name" className="input input__name" />
        <Input label="Email Address" className="input" />
      </div>
      <div className="auth-page__forms__inputs mt-4">
        <Input label="Create Password" className="input input__name" />
        <Input label="Confirm Password" className="input" />
      </div>
      <div className="auth-page__forms__inputs mt-4">
        <Input label="Referral" className="input input__name" />
        <div className="empty-298"></div>
      </div>
      <Button title="Create Account" className="liveizbtn liveizbtn--primary mt-5"/>
      <p className="mt-4">
      By signing up, you are agreeing to Liveizy Terms & Conditions
      </p>
    </div>
  );
}
