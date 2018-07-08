import React from 'react';
import { Link } from 'react-router-dom';

import Title from 'components/Title';
import Text from 'components/Text';

import Banner from 'components/Banner';

import { StyledPageWrapper, StyledPageContainer } from 'components/PageContainers';
import { Bradcrumps, BradcrumpsLink, BradcrumpsArrow } from 'components/Bradcrums';

export default function Represent() {
    return (
        <StyledPageWrapper>
            <Banner label="Представления интересов в судах, государственных органах, иных организациях, и перед физическими лицами." />
            <Bradcrumps>
                <Link to="/"><BradcrumpsLink>Главная</BradcrumpsLink></Link>
                <BradcrumpsArrow>></BradcrumpsArrow>
                <BradcrumpsLink>Представления интересов в судах, государственных органах, иных организациях, и перед физическими лицами.</BradcrumpsLink>
            </Bradcrumps>

            <StyledPageContainer>
                <Title>Представления интересов в судах, государственных органах, иных организациях, и перед физическими лицами.</Title>
                <Text>Неоспоримым преимуществом представления Ваших интересов профессиональным адвокатом, является:</Text>

                <ul>
                    <li><Text>правовая обоснованность того или иного поведения в Ваших интересах; </Text></li>
                    <li><Text>особая тактика ведения переговоров, рассчитанная на достижения заранее оговоренного результата;</Text></li>
                    <li><Text>четкое определение органа или лица, а также специальной формы обращения;</Text></li>
                    <li><Text>экономия Вашего времени, эмоциональное спокойствие, а также возможность заниматься своими делами пока профессионалы занимаются Вашими. </Text></li>
                </ul>

                <Text>При представлении Ваших интересов в любом из органов и организаций Вы можете быть уверены, что для достижения результата адвокаты приложат все возможные правовые усилия для этого, вы будете гарантировано обеспечены квалифицированной юридической помощью.</Text>

            </StyledPageContainer>
        </StyledPageWrapper>
    );
}
