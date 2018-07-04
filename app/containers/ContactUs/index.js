import React from 'react';
import { Map, Marker } from 'yandex-map-react';

import { StyledPageWrapper } from 'components/PageContainers';

import ContactForm from '../HomePage/components/ContactForm';

import Img from './IMG_3954.jpg';

export default function ContentPage() {
    return (
        <StyledPageWrapper>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', backgroundImage: `url(${Img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <div style={{ display: 'flex', justifyContent: 'center', width: '100%', flexWrap: 'wrap' }}>
                    <div style={{ minWidth: 700, margin: 24 }}>
                        <ContactForm />
                    </div>
                    <div style={{ margin: 24 }}>
                        <Map onAPIAvailable={function () { console.log('API loaded'); }} center={[53.874458, 27.632018]} zoom={16}>
                            <Marker lat={53.875130} lon={27.634271} />
                        </Map>

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
