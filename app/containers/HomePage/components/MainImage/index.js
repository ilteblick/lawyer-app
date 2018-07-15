import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { StyledImageContainer } from './styled';

import MainImg1 from '../../resources/IMG_3883.jpg';
import MainImg2 from '../../resources/IMG_3922.jpg';
import MainImg3 from '../../resources/IMG_3971.jpg';

export default function MainImage() {
    return (
        <Carousel showThumbs={false} showIndicators={false} showStatus={false} autoPlay transitionTime={1000} interval={7500}>
            <StyledImageContainer >
                <img src={MainImg1} style={{ width: '100%' }} />
            </StyledImageContainer>
            <StyledImageContainer >
                <img src={MainImg2} style={{ width: '100%' }} />
            </StyledImageContainer>
            <StyledImageContainer >
                <img src={MainImg3} style={{ width: '100%' }} />
            </StyledImageContainer>
        </Carousel>
    );
}
