import React from 'react'
import FormError from 'components/FormError'
import './index.scss'

export const Input = ({
    icon,
    className,
    name,
    onChange,
    onBlur,
    placeholder,
    value,
    label,
    errorMessage,
    type,
  }) => (
    <div className={`alt-input ${className}`}>
      <label>{label}</label>
      {icon && (
        <span>
          <img src={icon} alt="icon" />
        </span>
      )}
      <input
        onChange={onChange}
        onBlur={onBlur}
        type={type ? type : 'text'}
        placeholder={placeholder}
        value={value}
        name={name}
      />
      <FormError errorMessage={errorMessage} />
    </div>
  );
  
  export default Input;
  
