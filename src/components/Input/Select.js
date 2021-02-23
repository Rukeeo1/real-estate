import React from 'react';
// import FormError from 'components/Errors/FormError';
import './Select.scss';

const Select = ({
  options,
  description,
  defaultValue,
  onChange = () => {},
  label,
  className=''
}) => {
  return (
    <div className={className}>
      {label ? <label className="mt-2">{label}</label> : null}
      <select className="input d-flex" onChange={onChange}>
        {/* <option>{defaultValue}</option> */}
        <option value="" disabled selected>Select Unit</option>
        {options?.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
      <i class="fa fa-angle-down" aria-hidden="true"></i>
    </div>
  );
};

export default Select;
