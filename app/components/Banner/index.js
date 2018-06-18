import React from 'react';

import { StyledImageContainer, StyledLabel } from './styled';

export default function Banner(props) {
    return (
        <StyledImageContainer>
            <StyledLabel>{props.label}</StyledLabel>
        </StyledImageContainer>
    );
}
