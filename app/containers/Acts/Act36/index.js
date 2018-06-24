import React from 'react';
import { Link } from 'react-router-dom';

import SubTitle from 'components/SubTitle';
import Text from 'components/Text';

import Banner from 'components/Banner';

import { StyledPageWrapper, StyledPageContainer } from 'components/PageContainers';
import { Bradcrumps, BradcrumpsLink, BradcrumpsArrow } from 'components/Bradcrums';

export default function Act36() {
    return (
        <StyledPageWrapper>
            <Banner label="Статья 36. Расторжение брака судом" />
            <Bradcrumps>
                <Link to="/"><BradcrumpsLink>Home</BradcrumpsLink></Link>
                <BradcrumpsArrow>></BradcrumpsArrow>
                <BradcrumpsLink>Статья 36. Расторжение брака судом</BradcrumpsLink>
            </Bradcrumps>

            <StyledPageContainer>
                <SubTitle>Статья 36. Расторжение брака судом(в ред. Закона Республики Беларусь от 07.01.2012 N 342-З)

                </SubTitle>
                <Text>Расторжение брака производится судом в порядке искового производства.
                </Text>
                <Text>При приеме искового заявления о расторжении брака суд предоставляет супругам трехмесячный срок для принятия мер к примирению, а также для достижения соглашения об общих несовершеннолетних детях и разделе имущества.
                (в ред. Закона Республики Беларусь от 07.01.2012 N 342-З)
                </Text>
                <Text>По истечении трехмесячного срока брак расторгается, если судом будет установлено, что дальнейшая совместная жизнь супругов и сохранение семьи стали невозможными.
                </Text>
                <Text>При вынесении решения о расторжении брака суд принимает меры к защите интересов несовершеннолетних детей и нетрудоспособного супруга.
                </Text>
                <Text>При рассмотрении искового заявления суд принимает меры, направленные на сохранение семьи, и вправе отложить разбирательство дела, назначив супругам дополнительный срок для примирения в пределах шести месяцев.
                </Text>
            </StyledPageContainer>
        </StyledPageWrapper>
    );
}
