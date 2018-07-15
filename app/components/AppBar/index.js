
import React from 'react';

import { Link } from 'react-router-dom';

import { StyledHeader, MenuItem, SubMenu, StyledSpan, LegalSpan } from './styled';
import Logo from './logo.jpg';

export default class AppBar extends React.PureComponent {
    render() {
        const { isScrolled } = this.props;
        const height = isScrolled ? 100 : 150;
        return (
            <StyledHeader>
                <div style={{ height, transition: 'height 0.7s', display: 'flex', justifyContent: 'flex-end', flexDirection: 'column' }}>
                    <div style={{ flex: 1, height: '100%' }}>
                        <div style={{ flex: 1, height: '100%', display: 'flex' }}>
                            <Link to="/"><img style={{ height: '120%' }} src={Logo} alt="" /></Link>
                            <div style={{ display: 'flex', flexDirection: 'column', alignSelf: 'center', textAlign: 'center' }}>
                                <StyledSpan>LAW PARTNERSHIP of lawyers A. Prybylski & T. Gumenuk</StyledSpan>
                                <LegalSpan>LEGAL assistance in FAMILY LAW </LegalSpan>
                            </div>
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
                                        <SubMenu><Link to="/areas/1">Предоставление юридической консультации до заключения брака</Link></SubMenu>
                                        <SubMenu><Link to="/areas/2">Предоставление юридической консультации лицам, находящимся в браке</Link></SubMenu>
                                        <SubMenu><Link to="/areas/3">Подготовка к судебному спору о расторжении брака, ведение дела в суде</Link></SubMenu>
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
