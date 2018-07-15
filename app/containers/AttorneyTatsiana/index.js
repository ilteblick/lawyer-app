import React from 'react';
import { Link } from 'react-router-dom';

import Title from 'components/Title';
import Text from 'components/Text';
import PersonInfo from 'components/PersonInfo';

import Banner from 'components/Banner';
import { Header, MenuLink, Container } from 'components/LeftMenu';

import { StyledPageWrapper, StyledPageContainer, StyledContainer } from 'components/PageContainers';
import { Bradcrumps, BradcrumpsLink, BradcrumpsArrow } from 'components/Bradcrums';
import FullScreenImg from 'components/FullScreenImg';

import Img from './IMG_3819.jpg';


export default function AttorneyTatsiana() {
    return (
        <StyledPageWrapper>
            <Banner label="Адвокат Татьяна Гуменюк" />
            <Bradcrumps>
                <Link to="/"><BradcrumpsLink>Главная</BradcrumpsLink></Link>
                <BradcrumpsArrow>></BradcrumpsArrow>
                <Link to="/attorneys"><BradcrumpsLink>Адвокаты</BradcrumpsLink></Link>
                <BradcrumpsArrow>></BradcrumpsArrow>
                <BradcrumpsLink>Адвокат Татьяна Гуменюк</BradcrumpsLink>
            </Bradcrumps>

            <StyledContainer>
                <Container>
                    <Header>Законодательное регулирование</Header>
                    <Link to="/lawersRB"><MenuLink>Адвокаты в Республике Беларусь</MenuLink></Link>
                    <Link to="/guarantee"><MenuLink>Гарантия адвокатской деятельности</MenuLink> </Link>
                    <Link to="/org-forms"><MenuLink>Организационные формы деятельности адвокатов</MenuLink></Link>
                </Container>
                <StyledPageContainer>
                    <Title>Адвокат Татьяна Гуменюк</Title>

                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                        <div style={{ width: '100%' }}>
                            <FullScreenImg src={Img} />
                        </div>
                        <PersonInfo>Брак – это партнерство, основанное на взаимном уважении и обеспеченное законом</PersonInfo>
                    </div>

                    <Text>Я являюсь адвокатом Минской городской коллегии адвокатов и осуществляю деятельность в составе Юридической консультации Заводского района г.Минска.</Text>
                    <Text>Высшее образование было получено в Белорусском государственном университете на юридическом факультете.</Text>

                    <Text>До момента определения узкой юридической специализации по оказанию помощи в рамках брачно – семейного законодательства, делами находящимися в моей практике являлись:</Text>

                    <ul>
                        <li><Text>гражданские споры о признании права собственности на недвижимое имущество и долей в нем, наследственные правоотношения, раздел совместно нажитого имущества, определения порядка общения с детьми (места жительства), о взыскании ущерба, задолженности по договорам займа;</Text></li>
                        <li><Text>уголовные дела по преступлениям против человека (причинение смерти по неосторожности, убийство, умышленное причинение телесных повреждений), против половой неприкосновенности (изнасилование и действия сексуального характера), представление интересов на стороне потерпевшего, против собственности и порядка осуществления экономической деятельности (присвоение и растрата, вымогательство, мошенничество, лжепредпринимательство), против общественного порядка (хулиганство) против здоровья населения (незаконный оборот наркотических средств) и др.</Text></li>
                    </ul>

                    <Text>В настоящее время я специализируюсь на спорах в рамках семейного законодательства и буду рада Вам помочь в Вашей проблеме, путем нахождения наиболее оптимального выхода, а также сделаю все, чтобы предотвратить негативные явления в будущем.</Text>
                </StyledPageContainer>
            </StyledContainer>
        </StyledPageWrapper>
    );
}
