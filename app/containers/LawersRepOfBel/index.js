import React from 'react';
import { Link } from 'react-router-dom';

import SubTitle from 'components/SubTitle';
import Text from 'components/Text';

import Banner from 'components/Banner';

import { StyledPageWrapper, StyledPageContainer } from 'components/PageContainers';
import { Bradcrumps, BradcrumpsLink, BradcrumpsArrow } from 'components/Bradcrums';

export default function History() {
    return (
        <StyledPageWrapper>
            <Banner label="Адвокаты в Республике Беларусь" />
            <Bradcrumps>
                <Link to="/"><BradcrumpsLink>Главная</BradcrumpsLink></Link>
                <BradcrumpsArrow>></BradcrumpsArrow>
                <BradcrumpsLink>Адвокаты в Республике Беларусь</BradcrumpsLink>
            </Bradcrumps>

            <div style={{ display: 'flex' }}>
                <StyledPageContainer>
                    <SubTitle>Адвокаты в Республике Беларусь</SubTitle>
                    <Text>«Согласно ст. 7 Закона об адвокатуре и адвокатской деятельности в Республике Беларусь от 30.12.2011 № 334-З Адвокатом в Республике Беларусь может быть физическое лицо, являющееся гражданином Республики Беларусь, имеющее высшее юридическое образование и стаж работы по специальности не менее трех лет, порядок исчисления которого устанавливается Советом Министров Республики Беларусь или уполномоченным им органом, прошедшее в установленных настоящим Законом случаях стажировку и сдавшее квалификационный экзамен, получившее специальное разрешение (лицензию) на осуществление адвокатской деятельности (далее, если не предусмотрено иное, - лицензия) и являющееся членом территориальной коллегии адвокатов.</Text>
                </StyledPageContainer>
            </div>
        </StyledPageWrapper>
    );
}
