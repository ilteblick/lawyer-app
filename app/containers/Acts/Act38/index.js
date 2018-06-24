import React from 'react';
import { Link } from 'react-router-dom';

import SubTitle from 'components/SubTitle';
import Text from 'components/Text';

import Banner from 'components/Banner';

import { StyledPageWrapper, StyledPageContainer } from 'components/PageContainers';
import { Bradcrumps, BradcrumpsLink, BradcrumpsArrow } from 'components/Bradcrums';

export default function Act38() {
    return (
        <StyledPageWrapper>
            <Banner label="Статья 38. Соглашение о детях" />
            <Bradcrumps>
                <Link to="/"><BradcrumpsLink>Home</BradcrumpsLink></Link>
                <BradcrumpsArrow>></BradcrumpsArrow>
                <BradcrumpsLink>Статья 38. Соглашение о детях</BradcrumpsLink>
            </Bradcrumps>

            <StyledPageContainer>
                <SubTitle>Статья 38. Соглашение о детях

                </SubTitle>
                <Text>В целях обеспечения прав и законных интересов своих несовершеннолетних детей супруги при расторжении брака могут заключить между собой Соглашение о детях в порядке, установленном Гражданским процессуальным кодексом Республики Беларусь для заключения мировых соглашений.
                (в ред. Закона Республики Беларусь от 20.07.2006 N 164-З)

                </Text>
                <Text>В Соглашении о детях супруги могут определить, с кем из них будут проживать дети, порядок общения с детьми и участия в их воспитании отдельно проживающего родителя, размер алиментов на детей, порядок выезда из Республики Беларусь детей и иные вопросы воспитания и содержания детей после расторжения брака, если это не нарушает права и законные интересы детей и других лиц и не противоречит законодательству Республики Беларусь.
                (часть вторая статьи 38 в ред. Закона Республики Беларусь от 07.01.2012 N 342-З)

                </Text>
                <Text>В случае нарушения Соглашения о детях оно подлежит исполнению в порядке, определенном Гражданским процессуальным кодексом Республики Беларусь.
                </Text>
            </StyledPageContainer>
        </StyledPageWrapper>
    );
}
