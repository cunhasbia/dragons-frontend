import React from 'react';

import MediaIcons from '../MediaIcons';

import './styles.scss';

export default function Footer() {
    return (
        <div className="footerContainer">
            <p>&copy; Bianca Cunha, 2021. All rights reserved.</p>
            <MediaIcons />
        </div>
    );
}