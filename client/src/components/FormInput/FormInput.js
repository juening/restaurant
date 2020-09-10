import React from 'react';

const FormInput = ({ handleChange, label, labelFor, ...otherProps }) => {
  return (
    <div className="group">
      <input type="text" className="form-input" {...otherProps} />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? 'shrink' : ' '
          } 'form-input' `}
          htmlFor={`${labelFor ? { labelFor } : ' '}`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
