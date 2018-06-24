import React from 'react';
import { Link } from 'react-router-dom';

import Title from 'components/Title';

import Banner from 'components/Banner';
import { Header, MenuLink, Container } from 'components/LeftMenu';

import { StyledPageWrapper, StyledPageContainer } from 'components/PageContainers';
import { Bradcrumps, BradcrumpsLink, BradcrumpsArrow } from 'components/Bradcrums';

import Img from './IMG_3886.jpg';
import { StyledA } from './styled';

export default function Attorneys() {
    return (
        <StyledPageWrapper>
            <Banner label="Адвокаты" />
            <Bradcrumps>
                <Link to="/"><BradcrumpsLink>Home</BradcrumpsLink></Link>
                <BradcrumpsArrow>></BradcrumpsArrow>
                <BradcrumpsLink>Адвокаты</BradcrumpsLink>
            </Bradcrumps>

            <div style={{ display: 'flex' }}>
                <Container>
                    <Header>Законодательное регулирование</Header>
                    <MenuLink>Адвокаты в Республике Беларусь</MenuLink>
                    <MenuLink>Гарантия адвокатской деятельности </MenuLink>
                    <MenuLink>Организационные формы деятельности адвокатов</MenuLink>
                </Container>
                <StyledPageContainer>
                    <Title>Адвокаты</Title>
                    <img style={{ width: '100%' }} alt="" src={Img} />
                    <Link to="/attorneys/AlexeyPrybylski"><StyledA>Адвокат Алексей Прибыльский</StyledA></Link>
                    <Link to="/attorneys/TatyanaGumenuk"><StyledA>Адвокат Татьяна Гуменюк</StyledA></Link>
                </StyledPageContainer>
            </div>
        </StyledPageWrapper>
    );
}
