import React from 'react';
import './index.scss';

export default function FormError({ errorMessage, key }) {
  return (
    <span className="form-err mt-1" key={key}>
      {errorMessage}
    </span>
  );
}
