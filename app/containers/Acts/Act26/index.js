import React from 'react';
import { Link } from 'react-router-dom';

import SubTitle from 'components/SubTitle';
import Text from 'components/Text';

import Banner from 'components/Banner';

import { StyledPageWrapper, StyledPageContainer } from 'components/PageContainers';
import { Bradcrumps, BradcrumpsLink, BradcrumpsArrow } from 'components/Bradcrums';

export default function Act26() {
    return (
        <StyledPageWrapper>
            <Banner label="Статья 26. Собственность супругов" />
            <Bradcrumps>
                <Link to="/"><BradcrumpsLink>Home</BradcrumpsLink></Link>
                <BradcrumpsArrow>></BradcrumpsArrow>
                <BradcrumpsLink>Статья 26. Собственность супругов</BradcrumpsLink>
            </Bradcrumps>

            <StyledPageContainer>
                <SubTitle>Статья 26. Собственность супругов
                </SubTitle>
                <Text>Имущество, принадлежавшее супругам до вступления в брак, а также полученное ими в период брака в дар или в порядке наследования, является собственностью каждого из них.
                </Text>
                <Text>Вещи индивидуального пользования (одежда, обувь и т.д.), за исключением драгоценностей и других предметов роскоши, хотя и приобретенные в период брака за счет общих средств супругов, признаются имуществом того супруга, который ими пользовался.
                </Text>
                <Text>Имущество каждого из супругов может быть признано их общей совместной собственностью, если будет установлено, что в период брака за счет общего имущества супругов или личного имущества другого супруга были произведены вложения, значительно увеличивающие стоимость этого имущества (капитальный ремонт, реконструкция и т.п.), если иное не предусмотрено Брачным договором.
                (часть третья статьи 26 в ред. Закона Республики Беларусь от 07.01.2012 N 342-З)

                </Text>
            </StyledPageContainer>
        </StyledPageWrapper>
    );
}
