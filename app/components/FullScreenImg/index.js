import React from 'react';

export default function Img(props) {
    function onFull(e) {
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
        <img src={props.src} onClick={onFull} style={{ width: '100%', objectFit: 'contain', background: 'black', cursor: 'pointer' }} />
    );
}
