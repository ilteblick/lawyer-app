import React from 'react';
import { Link } from 'react-router-dom';

import Title from 'components/Title';
import Text from 'components/Text';

import Banner from 'components/Banner';

import { StyledPageWrapper, StyledPageContainer } from 'components/PageContainers';
import { Bradcrumps, BradcrumpsLink, BradcrumpsArrow } from 'components/Bradcrums';

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

            <StyledPageContainer>
                <Title>Дополнительная  практика</Title>

                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                    <div style={{ width: '50%' }}>
                        <img src={Img} alt="" style={{ width: '100%' }} />
                    </div>
                </div>

                <Text>
                    Поскольку профиль брачно-семейного права достаточно узок и требует множество смежных познаний мы наравне с семейным правом специализируемся на спорах, возникающих из наследственных отношений, права собственности, обязательств различных видов (займа, купли-продажи, комиссия, подряд и др.), а также по вопросам учредительства и деятельности юридических лиц в целом.
                </Text>

            </StyledPageContainer>
        </StyledPageWrapper>
    );
}
