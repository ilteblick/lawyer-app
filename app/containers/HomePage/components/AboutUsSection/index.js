import React from 'react';
import { Link } from 'react-router-dom';

import Title from 'components/Title';
import SubTitle from 'components/SubTitle';
import Text from 'components/Text';

import {
    StyledAboutUsContainer,
    StyledDescriptionContainser,
    StyledMenuContainer,
    StyledLink,
} from './styled';

export default function AboutUsSection() {
    return (
        <StyledAboutUsContainer>
            <StyledDescriptionContainser>
                <Title>Pasadena Family Law Attorneys</Title>
                <SubTitle>The Law Offices of Donald P. Schweitzer</SubTitle>
                <Text>Located in the heart of Pasadena, the Law Offices of Donald P. Schweitzer is one of the most respected legal firms in greater Los Angeles. We offer complete family law services, providing unsurpassed representation in the areas of divorce, domestic violence, and estate planning, which means we can handle any eventuality that may arise in your case—protecting you and your financial future. Supported by today's most advanced legal resources, our responsive, dynamic team gives clients a favorable edge. Our full-service approach lets us provide you with expert advice while shaping a broader strategy that results in the best possible outcome.</Text>
                <SubTitle>Hire a Skilled Family Lawyer in Pasadena, CA Today!</SubTitle>
                <Text>Call our offices to set up a consultation with a friendly member of our team. We have a decade of experience and can achieve a satisfactory outcome for your case. Our team consists of young, dynamic attorneys who are also strong litigators with thousands of hours of courtroom experience. Our firm is AV® Rated by Martindale-Hubbell® for exceptional ethics and skill, and we have been featured in the 2009-15 issues of Pasadena Magazine’s Top Attorneys, proving that our clients and peers recognize us for excellent service and the ability to achieve results. As we are effective advocates who put your best interests first, the Law Offices of Donald P. Schweitzer can help you move forward with confidence.</Text>
            </StyledDescriptionContainser>
            <StyledMenuContainer>
                <Link to="/"><StyledLink>Link1</StyledLink></Link>
                <Link to="/"><StyledLink>Link2</StyledLink></Link>
                <Link to="/"><StyledLink>Link3</StyledLink></Link>
                <Link to="/"><StyledLink>Link4</StyledLink></Link>
            </StyledMenuContainer>
        </StyledAboutUsContainer>
    );
}
