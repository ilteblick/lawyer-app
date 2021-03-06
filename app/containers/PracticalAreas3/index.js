import React from 'react';
import { Link } from 'react-router-dom';

import Title from 'components/Title';
import Text from 'components/Text';

import Banner from 'components/Banner';
import { Header, MenuLink, Container } from 'components/LeftMenu';

import { StyledPageWrapper, StyledPageContainer, StyledContainer } from 'components/PageContainers';
import { Bradcrumps, BradcrumpsLink, BradcrumpsArrow } from 'components/Bradcrums';
import FullScreenImg from 'components/FullScreenImg';

import Img from './IMG_3971.jpg';


export default function Areas3() {
    return (
        <StyledPageWrapper>
            <Banner label="Подготовка к судебному спору о расторжении брака, разделе совместного нажитого имущества, определение места жительства несовершеннолетних детей, уплате алиментов, а также их ведение на стадии рассмотрения дела в суде" />
            <Bradcrumps>
                <Link to="/"><BradcrumpsLink>Главная</BradcrumpsLink></Link>
                <BradcrumpsArrow>></BradcrumpsArrow>
                <BradcrumpsLink>Подготовка к судебному спору о расторжении брака, разделе совместного нажитого имущества, определение места жительства несовершеннолетних детей, уплате алиментов, а также их ведение на стадии рассмотрения дела в суде</BradcrumpsLink>
            </Bradcrumps>
            <StyledContainer>
                <Container>
                    <Header>Законодательное регулирование</Header>
                    <Link to="/acts/1"><MenuLink>Некоторые положения Кодекса Республики Беларусь о браке и семье </MenuLink></Link>
                    <Link to="/acts/2"><MenuLink>Некоторые положения Гражданского кодекса Республики Беларусь</MenuLink> </Link>
                    <Link to="/acts/3"><MenuLink>Некоторые положения Гражданского процессуального кодекса Республики Беларусь</MenuLink></Link>
                </Container>
                <StyledPageContainer>
                    <Title>Подготовка к судебному спору о расторжении брака, разделе совместного нажитого имущества, определение места жительства несовершеннолетних детей, уплате алиментов, а также их ведение на стадии рассмотрения дела в суде</Title>

                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                        <div style={{ width: '100%' }}>
                            <FullScreenImg src={Img} />
                        </div>
                    </div>

                    <Text>
                        К большому сожалению, но в нашей жизни парой союз мужчины и женщины распадается. Указанное может произойти по различным причинам, но если такое происходит, то в любом случае грядет брако-разводный процесс. С чего он начинается.? Начала брако-разводного процесса может быть положено двумя способами наиболее простым и безболезненным с юридической токи зрения, и весьма утомительным. Так, первый способ произвести расторжение брака – это обратиться в орган регистрирующий гражданское состояние (ЗАГС), в этом случае Вы будете разведены в максимально короткие сроки. Однако такой способ может иметь место только в том случае, если у Вас нет совместных несовершеннолетних детей, а также спора об имуществе. В случае если имеется либо первое либо второе, то Вам только одна дорога -  в суд. Бракоразводный судебный процесс в широком смысле слова как правило состоит из трех этапов, это само расторжение брака, раздел имущества и определение места жительства несовершеннолетних детей и порядок общения с ними. Безусловно, два последних вопроса возможно разрешить и во внесудебном порядке, однако на практике в большинстве случаев стороны прибегают к судебному разрешению спора.
                </Text>
                    <Text>В чем же заключается задача адвоката при разводе? В данном случае значимость трудно переоценить, так как адвокат предоставляя юридическую консультацию разъясняет законодательство относительно всех прав и обязанностей сторон на данном этапе, поясняет правовые последствия тех или иных действий и фактов указанных в процессуальных документах сторон, совместно с клиентом обсуждает и согласовывает правовую позицию и в последующем поддерживая ее просит удовлетворить те или иные требования, занимается поиском и представлением доказательств в обоснование правовой позиции согласованной с клиентом. При получении отрицательного результата, проводит работу посредством обжалования постановления суда.</Text>

                    <Text>Долго не останавливаясь на указанном вопросе, поскольку он весьма многомерен в своем описании, хотелось бы обратить внимание на один из аспектов. </Text>
                    <Text>В абсолютном большинстве случаев, супруг обращающийся в суд за расторжением брака, как правило весьма формально составляет иск о разводе. Указываются стандартные фразы и минимально необходимо  количество информации. При этом, даже на указанной стадии, весьма важны многие условия. Одним из таких является указание в исковом заявлении даты фактического прекращения брачных отношений. Для чего это необходимо, во-первых, в случае, если второй супруг ведет себя с финансовой точки зрения не разумно: берет кредиты, займы и т.д., но семья распалась до этих обстоятельств, соответственно указание в судебном постановлении даты фактического прекращения брачных отношений может спасти  второго супруга от притязаний третьих лиц в будущем (в случае если отношения прекратились до ), во-вторых указанное может иметь преюдиционное значение и при спорах имущественного характера – разделе совместного имущества, так , к примеру установлено, что имущество приобретено супругом 01.02.2016, при этом судом установлено, что фактически брачные отношения прекращены 01.01.2016, соответственно указанное имущество уже не является совместно нажитым.
                    И указанный приведенный пример является всего-навсего 1% от иных вопросов и нюансов, которые подлежат вниманию при ведении дела в суде, и указанное может обеспечить только адвокат.
                </Text>
                </StyledPageContainer>
            </StyledContainer>
        </StyledPageWrapper>
    );
}
