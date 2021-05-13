import React from 'react';
import ReactLoading from 'react-loading';

import './styles.scss';

export default function Loading() {
    return (
        <div className="loadContainer">
            <ReactLoading type="spin" color='#04AB57' height='3%' width='3%' />
        </div>
    );
}