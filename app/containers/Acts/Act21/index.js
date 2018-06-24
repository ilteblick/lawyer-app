import React from 'react';
import { Link } from 'react-router-dom';

import SubTitle from 'components/SubTitle';
import Text from 'components/Text';

import Banner from 'components/Banner';

import { StyledPageWrapper, StyledPageContainer } from 'components/PageContainers';
import { Bradcrumps, BradcrumpsLink, BradcrumpsArrow } from 'components/Bradcrums';

export default function Act21() {
    return (
        <StyledPageWrapper>
            <Banner label="Статья 21. Право супругов на выбор фамилии при заключении брака" />
            <Bradcrumps>
                <Link to="/"><BradcrumpsLink>Home</BradcrumpsLink></Link>
                <BradcrumpsArrow>></BradcrumpsArrow>
                <BradcrumpsLink>Статья 21. Право супругов на выбор фамилии при заключении брака</BradcrumpsLink>
            </Bradcrumps>

            <StyledPageContainer>
                <SubTitle>Статья 21. Право супругов на выбор фамилии при заключении брака</SubTitle>
                <Text>Супруги или один из них могут избрать двойную фамилию, состоящую из добрачных фамилий супругов. Если двойной фамилией желают именоваться оба супруга, по их согласию определяется, с какой добрачной фамилии она будет начинаться.
                (часть вторая статьи 21 в ред. Закона Республики Беларусь от 20.07.2006 N 164-З)
                </Text>
                <Text>Соединение более двух фамилий не допускается. Если до вступления в брак супруги или один из них имели двойные фамилии, по их согласию определяется, из каких составных частей добрачных фамилий будет состоять новая фамилия.
                (часть третья статьи 21 введена Законом Республики Беларусь от 20.07.2006 N 164-З)
                </Text>
                <Text>Право выбора супругами фамилии реализуется при регистрации заключения брака до совершения соответствующей записи акта гражданского состояния.
                (в ред. Законов Республики Беларусь от 20.07.2006 N 164-З, от 07.01.2012 N 342-З)
                </Text>
                <Text>Изменение супругами фамилии после вступления в брак осуществляется в общем порядке.
                </Text>
                <Text>Перемена фамилии одним из супругов не влечет за собой изменения фамилии другого из них, хотя последний тоже вправе ходатайствовать об изменении своей фамилии.
                </Text>
            </StyledPageContainer>
        </StyledPageWrapper>
    );
}
