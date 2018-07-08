import styled from 'styled-components';

import MainImg from './IMG_3954.jpg';

export const StyledImageContainer = styled.div`
    width: 100%;
    min-height: 400px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 30%;
    background-image: url(${MainImg});
    border-bottom: 1.11em solid #EEE9E8;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 128px;
    text-align: center;
`;

export const StyledLabel = styled.span`
    color: black;
    font-size: 2.5em;
    padding: 12px;
    background: #bfbfbf;
    opacity: 0.8;
    min-width: 100%;
`;
