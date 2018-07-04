
import React from 'react';

import { Link } from 'react-router-dom';

import { StyledHeader, MenuItem, SubMenu, StyledSpan } from './styled';
import Logo from './logo.jpg';

export default class AppBar extends React.PureComponent {
    render() {
        const { isScrolled } = this.props;
        const height = isScrolled ? 100 : 150;
        return (
            <StyledHeader>
                <div style={{ height, transition: 'height 0.7s', display: 'flex', justifyContent: 'flex-end', flexDirection: 'column' }}>
                    <div style={{ flex: 1, height: '100%' }}>
                        <div style={{ flex: 1, height: '100%' }}>
                            <Link to="/"><img style={{ height: '100%' }} src={Logo} alt="" /></Link>
                            <StyledSpan>LAW PARTNERSHIP of lawyers A. Prybylski & T.Gumenuk</StyledSpan>
                        </div>
                        <div style={{ background: 'white', display: 'flex', justifyContent: 'flex-end', borderBottom: '10px solid #D0D9E0' }}>
                            <div style={{ display: 'flex' }}>
                                <MenuItem>
                                    О нас
                                <ul>
                                        <SubMenu><Link to="/history">История товарищества</Link></SubMenu>
                                        <SubMenu><Link to="/attorneys">Адвокаты</Link></SubMenu>
                                        <SubMenu><Link to="/principles">Наши принципы</Link></SubMenu>
                                    </ul>
                                </MenuItem>
                                <MenuItem>
                                    Область практики
                                <ul>
                                        <SubMenu><Link to="/areas/1">Предоставление юридической консультации до заключения брака, способы определения имущественных прав сторон в браке</Link></SubMenu>
                                        <SubMenu><Link to="/areas/2">Предоставление юридической консультации лицам, находящимся в браке относительно их прав и обязанностей, режима собственности, способов регулирования правоотношений</Link></SubMenu>
                                        <SubMenu><Link to="/areas/3">Подготовка к судебному спору о расторжении брака, разделе совместного нажитого имущества, определение места жительства несовершеннолетних детей, уплате алиментов, а также их ведение на стадии рассмотрения дела в суде</Link></SubMenu>
                                        <SubMenu><Link to="/areas/4">Дополнительная практика. Обязательства, наследование, юридические лица</Link></SubMenu>
                                    </ul>
                                </MenuItem>
                                <Link to="/contact-us"><MenuItem>
                                    Контакты
                                </MenuItem></Link>
                                {/* <MenuItem>О нас</MenuItem>
                            <MenuItem>Область практики</MenuItem>
                            <MenuItem>Контакты</MenuItem>*/}
                            </div>
                        </div>
                    </div>

                </div >
            </StyledHeader >
        );
    }
}
