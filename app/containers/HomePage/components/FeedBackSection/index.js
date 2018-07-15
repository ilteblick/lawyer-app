import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { StyledContainer, StyledTitle, StyledTextContainer, StyledText } from './styled';


export default function FeedBackSection() {
    return (
        <StyledContainer>
            <StyledTitle>
                <span>Отзывы</span>
            </StyledTitle>
            <Carousel showThumbs={false} showIndicators={false} showStatus={false} autoPlay transitionTime={1000} interval={7500}>
                <StyledTextContainer>
                    <StyledText>«Алексей и Татьяна являются специалистами в своей области, всегда готовы прейти на помощь и решить наши проблему. Спасибо.»</StyledText>
                </StyledTextContainer>
                <StyledTextContainer>
                    <StyledText>«Обращался к Алексею и Татьяне по вопросам развода и раздела имущества. Приятные люди, сразу обозначили возможный результат, который мы и достигли, провели полностью все дело, я только получал решения суда. Спасибо огромное!»</StyledText>
                </StyledTextContainer>
                <StyledTextContainer>
                    <StyledText>«До обращения к Тане и Алексею мне казалось моя ситуация безысходна, я хотела получить при разводе только свое, адвокаты сразу обрисовали перспективу, слабые и сильные стороны, пошагово проработали стратегию, результат – мировое соглашение на условиях о которых я даже не могла и мечтать. Благодарна от всей души!» </StyledText>
                </StyledTextContainer>
                <StyledTextContainer>
                    <StyledText>«Татьяна и Алексей специалиста в своей области, всегда подскажут верный ход в любом вопросе»</StyledText>
                </StyledTextContainer>
                <StyledTextContainer>
                    <StyledText>«Хотел открыть бизнес, но не хотел, что супруга претендовала на него после развода. Алексей и Татьяна Спасибо большое за решение!» </StyledText>
                </StyledTextContainer>
                <StyledTextContainer>
                    <StyledText>«Был спор с супругой относительно дочери, до обращения, думал, что больше ее не увижу. Благодаря Алексею и Татьяне вижусь согласно установленному распорядку. Особая благодарность за контроль по исполнению решения суда.!»</StyledText>
                </StyledTextContainer>
                <StyledTextContainer>
                    <StyledText>«Обратились к Алексею и Татьяне с будущим супругом по рекомендации. Желали, чтобы у нас было все оговорено еще на берегу. Нам все разъяснили, обозначили, подготовили нужные документы. Теперь мы застрахованы и, наверное, самая крепкая семья, которой ничего не страшно».</StyledText>
                </StyledTextContainer>
                <StyledTextContainer>
                    <StyledText>«Боялась развестись, более 20 лет в браке, дети, совместное имущество. Обратилась к Алексею и Татьяне, выдала доверенность, все решилось быстро, а главное для меня безболезненно. Спасибо!»</StyledText>
                </StyledTextContainer>
                <StyledTextContainer>
                    <StyledText>«Татьяна и Алексей очень чуткие и внимательные к нашим проблемам люди, всегда подскажут оптимальный выход из ситуации, Спасибо»</StyledText>
                </StyledTextContainer>
                <StyledTextContainer>
                    <StyledText>«Не мог поделить квартиру. Обратился. Благодаря нескольким дополнительным судебным процессам раздел произвели как я хотел. Спасибо большое!»</StyledText>
                </StyledTextContainer>
                <StyledTextContainer>
                    <StyledText>«Обратился с одной проблемой, решили сразу все, теперь наши семейные адвокаты»</StyledText>
                </StyledTextContainer>
                <StyledTextContainer>
                    <StyledText>«С Алексеем и Татьяной уже более 3 лет, никуда без них. Любое наше действие согласовываем с ними, ни разу не подвели!»</StyledText>
                </StyledTextContainer>
            </Carousel>
        </StyledContainer>
    );
}
