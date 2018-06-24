import React from 'react';
import { Link } from 'react-router-dom';

import SubTitle from 'components/SubTitle';
import Text from 'components/Text';

import Banner from 'components/Banner';

import { StyledPageWrapper, StyledPageContainer } from 'components/PageContainers';
import { Bradcrumps, BradcrumpsLink, BradcrumpsArrow } from 'components/Bradcrums';

export default function Act15() {
    return (
        <StyledPageWrapper>
            <Banner label="Статья 15. Заключение брака" />
            <Bradcrumps>
                <Link to="/"><BradcrumpsLink>Home</BradcrumpsLink></Link>
                <BradcrumpsArrow>></BradcrumpsArrow>
                <BradcrumpsLink>Статья 15. Заключение брака</BradcrumpsLink>
            </Bradcrumps>

            <StyledPageContainer>
                <SubTitle>Статья 15. Заключение брака</SubTitle>
                <Text>Брак заключается в органах, регистрирующих акты гражданского состояния.
                (в ред. Закона Республики Беларусь от 05.01.2008 N 315-З)</Text>
                <Text>Часть исключена. - Закон Республики Беларусь от 07.01.2012 N 342-З.</Text>
                <Text>Часть исключена. - Закон Республики Беларусь от 20.07.2006 N 164-З.
                </Text>
            </StyledPageContainer>
        </StyledPageWrapper>
    );
}
