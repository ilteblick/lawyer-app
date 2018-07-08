import React from 'react';
import { Link } from 'react-router-dom';

import Title from 'components/Title';
import Text from 'components/Text';

import Banner from 'components/Banner';
import { Header, MenuLink, Container } from 'components/LeftMenu';

import { StyledPageWrapper, StyledPageContainer, StyledContainer } from 'components/PageContainers';
import { Bradcrumps, BradcrumpsLink, BradcrumpsArrow } from 'components/Bradcrums';

import Img from './IMG_4029.jpg';

export default function Principles() {
    return (
        <StyledPageWrapper>
            <Banner label="Наши принципы" />
            <Bradcrumps>
                <Link to="/"><BradcrumpsLink>Главная</BradcrumpsLink></Link>
                <BradcrumpsArrow>></BradcrumpsArrow>
                <BradcrumpsLink>Наши принципы</BradcrumpsLink>
            </Bradcrumps>

            <StyledContainer>
                <Container>
                    <Header>Законодательное регулирование</Header>
                    <Link to="/principles-organization"><MenuLink>Принципы организации адвокатуры и адвокатской деятельности</MenuLink></Link>
                    <Link to="/lawers-goals"><MenuLink>Основные задачи адвокатуры</MenuLink></Link>
                </Container>
                <StyledPageContainer>
                    <Title>Наши принципы</Title>

                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                        <div style={{ width: '100%' }}>
                            <img src={Img} alt="" style={{ width: '100%' }} />
                        </div>
                    </div>

                    <Text>Принципы осуществления адвокатской деятельности являются краеугольным камне оказания помощи нашим клиентам.</Text>
                    <Text>Обратившись к нам будьте уверены, оказание Вам юридической помощи будет строиться исключительно на основе :</Text>

                    <ul>
                        <li><Text>Конфиденциальности. Сам факт обращения к адвокату уже является тайной.</Text></li>
                        <li><Text>Профессионализме и узкой специализации. Наша деятельность ориентируется на разрешении проблем в области брачно-семейного законодательства, в связи с чем адвокаты постоянно повышают свои теоретические знания и накапливают практический опыт судебной практики в этой отрасли;</Text></li>
                        <li><Text>Полного взаимопонимания между клиентом и адвокатом. Мы следуем исключительно согласно Ваших целей и задач и готовы в рамках правового поля приступить к любому поручению;</Text></li>
                        <li><Text>Честности. Обратившись к нам, Вы получаете консолидированное мнения относительно правового вопроса как есть, без преукрас и заблуждения. Мы не беремся за споры, имеющие изначально предполагаемо негативный результат или без правовой позиции;</Text></li>
                        <li><Text>Результативности. В случае если мы беремся за ведения спора, то изначально ставим Вас в известность о возможно результате и прилагаем все усилия для его достижения</Text></li>
                    </ul>

                    <Text>Указанные принципы являются основой нашей деятельности и дают Вам гарантию на наше плодотворное сотрудничество!</Text>
                </StyledPageContainer>
            </StyledContainer>
        </StyledPageWrapper>
    );
}
