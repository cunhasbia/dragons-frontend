import React from 'react';

import './styles.scss';

export default function FormInput({ handleChange, label, ...otherProps }) {
    return (
        <div className="inputGroup">
            <input className="inputBox" onChange={handleChange} {...otherProps} />

            {label
            ? (<label className={`${otherProps.value.length ? 'shrink' : ''} inputLabel`}>
                {label}
                </label>)
            : null}
        </div>
    );
}