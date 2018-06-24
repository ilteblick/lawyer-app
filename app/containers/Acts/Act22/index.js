import React from 'react';
import { Link } from 'react-router-dom';

import SubTitle from 'components/SubTitle';
import Text from 'components/Text';

import Banner from 'components/Banner';

import { StyledPageWrapper, StyledPageContainer } from 'components/PageContainers';
import { Bradcrumps, BradcrumpsLink, BradcrumpsArrow } from 'components/Bradcrums';

export default function Act22() {
    return (
        <StyledPageWrapper>
            <Banner label="Статья 22. Право супругов на свободный выбор занятий, профессии и места жительства" />
            <Bradcrumps>
                <Link to="/"><BradcrumpsLink>Home</BradcrumpsLink></Link>
                <BradcrumpsArrow>></BradcrumpsArrow>
                <BradcrumpsLink>Статья 22. Право супругов на свободный выбор занятий, профессии и места жительства</BradcrumpsLink>
            </Bradcrumps>

            <StyledPageContainer>
                <SubTitle>Статья 22. Право супругов на свободный выбор занятий, профессии и места жительства
                </SubTitle>
                <Text>Супруги свободны в выборе занятий, профессии и места жительства.
                </Text>
            </StyledPageContainer>
        </StyledPageWrapper>
    );
}
