import React from 'react';
import { Link } from 'react-router-dom';

import SubTitle from 'components/SubTitle';
import Text from 'components/Text';

import Banner from 'components/Banner';

import { StyledPageWrapper, StyledPageContainer } from 'components/PageContainers';
import { Bradcrumps, BradcrumpsLink, BradcrumpsArrow } from 'components/Bradcrums';

export default function Act35_1() {
    return (
        <StyledPageWrapper>
            <Banner label="Статья 35-1. Расторжение брака органом, регистрирующим акты гражданского состояния" />
            <Bradcrumps>
                <Link to="/"><BradcrumpsLink>Home</BradcrumpsLink></Link>
                <BradcrumpsArrow>></BradcrumpsArrow>
                <BradcrumpsLink>Статья 35-1. Расторжение брака органом, регистрирующим акты гражданского состояния</BradcrumpsLink>
            </Bradcrumps>

            <StyledPageContainer>
                <SubTitle>Статья 35-1. Расторжение брака органом, регистрирующим акты гражданского состояния(введена Законом Республики Беларусь от 07.01.2012 N 342-З)
                </SubTitle>
                <Text>Расторжение брака органом, регистрирующим акты гражданского состояния, производится по взаимному согласию супругов, не имеющих общих несовершеннолетних детей и спора об имуществе. При обращении в орган, регистрирующий акты гражданского состояния, супруги должны подтвердить, что у них не имеется общих несовершеннолетних детей и спора об имуществе.
                </Text>
                <Text>Расторжение брака производится органом, регистрирующим акты гражданского состояния, по истечении одного месяца со дня подачи совместного заявления о расторжении брака.
                </Text>
            </StyledPageContainer>
        </StyledPageWrapper>
    );
}
