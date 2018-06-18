import React from 'react';
import ReactPlayer from 'react-player';
import { StyledSection } from './styled';

export default function VideoSection() {
    return (
        <StyledSection>
            <ReactPlayer url="https://www.youtube.com/watch?v=XIzt7lzSA9U" loop controls />
        </StyledSection>
    );
}
