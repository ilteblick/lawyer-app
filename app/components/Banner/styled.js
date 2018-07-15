import styled from 'styled-components';

export const StyledImageContainer = styled.div`
    width: 100%;
    max-height: 700px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: -400px;
    background-image: url(${(props) => props.img});
    border-bottom: 1.11em solid #EEE9E8;
    display: flex;
    justify-content: center;
    align-items: center;
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
