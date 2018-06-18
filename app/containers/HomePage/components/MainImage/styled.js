import styled from 'styled-components';

import MainImg from '../../resources/main-big-img.png';

export const StyledImageContainer = styled.div`
    width: 100%;
    height: 60vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 5%;
    background-image: url(${MainImg});
    border-bottom: 1.11em solid #EEE9E8;
`;
