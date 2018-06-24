import React from 'react';
import { Link } from 'react-router-dom';

import SubTitle from 'components/SubTitle';
import Text from 'components/Text';

import Banner from 'components/Banner';

import { StyledPageWrapper, StyledPageContainer } from 'components/PageContainers';
import { Bradcrumps, BradcrumpsLink, BradcrumpsArrow } from 'components/Bradcrums';

export default function Act41() {
    return (
        <StyledPageWrapper>
            <Banner label="Статья 41. Раздел общей совместной собственности супругов" />
            <Bradcrumps>
                <Link to="/"><BradcrumpsLink>Home</BradcrumpsLink></Link>
                <BradcrumpsArrow>></BradcrumpsArrow>
                <BradcrumpsLink>Статья 41. Раздел общей совместной собственности супругов</BradcrumpsLink>
            </Bradcrumps>

            <StyledPageContainer>
                <SubTitle>Статья 41. Раздел общей совместной собственности супругов

                </SubTitle>
                <Text>По заявлению супругов или одного из них суд обязан при вынесении решения о расторжении брака произвести в соответствии со статьями 23 - 26 настоящего Кодекса раздел имущества, являющегося общей совместной собственностью супругов, если иное не предусмотрено Брачным договором.

                </Text>
                <Text>Если такой раздел затрагивает права третьих лиц, спор о разделе имущества не может разрешаться одновременно с делом о расторжении брака.

                </Text>
                <Text>Если после фактического прекращения семейных отношений и ведения общего хозяйства супруги совместно имущество не приобретали, суд производит раздел лишь того имущества, которое являлось их общей совместной собственностью до прекращения ведения общего хозяйства. При изменении цен на имущество его стоимость определяется исходя из цен, действующих на день вынесения решения суда.
                </Text>
            </StyledPageContainer>
        </StyledPageWrapper>
    );
}
