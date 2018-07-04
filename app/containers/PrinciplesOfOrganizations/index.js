import React from 'react';
import { Link } from 'react-router-dom';

import SubTitle from 'components/SubTitle';
import Text from 'components/Text';

import Banner from 'components/Banner';

import { StyledPageWrapper, StyledPageContainer } from 'components/PageContainers';
import { Bradcrumps, BradcrumpsLink, BradcrumpsArrow } from 'components/Bradcrums';

export default function PrinciplesOfOrganization() {
    return (
        <StyledPageWrapper>
            <Banner label="Принципы организации адвокатуры и адвокатской деятельности" />
            <Bradcrumps>
                <Link to="/"><BradcrumpsLink>Главная</BradcrumpsLink></Link>
                <BradcrumpsArrow>></BradcrumpsArrow>
                <BradcrumpsLink>Принципы организации адвокатуры и адвокатской деятельности</BradcrumpsLink>
            </Bradcrumps>

            <div style={{ display: 'flex' }}>
                <StyledPageContainer>
                    <SubTitle>Принципы организации адвокатуры и адвокатской деятельности</SubTitle>
                    <Text>Статьей 4 Закона об адвокатуре и адвокатской деятельности в Республике Беларусь от 30.12.2011 № 334-З определены принципы организации адвокатуры и адвокатской деятельности. Так, организация адвокатуры и адвокатской деятельности основывается на принципах:</Text>
                    <ul>
                        <li><Text>обеспечения гарантированного Конституцией Республики Беларусь права на юридическую помощь;</Text></li>
                        <li><Text>законности;</Text></li>
                        <li><Text>доступности юридической помощи;</Text></li>
                        <li><Text>независимости адвокатов при осуществлении своей профессиональной деятельности;</Text></li>
                        <li><Text>адвокатской тайны;</Text></li>
                        <li><Text>использования всех не запрещенных законодательством средств и способов защиты прав, свобод и интересов клиента;</Text></li>
                        <li><Text>обеспечения качества юридической помощи;</Text></li>
                        <li><Text>недопустимости вмешательства в профессиональную деятельность адвокатов со стороны органов, ведущих уголовный процесс, других государственных органов, иных организаций и должностных лиц;</Text></li>
                        <li><Text>соблюдения Правил профессиональной этики адвоката;</Text></li>
                        <li><Text>самоуправления и самофинансирования.</Text></li>
                    </ul>

                </StyledPageContainer>
            </div>
        </StyledPageWrapper>
    );
}
