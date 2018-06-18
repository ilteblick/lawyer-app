import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { StyledContainer, StyledTitle, StyledTextContainer, StyledText } from './styled';


export default function FeedBackSection() {
    return (
        <StyledContainer>
            <StyledTitle>
                Hear What Our Clients Have To Say
            </StyledTitle>
            <Carousel showThumbs={false} showIndicators={false} showStatus={false} autoPlay>
                <StyledTextContainer>
                    <StyledText>I found the various members of the firm prompt about returning calls, and pro-active about reaching out to me when they had a question, an idea, or some news. I got quick and efficient responses to my questions most of the time, and I found the entire staff very easy to work with and willing to accommodate last minute or urgent items.</StyledText>
                </StyledTextContainer>
                <StyledTextContainer>
                    <StyledText>This firm is outstanding!! They give support while always making sure that you and your loved ones are being protected and informed of all the possible outcomes during your case.</StyledText>
                </StyledTextContainer>
            </Carousel>
        </StyledContainer>
    );
}
