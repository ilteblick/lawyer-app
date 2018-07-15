import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { StyledImageContainer } from './styled';

import MainImg1 from '../../resources/IMG_3883.jpg';
import MainImg2 from '../../resources/IMG_3922.jpg';
import MainImg3 from '../../resources/IMG_3971.jpg';
import MainImg4 from '../../resources/IMG_3995.jpg';
import MainImg5 from '../../resources/IMG_4029.jpg';

export default class MainImage extends React.PureComponent { // eslint-disable-line
    render() {
        return (
            <Carousel showThumbs={false} showIndicators={false} showStatus={false} autoPlay transitionTime={800} interval={7500} stopOnHover={false} infiniteLoop>
                <StyledImageContainer align="center">
                    <img src={MainImg1} style={{ width: '100%' }} alt="" />
                </StyledImageContainer>
                <StyledImageContainer align="center">
                    <img src={MainImg2} style={{ width: '100%' }} alt="" />
                </StyledImageContainer>
                <StyledImageContainer align="center">
                    <img src={MainImg3} style={{ width: '100%' }} alt="" />
                </StyledImageContainer>
                <StyledImageContainer align="flex-start">
                    <img src={MainImg4} style={{ width: '100%' }} alt="" />
                </StyledImageContainer>
                <StyledImageContainer align="flex-start">
                    <img src={MainImg5} style={{ width: '100%' }} alt="" />
                </StyledImageContainer>
            </Carousel>
        );
    }
}
