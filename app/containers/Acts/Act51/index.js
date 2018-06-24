import React from 'react';
import { Link } from 'react-router-dom';

import SubTitle from 'components/SubTitle';
import Text from 'components/Text';

import Banner from 'components/Banner';

import { StyledPageWrapper, StyledPageContainer } from 'components/PageContainers';
import { Bradcrumps, BradcrumpsLink, BradcrumpsArrow } from 'components/Bradcrums';

export default function Act51() {
    return (
        <StyledPageWrapper>
            <Banner label="Статья 51. Установление происхождения ребенка" />
            <Bradcrumps>
                <Link to="/"><BradcrumpsLink>Home</BradcrumpsLink></Link>
                <BradcrumpsArrow>></BradcrumpsArrow>
                <BradcrumpsLink>Статья 51. Установление происхождения ребенка
                </BradcrumpsLink>
            </Bradcrumps>

            <StyledPageContainer>
                <SubTitle>Статья 51. Установление происхождения ребенка
                </SubTitle>
                <Text>Происхождение ребенка от матери устанавливается на основании факта рождения, удостоверенного медицинской справкой о рождении, если иное не предусмотрено статьей 52 настоящего Кодекса.
                (в ред. Закона Республики Беларусь от 07.01.2012 N 342-З)
                </Text>
                <Text>При отсутствии медицинской справки о рождении происхождение ребенка от матери может быть установлено на основании решения суда об установлении факта рождения или решения суда об установлении материнства.
                (в ред. Закона Республики Беларусь от 07.01.2012 N 342-З)

                </Text>
                <Text>Происхождение ребенка от отца, состоящего в браке с матерью ребенка на момент зачатия и (или) рождения ребенка, устанавливается на основании записи акта о заключении брака.
                </Text>
                <Text>Отцом ребенка, рожденного в браке, является муж матери ребенка. Отцом ребенка, рожденного в течение десяти месяцев со дня прекращения брака или признания его недействительным, признается бывший муж матери ребенка.
                </Text>
                <Text>Происхождение ребенка от отца, не состоящего в браке с матерью ребенка, устанавливается на основании совместного заявления отца и матери ребенка о регистрации установления отцовства, поданного в органы, регистрирующие акты гражданского состояния, или решения суда об установлении отцовства.
                (в ред. Закона Республики Беларусь от 05.01.2008 N 315-З)

                </Text>

                <Text>Происхождение ребенка от отца, не состоящего в браке с матерью ребенка, если мать ребенка состоит в браке с другим лицом, устанавливается на основании совместного заявления отца и матери ребенка о регистрации установления отцовства, заявления матери ребенка, подтверждающего, что ее муж не является отцом ребенка, и заявления мужа матери ребенка, подтверждающего, что он не является отцом ребенка, поданных в органы, регистрирующие акты гражданского состояния, или решения суда об установлении отцовства.
                (в ред. Закона Республики Беларусь от 05.01.2008 N 315-З)


                </Text>
            </StyledPageContainer>
        </StyledPageWrapper>
    );
}