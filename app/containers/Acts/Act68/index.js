import React from 'react';
import { Link } from 'react-router-dom';

import SubTitle from 'components/SubTitle';
import Text from 'components/Text';

import Banner from 'components/Banner';

import { StyledPageWrapper, StyledPageContainer } from 'components/PageContainers';
import { Bradcrumps, BradcrumpsLink, BradcrumpsArrow } from 'components/Bradcrums';

export default function Act68() {
    return (
        <StyledPageWrapper>
            <Banner label="Статья 68. Личные неимущественные права и обязанности родителей" />
            <Bradcrumps>
                <Link to="/"><BradcrumpsLink>Home</BradcrumpsLink></Link>
                <BradcrumpsArrow>></BradcrumpsArrow>
                <BradcrumpsLink>Статья 68. Личные неимущественные права и обязанности родителей
                </BradcrumpsLink>
            </Bradcrumps>

            <StyledPageContainer>
                <SubTitle>Статья 68. Личные неимущественные права и обязанности родителей(в ред. Закона Республики Беларусь от 20.07.2006 N 164-З)
                </SubTitle>
                <Text>К личным неимущественным правам и обязанностям родителей относятся права и обязанности по:

                </Text>
                <ul>
                    <li><Text>определению собственного имени, отчества, фамилии детей;</Text></li>
                    <li><Text>определению гражданства детей в случаях, предусмотренных законодательством о гражданстве Республики Беларусь;
                    (в ред. Закона Республики Беларусь от 07.01.2012 N 342-З)
                </Text></li>
                    <li><Text>определению места жительства детей и их регистрации по месту жительства и месту пребывания;
                    (в ред. Закона Республики Беларусь от 07.01.2012 N 342-З)
                </Text></li>
                    <li><Text>воспитанию детей, осуществлению ухода и надзора за ними;</Text></li>
                    <li><Text>осуществлению представительства от имени своих детей;</Text></li>
                    <li><Text>обеспечению защиты прав и законных интересов детей.</Text></li>
                </ul>
            </StyledPageContainer>
        </StyledPageWrapper>
    );
}
