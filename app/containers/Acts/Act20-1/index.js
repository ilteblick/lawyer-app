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
            <Banner label="Статья 20-1. Равенство супругов в семейных отношениях" />
            <Bradcrumps>
                <Link to="/"><BradcrumpsLink>Home</BradcrumpsLink></Link>
                <BradcrumpsArrow>></BradcrumpsArrow>
                <BradcrumpsLink>Статья 20-1. Равенство супругов в семейных отношениях</BradcrumpsLink>
            </Bradcrumps>

            <StyledPageContainer>
                <SubTitle>Статья 20-1. Равенство супругов в семейных отношениях
                (введена Законом Республики Беларусь от 20.07.2006 N 164-З)
                </SubTitle>
                <Text>Все вопросы брачных и семейных отношений супруги решают совместно, по обоюдному согласию и на основе равенства.
                </Text>
                <Text>Супруги обязаны строить свои отношения в семье на основе взаимоуважения и взаимопомощи, справедливого распределения семейных обязанностей, содействия в реализации каждым из них права на материнство (отцовство), физическое и духовное развитие, получение образования, проявление своих способностей, труд и отдых.
                </Text>
                <Text>Супруги вправе самостоятельно решать вопросы, касающиеся их личных интересов, если иное не оговорено в Брачном договоре.
                </Text>
            </StyledPageContainer>
        </StyledPageWrapper>
    );
}
