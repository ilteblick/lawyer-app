import React from 'react';
import { Link } from 'react-router-dom';

import SubTitle from 'components/SubTitle';
import Text from 'components/Text';

import Banner from 'components/Banner';

import { StyledPageWrapper, StyledPageContainer } from 'components/PageContainers';
import { Bradcrumps, BradcrumpsLink, BradcrumpsArrow } from 'components/Bradcrums';

export default function Act34() {
    return (
        <StyledPageWrapper>
            <Banner label="Статья 34. Прекращение брака" />
            <Bradcrumps>
                <Link to="/"><BradcrumpsLink>Home</BradcrumpsLink></Link>
                <BradcrumpsArrow>></BradcrumpsArrow>
                <BradcrumpsLink>Статья 34. Прекращение брака</BradcrumpsLink>
            </Bradcrumps>

            <StyledPageContainer>
                <SubTitle>Статья 34. Прекращение брака(в ред. Закона Республики Беларусь от 07.01.2012 N 342-З)
                </SubTitle>
                <Text>Брак прекращается вследствие смерти или объявления в судебном порядке умершим одного из супругов, а при жизни супругов - вследствие расторжения брака.
                </Text>
                <Text>По совместному заявлению обоих супругов брак может быть расторгнут органом, регистрирующим акты гражданского состояния, в соответствии со статьей 35-1 настоящего Кодекса. В этом случае брак считается прекращенным со дня регистрации расторжения брака.

                </Text>
                <Text>По заявлению одного из супругов брак может быть расторгнут судом в соответствии со статьями 36 и 37 настоящего Кодекса. В этом случае брак считается прекращенным со дня вступления в законную силу решения суда о расторжении брака.
                </Text>
                <Text>Браки, расторгнутые по решениям судов, вступившим в законную силу до 1 сентября 1999 года, считаются прекращенными со дня регистрации их расторжения.
                </Text>
            </StyledPageContainer>
        </StyledPageWrapper>
    );
}
