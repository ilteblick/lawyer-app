import React from 'react';
import { Link } from 'react-router-dom';

import SubTitle from 'components/SubTitle';
import Text from 'components/Text';

import Banner from 'components/Banner';

import { StyledPageWrapper, StyledPageContainer } from 'components/PageContainers';
import { Bradcrumps, BradcrumpsLink, BradcrumpsArrow } from 'components/Bradcrums';

export default function Act12() {
    return (
        <StyledPageWrapper>
            <Banner label="Статья 12. Брак" />
            <Bradcrumps>
                <Link to="/"><BradcrumpsLink>Home</BradcrumpsLink></Link>
                <BradcrumpsArrow>></BradcrumpsArrow>
                <BradcrumpsLink>Статья 12. Брак</BradcrumpsLink>
            </Bradcrumps>

            <StyledPageContainer>
                <SubTitle>Статья 12. Брак(в ред. Закона Республики Беларусь от 07.01.2012 N 342-З)</SubTitle>
                <Text>Брак - это добровольный союз мужчины и женщины, который заключается на условиях, предусмотренных настоящим Кодексом, направлен на создание семьи и порождает для сторон взаимные права и обязанности.</Text>
            </StyledPageContainer>
        </StyledPageWrapper>
    );
}
