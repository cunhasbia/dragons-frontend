import React from 'react';
import { BiErrorCircle } from 'react-icons/bi';

import './styles.scss';

export default function ErrorAlert({ message }) {
    return (
        <div className="errorDiv">
            <BiErrorCircle />
            <span className="errorMessage">{message}</span>
        </div>
    );
}