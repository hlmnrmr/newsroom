import React from 'react';
import PropTypes from 'prop-types';


const CheckboxInput = ({name, label, onChange, value}) => {
    return (
        <div className='form-check'>
            <label htmlFor="{name}" className='form-check-label'>
                <input
                    type="checkbox"
                    name={name}
                    className="form-check-input"
                    checked={value}
                    onChange={onChange} />
                {label}</label>
        </div>
    );
};

CheckboxInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.bool.isRequired,
};

export default CheckboxInput;