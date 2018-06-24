import React from 'react';
import { Link } from 'react-router-dom';

import SubTitle from 'components/SubTitle';
import Text from 'components/Text';

import Banner from 'components/Banner';

import { StyledPageWrapper, StyledPageContainer } from 'components/PageContainers';
import { Bradcrumps, BradcrumpsLink, BradcrumpsArrow } from 'components/Bradcrums';

export default function Act23() {
    return (
        <StyledPageWrapper>
            <Banner label="Статья 23. Общая совместная собственность супругов" />
            <Bradcrumps>
                <Link to="/"><BradcrumpsLink>Home</BradcrumpsLink></Link>
                <BradcrumpsArrow>></BradcrumpsArrow>
                <BradcrumpsLink>Статья 23. Общая совместная собственность супругов</BradcrumpsLink>
            </Bradcrumps>

            <StyledPageContainer>
                <SubTitle>Статья 23. Общая совместная собственность супругов
                </SubTitle>
                <Text>Имущество, нажитое супругами в период брака, независимо от того, на кого из супругов оно приобретено либо на кого или кем из супругов внесены денежные средства, является их общей совместной собственностью. Супруги имеют равные права владения, пользования и распоряжения этим имуществом, если иное не предусмотрено Брачным договором.
                </Text>
                <Text>Супруги пользуются равными правами на совместно нажитое имущество и в том случае, если один из них в период брака был занят ведением домашнего хозяйства, уходом за детьми или по другим уважительным причинам не имел самостоятельного заработка (дохода), если иное не предусмотрено Брачным договором.
                </Text>
            </StyledPageContainer>
        </StyledPageWrapper>
    );
}
