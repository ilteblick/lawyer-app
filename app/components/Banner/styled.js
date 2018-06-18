import styled from 'styled-components';

import MainImg from './SubBanner_Main.jpg';

export const StyledImageContainer = styled.div`
    width: 100%;
    height: 200px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 70%;
    background-image: url(${MainImg});
    border-bottom: 1.11em solid #EEE9E8;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledLabel = styled.span`
    color: #FFFFFF;
    font-size: 2.5em;
    padding: 0;
    position: relative;
    z-index: 1;
`;
