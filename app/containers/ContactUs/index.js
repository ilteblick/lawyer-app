import React from 'react';
import { Map, Marker } from 'yandex-map-react';
import { Carousel } from 'react-responsive-carousel';

import { StyledPageWrapper } from 'components/PageContainers';

import ContactForm from '../HomePage/components/ContactForm';

import Img from './IMG_3954.jpg';

import { StyledTextContainer } from './styled';

export default class ContentPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            rendered: false,
        };
    }
    componentDidMount() {
        this.setState({
            rendered: true,
        });
    }

    renderMap = () => {
        if (this.state.rendered) {
            return (
                <Map onAPIAvailable={function () { console.log('API loaded'); }} center={[53.874458, 27.632018]} zoom={16}>
                    <Marker lat={53.875130} lon={27.634271} />
                </Map>
            );
        }
        return null;
    }
    render() {
        return (
            <StyledPageWrapper>
                <div style={{ width: '100%' }}>
                    <Carousel showThumbs={false} showIndicators={false} showStatus={false} autoPlay transitionTime={1000} interval={7500}>
                        <StyledTextContainer>
                            <span>
                                "Только разделив проблему клиента, пропустив ее через себя и восприняв ее как свою собственную, можно быть уверенным, что тобой будут использованы все возможные средства и методы для отстаивания интересов доверителя"
                        </span>
                        </StyledTextContainer>
                        <StyledTextContainer>
                            <span>
                                "Только использовав все предусмотренные законом средства и способы защиты, можно констатировать несостоятельность позиции своего подзащитного"
                        </span>
                        </StyledTextContainer>
                        <StyledTextContainer>
                            <span>
                                "Своевременное обращение к квалифицированному юристу в абсолютнотном большинстве случаев исключает в будущем потерю материальных и временных ресурсов обратившегося"
                        </span>
                        </StyledTextContainer>
                        <StyledTextContainer>
                            <span>
                                "В системе законодательства любого правового государства немало продуманных и выверенных до идеализма норм, однако не везде можно столкнутся с таким же продуманным и выверенным применением"
                        </span>
                        </StyledTextContainer>
                        <StyledTextContainer>
                            <span>
                                "Хороший советник не тот, кто в угоду совему личному тщеславию и благополучию идёт к цели путём использования бесчиленных методов и средств, а тот, кто разделяя проблему доверителя достигает поставленных задач с минимальными расходами своего клиента"
                        </span>
                        </StyledTextContainer>
                    </Carousel>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', backgroundImage: `url(${Img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', width: '100%', flexWrap: 'wrap' }}>
                        <div style={{ maxWidth: 500, margin: 24 }}>
                            <ContactForm />
                        </div>
                        <div style={{ margin: 24 }}>
                            {this.renderMap()}

                            <div style={{ marginTop: '24px', padding: '24px 0', background: '#13355C', textAlign: 'center' }}>
                                <span style={{ fontFamily: " 'Fira Sans',sans-serif ", color: 'white', fontSize: 24 }}>г.Минск, пр. Партизанский, 89а</span>
                            </div>
                        </div>
                    </div>
                    {/* <YMaps>
                    <Map state={mapState}>
                        <Placemark
                          geometry={{
                                coordinates: [55.751574, 37.573856],
                            }}
                          properties={{
                                hintContent: 'Собственный значок метки',
                                balloonContent: 'Это красивая метка',
                            }}
                          options={{
                                iconLayout: 'default#image',
                                iconImageHref: 'images/myIcon.gif',
                                iconImageSize: [30, 42],
                                iconImageOffset: [-3, -42],
                            }}
                        />

                    </Map>
                        </YMaps>*/}

                </div>
            </StyledPageWrapper>
        );
    }
}
