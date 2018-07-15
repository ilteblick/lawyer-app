import React from 'react';
import { Link } from 'react-router-dom';

import Title from 'components/Title';
import Text from 'components/Text';

import Banner from 'components/Banner';
import { Header, MenuLink, Container } from 'components/LeftMenu';

import { StyledPageWrapper, StyledPageContainer, StyledContainer } from 'components/PageContainers';
import { Bradcrumps, BradcrumpsLink, BradcrumpsArrow } from 'components/Bradcrums';
import FullScreenImg from 'components/FullScreenImg';

import Img from './IMG_3922.jpg';


export default function Areas4() {
    return (
        <StyledPageWrapper>
            <Banner label="Дополнительная  практика" />
            <Bradcrumps>
                <Link to="/"><BradcrumpsLink>Главная</BradcrumpsLink></Link>
                <BradcrumpsArrow>></BradcrumpsArrow>
                <BradcrumpsLink>Дополнительная  практика</BradcrumpsLink>
            </Bradcrumps>
            <StyledContainer>
                <Container>
                    <Header>Законодательное регулирование</Header>
                    <Link to="/acts/1"><MenuLink>Некоторые положения Кодекса Республики Беларусь о браке и семье </MenuLink></Link>
                    <Link to="/acts/2"><MenuLink>Некоторые положения Гражданского кодекса Республики Беларусь</MenuLink> </Link>
                    <Link to="/acts/3"><MenuLink>Некоторые положения Гражданского процессуального кодекса Республики Беларусь</MenuLink></Link>
                </Container>
                <StyledPageContainer>
                    <Title>Дополнительная  практика</Title>

                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                        <div style={{ width: '100%' }}>
                            <FullScreenImg src={Img} />
                        </div>
                    </div>

                    <Text>
                        Поскольку профиль брачно-семейного права достаточно узок и требует множество смежных познаний мы наравне с семейным правом специализируемся на спорах, возникающих из наследственных отношений, права собственности, обязательств различных видов (займа, купли-продажи, комиссия, подряд и др.), а также по вопросам учредительства и деятельности юридических лиц в целом.
                </Text>

                </StyledPageContainer>
            </StyledContainer>
        </StyledPageWrapper>
    );
}
