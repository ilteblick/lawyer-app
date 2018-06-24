import React from 'react';
import { Link } from 'react-router-dom';

import SubTitle from 'components/SubTitle';
import Text from 'components/Text';

import Banner from 'components/Banner';

import { StyledPageWrapper, StyledPageContainer } from 'components/PageContainers';
import { Bradcrumps, BradcrumpsLink, BradcrumpsArrow } from 'components/Bradcrums';

export default function Act50() {
    return (
        <StyledPageWrapper>
            <Banner label="Статья 50. Основания возникновения прав и обязанностей родителей и детей" />
            <Bradcrumps>
                <Link to="/"><BradcrumpsLink>Home</BradcrumpsLink></Link>
                <BradcrumpsArrow>></BradcrumpsArrow>
                <BradcrumpsLink>Статья 50. Основания возникновения прав и обязанностей родителей и детей</BradcrumpsLink>
            </Bradcrumps>

            <StyledPageContainer>
                <SubTitle>Статья 50. Основания возникновения прав и обязанностей родителей и детей
                </SubTitle>
                <Text>Взаимные права и обязанности родителей и детей основываются на происхождении детей, удостоверенном в установленном порядке.

                </Text>
                <Text>Взаимные права и обязанности между матерью и ребенком возникают с момента рождения ребенка независимо от того, рожден ребенок в браке или вне брака.
                </Text>
                <Text>Взаимные права и обязанности между отцом и ребенком возникают с момента рождения ребенка, если отец и мать ребенка состоят в браке или ребенок рожден в течение десяти месяцев со дня прекращения брака или признания его недействительным.
                </Text>
                <Text>Взаимные права и обязанности между отцом и ребенком, если отец и мать ребенка не состоят в браке, возникают с момента внесения в установленном порядке сведений о нем как отце в запись акта о рождении ребенка либо с момента вступления в законную силу решения суда об установлении отцовства, если иное не предусмотрено настоящим Кодексом.
                </Text>
                <Text>Дети, родители которых не состоят в браке, имеют те же права и обязанности по отношению к родителям и их родственникам, что и дети лиц, состоящих в браке между собой.
                </Text>
            </StyledPageContainer>
        </StyledPageWrapper>
    );
}
