import React from 'react';
import './index.scss';

export default function Button(props) {
  const {
    onClick,
    loading,
    title,
    className,
    disabled = false,
    type = 'submit',
    iconRight,
  } = props;
  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {loading ? (
        <span>
          <i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
        </span>
      ) : (
        <>
          {iconRight && (
            <span>
              <i class="fa fa-plus" aria-hidden="true"></i>
            </span>
          )}
          <span className="button-text"> {title}</span>
        </>
      )}
    </button>
  );
}
