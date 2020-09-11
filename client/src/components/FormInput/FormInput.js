import React from 'react';

import './FormInput.scss';

const FormInput = ({ handleChange, label, labelFor, ...otherProps }) => {
  return (
    <div className="group">
      <input type="text" className="form-input" {...otherProps} />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? 'shrink' : ' '
          } form-input-label `}
          htmlFor={label}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
