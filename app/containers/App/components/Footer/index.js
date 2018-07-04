import React from 'react';
import { StyledContainer, StyledInfoText, StyledPhoneNumber, StyledFooterLinks, StyledImg } from './styled';

import Footer1 from './resources/footer1president.png';
import Footer2 from './resources/footer-2-pravoby.png';
import Footer3 from './resources/footer-3-sovmin.png';
import Footer4 from './resources/footer-4-verhsud.png';
import Footer5 from './resources/footer-5-mingorispolcom.png';
import Footer6 from './resources/footer-6-usticiaBel.png';

export default function Footer() {
    return (
        <div>
            <StyledContainer>
                <StyledInfoText>Свяжитесь с нами сегодня.</StyledInfoText>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <StyledPhoneNumber>+375 29 6263030</StyledPhoneNumber>
                    <StyledPhoneNumber>+375 29 6563139</StyledPhoneNumber>
                </div>
            </StyledContainer>
            <StyledFooterLinks>
                <div>
                    <a href="http://president.gov.by" target="_blank"><StyledImg src={Footer1} /></a>
                    <a href="http://pravo.by" target="_blank"><StyledImg src={Footer2} /></a>
                    <a href="http://www.government.by/" target="_blank"><StyledImg src={Footer3} /></a>
                </div>
                <div>
                    <a href="http://www.court.by/" target="_blank"><StyledImg src={Footer4} /></a>
                    <a href="http://minsk.gov.by/" target="_blank"><StyledImg src={Footer5} /></a>
                    <a href="http://minjust.gov.by/" target="_blank"><StyledImg src={Footer6} /></a>
                </div>
            </StyledFooterLinks>
        </div>
    );
}
