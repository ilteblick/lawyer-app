import React from 'react';
import { StyledImageContainer } from './styled';

import MainImg from '../../resources/IMG_3883.jpg';

export default function MainImage() {
    function onFull(e) {
        console.log(e.target);
        const elem = e.target;
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        }
    }

    return (
        <StyledImageContainer onClick={onFull}>
            <img src={MainImg} style={{ width: '100%' }} />
        </StyledImageContainer>
    );
}
