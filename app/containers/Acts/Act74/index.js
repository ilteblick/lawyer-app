import React from 'react';
import { Link } from 'react-router-dom';

import SubTitle from 'components/SubTitle';
import Text from 'components/Text';

import Banner from 'components/Banner';

import { StyledPageWrapper, StyledPageContainer } from 'components/PageContainers';
import { Bradcrumps, BradcrumpsLink, BradcrumpsArrow } from 'components/Bradcrums';

export default function Act74() {
    return (
        <StyledPageWrapper>
            <Banner label="Статья 74. Место жительства ребенка" />
            <Bradcrumps>
                <Link to="/"><BradcrumpsLink>Home</BradcrumpsLink></Link>
                <BradcrumpsArrow>></BradcrumpsArrow>
                <BradcrumpsLink>Статья 74. Место жительства ребенка
                </BradcrumpsLink>
            </Bradcrumps>

            <StyledPageContainer>
                <SubTitle>Статья 74. Место жительства ребенка
                </SubTitle>
                <Text>Местом жительства ребенка считается место жительства его родителей, если иное не предусмотрено законодательными актами Республики Беларусь.
                (в ред. Закона Республики Беларусь от 07.01.2012 N 342-З)


                </Text>
                <Text>Место жительства ребенка в случае отдельного проживания родителей вследствие расторжения брака или по другим причинам определяется по обоюдному согласию родителей, если иное не предусмотрено законодательными актами Республики Беларусь.
                (в ред. Закона Республики Беларусь от 07.01.2012 N 342-З)


                </Text>
                <Text>Разногласия между родителями о том, с кем будет проживать ребенок, разрешаются в судебном порядке исходя из интересов ребенка.
                (в ред. Закона Республики Беларусь от 07.01.2012 N 342-З)

                </Text>
                <Text>Суд учитывает, кто из родителей проявляет большую заботу и внимание к ребенку, возраст ребенка и привязанность к каждому из родителей, личные качества родителей, возможность создания надлежащих материально-бытовых условий и нравственно-психологической атмосферы, обеспечения надлежащего уровня воспитания. Учет мнения ребенка, достигшего возраста десяти лет, обязателен, за исключением случаев, когда это противоречит его интересам. При этом мнение ребенка по запросу суда выявляется органом опеки и попечительства по месту жительства ребенка.
                (в ред. Законов Республики Беларусь от 20.07.2006 N 164-З, от 07.01.2012 N 342-З)

                </Text>
            </StyledPageContainer>
        </StyledPageWrapper>
    );
}