import React from 'react';
import { Link } from 'react-router-dom';

import Title from 'components/Title';
import Text from 'components/Text';
import PersonInfo from 'components/PersonInfo';

import Banner from 'components/Banner';
import { Header, MenuLink, Container } from 'components/LeftMenu';

import { StyledPageWrapper, StyledPageContainer } from 'components/PageContainers';
import { Bradcrumps, BradcrumpsLink, BradcrumpsArrow } from 'components/Bradcrums';

import Img from './IMG_3906.jpg';

export default function AttorneyAlexey() {
    return (
        <StyledPageWrapper>
            <Banner label="Адвокат Алексей Прибыльский" />
            <Bradcrumps>
                <Link to="/"><BradcrumpsLink>Главная</BradcrumpsLink></Link>
                <BradcrumpsArrow>></BradcrumpsArrow>
                <Link to="/attorneys"><BradcrumpsLink>Адвокаты</BradcrumpsLink></Link>
                <BradcrumpsArrow>></BradcrumpsArrow>
                <BradcrumpsLink>Адвокат Алексей Прибыльский</BradcrumpsLink>
            </Bradcrumps>

            <div style={{ display: 'flex' }}>
                <Container>
                    <Header>Законодательное регулирование</Header>
                    <Link to="/lawersRB"><MenuLink>Адвокаты в Республике Беларусь</MenuLink></Link>
                    <Link to="/guarantee"><MenuLink>Гарантия адвокатской деятельности</MenuLink> </Link>
                    <Link to="/org-forms"><MenuLink>Организационные формы деятельности адвокатов</MenuLink></Link>
                </Container>
                <StyledPageContainer>
                    <Title>Адвокат Алексей Прибыльский</Title>

                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                        <div style={{ width: '50%' }}>
                            <img src={Img} alt="" style={{ width: '100%' }} />
                        </div>
                        <PersonInfo>Обратившись к адвокату вчера – Вы избегаете проблем завтра</PersonInfo>
                    </div>

                    <Text>Я являюсь адвокатом Минской городской коллегии адвокатов и осуществляю деятельность в составе Юридической консультации Заводского района г.Минска.</Text>
                    <Text>Высшее образование было получено в Белорусском государственном университете на юридическом факультете, в последующем была окончена магистратура по специальности юриспруденция в Академии управления при Президенте Республики Беларусь, присвоен звания магистр юридических наук.</Text>


                    <Text>В настоящее время являюсь аспирантом Национального центра законодательства и правовых исследований Республики Беларусь. </Text>
                    <Text>До момента определения узкой юридической специализации по оказанию помощи в рамках брачно – семейного законодательства, делами находящимися в моей практике являлись:</Text>

                    <ul>
                        <li><Text>гражданские споры по взысканию долгов по договорам займа, подряда, купли-продажи, признания права собственности на недвижимое имущество и долей в нем, наследственные правоотношения и др.;</Text></li>
                        <li><Text>уголовные дела по преступлениям против человека (причинение смерти по неосторожности, убийство, умышленное причинение телесных повреждений), против половой неприкосновенности (изнасилование и действия сексуального характера), против собственности и порядка осуществления экономической деятельности (присвоение и растрата, вымогательство, мошенничество, лжепредпринимательство) представление интересов на стороне потерпевшего; против общественного порядка (хулиганство); против здоровья населения (незаконный оборот наркотических средств) и др.</Text></li>
                        <li><Text>экономические дела по вопросам открытия (регистрации) субъектов хозяйствования и учредительства, споры вытекающие из договоров строительного подряда, сопровождение инвестиционной деятельности, разработка и юридическая оценка  хозяйственных договоров, взыскания задолженности по договорам поставки, лизинга, строительного подряда. Представление интересов в преддоговорных и предпретензионных спорах и др.</Text></li>
                    </ul>

                    <Text>В настоящее время я специализируюсь на спорах в рамках семейного законодательства и буду рад Вам помочь в разрешении Вашей существующей проблемы, или дам разъяснения и рекомендации как  проблему избежать в будущем. </Text>
                </StyledPageContainer>
            </div>
        </StyledPageWrapper>
    );
}
