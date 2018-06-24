import React from 'react';
import { Link } from 'react-router-dom';

import SubTitle from 'components/SubTitle';
import Text from 'components/Text';

import Banner from 'components/Banner';

import { StyledPageWrapper, StyledPageContainer } from 'components/PageContainers';
import { Bradcrumps, BradcrumpsLink, BradcrumpsArrow } from 'components/Bradcrums';

export default function Act20() {
    return (
        <StyledPageWrapper>
            <Banner label="Статья 20. Возникновение прав и обязанностей супругов" />
            <Bradcrumps>
                <Link to="/"><BradcrumpsLink>Home</BradcrumpsLink></Link>
                <BradcrumpsArrow>></BradcrumpsArrow>
                <BradcrumpsLink>Статья 20. Возникновение прав и обязанностей супругов</BradcrumpsLink>
            </Bradcrumps>

            <StyledPageContainer>
                <SubTitle>Статья 20. Возникновение прав и обязанностей супругов</SubTitle>
                <Text>Права и обязанности супругов возникают со дня регистрации заключения брака органами, регистрирующими акты гражданского состояния.
                (в ред. Закона Республики Беларусь от 05.01.2008 N 315-З)
                </Text>
                <Text>Части вторая - четвертая статьи 20 исключены. - Закон Республики Беларусь от 20.07.2006 N 164-З)
                </Text>
            </StyledPageContainer>
        </StyledPageWrapper>
    );
}
