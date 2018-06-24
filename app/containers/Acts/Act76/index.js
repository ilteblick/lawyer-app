import React from 'react';
import { Link } from 'react-router-dom';

import SubTitle from 'components/SubTitle';
import Text from 'components/Text';

import Banner from 'components/Banner';

import { StyledPageWrapper, StyledPageContainer } from 'components/PageContainers';
import { Bradcrumps, BradcrumpsLink, BradcrumpsArrow } from 'components/Bradcrums';

export default function Act76() {
    return (
        <StyledPageWrapper>
            <Banner label="Статья 76. Равенство прав и обязанностей обоих родителей" />
            <Bradcrumps>
                <Link to="/"><BradcrumpsLink>Home</BradcrumpsLink></Link>
                <BradcrumpsArrow>></BradcrumpsArrow>
                <BradcrumpsLink>Статья 76. Равенство прав и обязанностей обоих родителей
                </BradcrumpsLink>
            </Bradcrumps>

            <StyledPageContainer>
                <SubTitle>Статья 76. Равенство прав и обязанностей обоих родителей
                </SubTitle>
                <Text>Отец и мать имеют равные права и обязанности в отношении своих детей.
                </Text>
                <Text>Родители пользуются равными правами и несут равные обязанности в отношении своих детей и в случае расторжения брака между ними, если иное не предусмотрено в Соглашении о детях.
                </Text>
                <Text>В случае установления отцовства в судебном порядке отец приобретает права и обязанности с момента вступления решения суда в законную силу, за исключением обязанности по содержанию, которая может быть возложена с момента предъявления иска об установлении отцовства.
                </Text>
                <Text>Если родители ребенка не состоят в браке между собой, суд может поручить осуществление попечения над ребенком одному из них, ограничив права и обязанности другого в отношении ребенка.
                </Text>
            </StyledPageContainer>
        </StyledPageWrapper>
    );
}
