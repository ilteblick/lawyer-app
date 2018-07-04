import React from 'react';
import { Link } from 'react-router-dom';

import SubTitle from 'components/SubTitle';
import Text from 'components/Text';

import Banner from 'components/Banner';

import { StyledPageWrapper, StyledPageContainer } from 'components/PageContainers';
import { Bradcrumps, BradcrumpsLink, BradcrumpsArrow } from 'components/Bradcrums';

export default function LawersGoals() {
    return (
        <StyledPageWrapper>
            <Banner label="Основные задачи адвокатуры" />
            <Bradcrumps>
                <Link to="/"><BradcrumpsLink>Главная</BradcrumpsLink></Link>
                <BradcrumpsArrow>></BradcrumpsArrow>
                <BradcrumpsLink>Основные задачи адвокатуры</BradcrumpsLink>
            </Bradcrumps>

            <div style={{ display: 'flex' }}>
                <StyledPageContainer>
                    <SubTitle>Основные задачи адвокатуры</SubTitle>
                    <ul>
                        <li><Text>оказание на профессиональной основе юридической помощи клиентам в целях осуществления и защиты их прав, свобод и интересов;</Text></li>
                        <li><Text>участие в правовом воспитании граждан (ст.5 Закона об адвокатуре и адвокатской деятельности в Республике Беларусь от 30.12.2011 № 334-З).</Text></li>
                    </ul>
                </StyledPageContainer>
            </div>
        </StyledPageWrapper>
    );
}
