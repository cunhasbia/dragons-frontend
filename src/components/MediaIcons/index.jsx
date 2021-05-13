import React from 'react';
import { SiLinkedin, SiInstagram, SiGithub } from 'react-icons/si';

import './styles.scss';

export default function MediaIcons() {
    return (
        <div className="socialMediaIcons">
            <a href="https://github.com/cunhasbia" target="_blank" rel="noreferrer">
                <SiGithub />
            </a>
            <a href="https://linkedin.com/in/biancascunha" target="_blank" rel="noreferrer">
                <SiLinkedin />
            </a>
            <a href="https://instagram.com/cunhasbia" target="_blank" rel="noreferrer">
                <SiInstagram />
            </a>
        </div>
    );
}