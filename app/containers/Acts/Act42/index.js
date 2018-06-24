import React from 'react';
import { Link } from 'react-router-dom';

import SubTitle from 'components/SubTitle';
import Text from 'components/Text';

import Banner from 'components/Banner';

import { StyledPageWrapper, StyledPageContainer } from 'components/PageContainers';
import { Bradcrumps, BradcrumpsLink, BradcrumpsArrow } from 'components/Bradcrums';

export default function Act42() {
    return (
        <StyledPageWrapper>
            <Banner label="Статья 42. Оформление расторжения брака судом" />
            <Bradcrumps>
                <Link to="/"><BradcrumpsLink>Home</BradcrumpsLink></Link>
                <BradcrumpsArrow>></BradcrumpsArrow>
                <BradcrumpsLink>Статья 42. Оформление расторжения брака судом</BradcrumpsLink>
            </Bradcrumps>

            <StyledPageContainer>
                <SubTitle>Статья 42. Оформление расторжения брака судом(в ред. Закона Республики Беларусь от 07.01.2012 N 342-З)


                </SubTitle>
                <Text>Части первая - вторая статьи 42 исключены с 1 января 2008 года. - Закон Республики Беларусь от 26.12.2007 N 301-З.

                </Text>
                <Text>При выдаче копии решения суда о расторжении брака в документах, удостоверяющих личность супругов, судом производится отметка о расторжении брака.
                (в ред. Закона Республики Беларусь от 15.07.2009 N 43-З)


                </Text>
                <Text>После вступления решения суда о расторжении брака в законную силу суд в десятидневный срок направляет копию решения суда в орган, регистрирующий акты гражданского состояния, по месту регистрации брака для производства отметки в записи акта о заключении брака.
                (в ред. Законов Республики Беларусь от 20.07.2006 N 164-З, от 05.01.2008 N 315-З)

                </Text>
            </StyledPageContainer>
        </StyledPageWrapper>
    );
}
