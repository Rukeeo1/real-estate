import React from 'react';
import quote from 'assets/svg/quote.svg';
import logo from 'assets/png/liveizy-logo.png'
import './index.scss';

export default function Message() {
  return (
    <div className="message-wrap">
      <span
        
        className="message-wrap__quote"
      >
        <img src={quote} alt="quote" />
      </span>
      <div className="message-wrap__body">
        <p>
          Our job is to granty you peace of mind when it comes to choosing an
          apartment as a tenant or as landlord looking for the right tenant .
        </p>
        <h3>Tochi Adesanya</h3>
        <p>CEO & CO-FOUNDER LIVEIZY</p>
      </div>
      <img src={logo} alt="logo" className="logo" />
    </div>
  );
}
