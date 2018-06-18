
import React from 'react';

import { StyledHeader, StyledSpan } from './styled';
import Logo from './logo.png';

export default class AppBar extends React.PureComponent {
    render() {
        const { isScrolled } = this.props;
        const height = isScrolled ? 100 : 150;
        return (
            <StyledHeader>
                <div style={{ height, transition: 'height 0.7s', display: 'flex', justifyContent: 'flex-end', flexDirection: 'column' }}>
                    <div style={{ background: 'red', flex: 1, maxWidth: '27%' }}>
                        <img src={Logo} />
                    </div>
                    <div style={{ background: 'yellow', display: 'flex', justifyContent: 'flex-end' }}>menu</div>
                </div>
            </StyledHeader>
        );
    }
}
