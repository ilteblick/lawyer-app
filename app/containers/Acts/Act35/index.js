import React from 'react';
import { Link } from 'react-router-dom';

import SubTitle from 'components/SubTitle';
import Text from 'components/Text';

import Banner from 'components/Banner';

import { StyledPageWrapper, StyledPageContainer } from 'components/PageContainers';
import { Bradcrumps, BradcrumpsLink, BradcrumpsArrow } from 'components/Bradcrums';

export default function Act35() {
    return (
        <StyledPageWrapper>
            <Banner label="Статья 35. Недопустимость расторжения брака" />
            <Bradcrumps>
                <Link to="/"><BradcrumpsLink>Home</BradcrumpsLink></Link>
                <BradcrumpsArrow>></BradcrumpsArrow>
                <BradcrumpsLink>Статья 35. Недопустимость расторжения брака</BradcrumpsLink>
            </Bradcrumps>

            <StyledPageContainer>
                <SubTitle>Статья 35. Недопустимость расторжения брака(в ред. Закона Республики Беларусь от 20.07.2006 N 164-З)

                </SubTitle>
                <Text>Расторжение брака недопустимо во время беременности жены и до достижения ребенком возраста трех лет без письменного согласия другого супруга на расторжение брака при условии, что он проживает с ребенком и осуществляет родительскую заботу о нем, за исключением случаев, когда отцовство по отношению к ребенку признано другим лицом или по решению суда сведения о муже как об отце ребенка исключены из записи акта о рождении ребенка.
                </Text>
            </StyledPageContainer>
        </StyledPageWrapper>
    );
}
