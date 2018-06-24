import React from 'react';
import { Link } from 'react-router-dom';

import SubTitle from 'components/SubTitle';
import Text from 'components/Text';

import Banner from 'components/Banner';

import { StyledPageWrapper, StyledPageContainer } from 'components/PageContainers';
import { Bradcrumps, BradcrumpsLink, BradcrumpsArrow } from 'components/Bradcrums';

export default function Act29() {
    return (
        <StyledPageWrapper>
            <Banner label="Статья 29. Обязанности супругов по взаимному содержанию" />
            <Bradcrumps>
                <Link to="/"><BradcrumpsLink>Home</BradcrumpsLink></Link>
                <BradcrumpsArrow>></BradcrumpsArrow>
                <BradcrumpsLink>Статья 29. Обязанности супругов по взаимному содержанию</BradcrumpsLink>
            </Bradcrumps>

            <StyledPageContainer>
                <SubTitle>Статья 29. Обязанности супругов по взаимному содержанию
                </SubTitle>
                <Text>Супруги обязаны материально поддерживать друг друга.
                </Text>
                <Text>Нуждающиеся в материальной помощи жена в период беременности, супруг, осуществляющий уход за общим ребенком до достижения им трех лет, общим ребенком-инвалидом до достижения им восемнадцати лет, общим нетрудоспособным совершеннолетним ребенком, а также нетрудоспособный супруг имеют право в судебном порядке требовать предоставления содержания от другого супруга, обладающего необходимыми для этого средствами.
                (часть вторая статьи 29 в ред. Закона Республики Беларусь от 07.01.2012 N 342-З)

                </Text>
                <Text>Брачным договором могут быть предусмотрены и другие случаи, при которых наступает обязанность супруга оказывать материальную помощь другому супругу.

                </Text>
            </StyledPageContainer>
        </StyledPageWrapper>
    );
}
