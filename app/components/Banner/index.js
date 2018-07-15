import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import { StyledImageContainer } from './styled';

import Img1 from './IMG_3922.jpg';
import Img2 from './IMG_3954.jpg';
import Img3 from './IMG_3971.jpg';

export default function Banner() {
    return (
        <div style={{ width: '100%' }}>
            <Carousel showThumbs={false} showIndicators={false} showStatus={false} autoPlay>
                <StyledImageContainer>
                    <img src={Img1} style={{ width: '100%' }} />
                </StyledImageContainer>
                <StyledImageContainer >
                    <img src={Img2} style={{ width: '100%' }} />
                </StyledImageContainer>
                <StyledImageContainer>
                    <img src={Img3} style={{ width: '100%' }} />
                </StyledImageContainer>
            </Carousel>
        </div>
    );
}
