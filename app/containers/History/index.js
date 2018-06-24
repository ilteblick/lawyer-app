import React from 'react';
import { Link } from 'react-router-dom';

import Title from 'components/Title';
import SubTitle from 'components/SubTitle';
import Text from 'components/Text';

import Banner from 'components/Banner';
import { Header, MenuLink, Container } from 'components/LeftMenu';

import { StyledPageWrapper, StyledPageContainer } from 'components/PageContainers';
import { Bradcrumps, BradcrumpsLink, BradcrumpsArrow } from 'components/Bradcrums';

export default function History() {
    return (
        <StyledPageWrapper>
            <Banner label="История товарищества" />
            <Bradcrumps>
                <Link to="/"><BradcrumpsLink>Главная</BradcrumpsLink></Link>
                <BradcrumpsArrow>></BradcrumpsArrow>
                <BradcrumpsLink>История товарищества</BradcrumpsLink>
            </Bradcrumps>

            <div style={{ display: 'flex' }}>
                <Container>
                    <Header>Законодательное регулирование</Header>
                    <MenuLink>Адвокаты в Республике Беларусь</MenuLink>
                    <MenuLink>Гарантия адвокатской деятельности </MenuLink>
                    <MenuLink>Организационные формы деятельности адвокатов</MenuLink>
                </Container>
                <StyledPageContainer>
                    <Title>История нашего товарищества</Title>
                    <SubTitle>Пополнение рядов адвокатов</SubTitle>
                    <Text>В далеком 2002 году Татьяна Гуменюк была принята в ряды членов Минской городской коллегии адвокатов и начала свой профессиональный путь в числе профессионалов Юридической консультации Заводского района г.Минска.                На протяжении долгого пути принимала участие в юридических спорах различного профиля, будь-то сложнейшие многоэпизодные уголовные дела или гражданские споры по различным вопросам. Многопрофильная деятельность Татьяны, позволила ей к моменту начала сотрудничества в области ведения гражданских дел накопить богатый юридический опыт из всех отраслей права Республики Беларусь и выбрать ту специализации, в которой возможно оказать наиболее значимую юридическую помощь.</Text>
                    <Text>Знаковым годом для образования нашего юридического партнерства стал 2014 год, год в котором в члены Минской городской коллегии адвокатов произошло пополнение и одним из новых профессионалов своего дела стал Алексей Прибыльский.
                </Text>

                    <Text>Следует отметить, что до начала адвокатской практики Алексей вел юридическую работу уже на протяжении длительного времени, обслуживая субъекты хозяйствования как государственной, так и частной формы собственности. Однако, приход в адвокатуру и принятия участия в сложных как уголовных, гражданских, так и экономических делах стал моментом понимания того, что узко специализированный адвокат, как и другой специалист в различный сферах деятельности, является тем специалистом, который действительно может знать практически все в свой области, а соответственно, и оказать наиболее квалифицированную помощь своим клиентам.
                </Text>
                    <SubTitle>Встал вопрос специализации…</SubTitle>
                    <Text>На 2016 год  по данным Национального статистического комитета в нашей стране было зарегистрировано 64 536 браков, при этом число разводов составило 32 628. Действительно при обычном прочтении это всего-навсего цифры, но если в них вдуматься, то получается, что за отчетный год число граждан решивших разорвать узы брака составляет половину от тех, кто решил ими себя связать.</Text>
                    <Text>И это действительно является весьма серьезной проблемой.
                    Конечно, каждый волен в своем личном пространстве поступать так, как он желает в определенный момент своей жизни, в силу тех обстоятельств, которые ему преподносит судьба. Да они могут быть разными как позитивными -  новая любовь и отношения, так и негативными - предательство, отсутствие взаимопонимания, теплоты в доме.
                </Text>
                    <Text>Тем не менее, если Вы состояли в браке,  Вам предстоит развод.</Text>
                    <Text>Сколько же вопросов порождает развод….</Text>
                    <Text>Безусловно, повезло тем, кто в браке не нажил совместное имущество, не завел детей, а если иначе… В таких случаях развод становиться весьма болезненным для обеих сторон и крайне сложным юридическим процессом, так как подлежат разрешению множества вопросов: с кем будут проживать несовершеннолетние дети и как будет происходить общение с ними, каким образом разделить совместно нажитое имущество, как урегулировать вопросы оплаты алиментов и другие.</Text>
                    <Text>Следует отметить, что на первый взгляд действующее законодательство в сфере брачно – семейных отношений на все приведенные вопросы имеет четкие ответы, однако это только на первый взгляд.</Text>
                    <Text>К примеру, существует положение о том, что все нажитое супругами во время брака является совместно нажитым имуществом, а значит в случае отсутствия брачного договора меняющего указанный режим собственности, при разводе все делиться пополам. Далее законодатель определил, что имущество, приобретенное одним из супругов до брака, а также полученное в порядке наследования является собственностью этого супруга, т.е. режим совместной собственности не образует. Учитывая положения закона, все достаточно прозрачно.</Text>
                    <Text>Но, что же делать, если, одна из сторон, к примеру, родственники супруга без оформления каких – либо документов подарили сыну денежные средства, которые он благополучно вложил в совместное имущество, а фактически его приобрел учитывая стоимость имущества и размер подаренных средств.</Text>
                    <Text>И указанный случай с позиции закона можно толковать двояко, с одной стороны, если имущество зарегистрировано во время брака на одного из супругов (титульного собственника), то это совместное нажитое имущество, с другой стороны, в указанном совместном имуществе есть значительная часть полученных в дар денежных средств одного из супругов, которые не являются совместными.</Text>
                    <Text>Разрешение указанной коллизии зависит как от соответствующей в момент разрешения спора судебной практики, так и от той работы, которую проделают адвокаты, а именно, каким образом будет поддерживаться та или иная правовая позиция и какие доказательства в обоснование тех или иных обстоятельств будут положены.</Text>
                    <Text>Еще один пример. Согласно положениям законодательства родители равны в правах по отношениям к своим детям и указанное равенство является основополагающим принципом отношений как действующих, так и бывших супругов по отношению к своим детям.</Text>

                    <Text>Однако, даже с учетом такого положения в законе, на этой почве возникают споры.</Text>
                    <Text>Так, к примеру, при разводе бывшие супруги определили, что их несовершеннолетний ребенок, мальчик, будет проживать с матерью. При этом, после расторжения брака бывшая супруга всячески препятствует общению отца с сыном, мотивируя это новыми отношениями.</Text>
                    <Text>В таком случае мужчина становиться уязвим от сеюминутных желаний своей бывшей второй половины, а значит, необходим юридический спор в суде, в ходе которого либо подлежит определению жесткий порядок общения с ребенком отдельно проживающего родителя, либо определения места жительства несовершеннолетнего за отцом. Необходимо сделать вывод, что в рамках судебных решений крайне редко несовершеннолетний ребенок остается за отцом, за исключением конечно недостойного поведения матери, а также в случаях, когда ребенку больше 10 лет, он мальчик и изъявляет желание проживать с отцом. То есть приоритет проживания несовершеннолетнего ребенка отдается женщине, даже в тех случаях, когда на лицо имеется умышленное ограничения общения с отцом. Другой пример, в случае аналогичной ситуации только при тех обстоятельствах, что несовершеннолетний проживает с отцом и мужчина не предоставляет матери возможности видеться с ребенком, он может быть даже лишенным родительских прав за злоупотребление родительскими правами. Вопрос, где же равенство. Ответ, для достижения принципа равенства родителей, в том числе и в суде, необходима тщательная проработка юридической позиции и представления широкого спектра доказательств по гражданскому делу, что без квалифицированной юридической помощи не возможно.</Text>
                    <Text>И таких примеров можно привести бесчисленное количество, их масса.</Text>
                    <Text>Учитывая множество проблемных и специфических ситуаций в рамках брачно-семейного права, наличие реальной необходимости помощи широкому кругу лиц, как вступающим в брак, так и находящихся на стадии развода, с учетом полученного ранее опыта в уголовных, гражданских и экономических делах, нами было принято решения о сотрудничестве на уровне товарищества адвокатов Юридической консультации Заводского района г.Минска в сфере брачно-семейного права.</Text>

                    <SubTitle>Что такое товарищество</SubTitle>

                    <Text>Под товариществом адвокатов Алексея Прибыльского и Татьяны Гуменюк следует понимать наше объединение для решения ваших проблем, как на стадии получения юридической консультации, так и на стадии судебного спора, исполнения решения. В случае обращения к нам за юридической профильной  помощью, Вы получаете консолидированное мнение относительно разрешения проблемы сразу от двух специалистов; при ведении дела в суде Ваши интересы могут представлять сразу два адвоката, которые имеют опыт в различных делах.
                    Совместная работа над Вашей проблемой повышает результативность ее разрешения в разы, так как позволяет, как сегментировать спор, так и с разных юридических точек зрения посмотреть на него.
                </Text>

                </StyledPageContainer>
            </div>
        </StyledPageWrapper>
    );
}
