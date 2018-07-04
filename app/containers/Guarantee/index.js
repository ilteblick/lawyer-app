import React from 'react';
import { Link } from 'react-router-dom';

import SubTitle from 'components/SubTitle';
import Text from 'components/Text';

import Banner from 'components/Banner';

import { StyledPageWrapper, StyledPageContainer } from 'components/PageContainers';
import { Bradcrumps, BradcrumpsLink, BradcrumpsArrow } from 'components/Bradcrums';

export default function Guarantee() {
    return (
        <StyledPageWrapper>
            <Banner label="Гарантия адвокатской деятельности " />
            <Bradcrumps>
                <Link to="/"><BradcrumpsLink>Главная</BradcrumpsLink></Link>
                <BradcrumpsArrow>></BradcrumpsArrow>
                <BradcrumpsLink>Гарантия адвокатской деятельности </BradcrumpsLink>
            </Bradcrumps>

            <div style={{ display: 'flex' }}>
                <StyledPageContainer>
                    <SubTitle>Гарантия адвокатской деятельности </SubTitle>
                    <Text>В соответствии со ст.16 Закона об адвокатуре и адвокатской деятельности в Республике Беларусь от 30.12.2011 № 334-З Адвокат в своей деятельности независим и подчиняется только закону.</Text>
                    <Text>Запрещаются вмешательство в профессиональную деятельность адвоката, осуществляемую в соответствии с законодательством, либо препятствование этой деятельности каким бы то ни было образом, а также требование от адвоката сообщения каких-либо сведений, составляющих адвокатскую тайну, либо требование таких сведений от стажеров и помощников адвоката.</Text>
                    <Text> Информация, составляющая адвокатскую тайну, не может быть получена от адвоката, а также стажеров и помощников адвоката и использована в качестве доказательств в уголовном, гражданском, хозяйственном и административном процессах.</Text>
                    <Text>Адвокат, стажеры и помощники адвоката не могут быть допрошены в качестве свидетелей об обстоятельствах, составляющих адвокатскую тайну, а государственные органы и иные организации не вправе истребовать, изымать и иным образом получать у адвоката, стажера и помощника адвоката информацию, составляющую адвокатскую тайну.</Text>
                    <Text>Запрещаются препятствование адвокату в предоставлении встреч наедине с его подзащитным в условиях, обеспечивающих конфиденциальность таких встреч, а также ограничение их количества и продолжительности.</Text>
                </StyledPageContainer>
            </div>
        </StyledPageWrapper>
    );
}
