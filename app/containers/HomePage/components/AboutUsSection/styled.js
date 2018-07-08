import styled from 'styled-components';

export const StyledAboutUsContainer = styled.div`
    @media (max-width: 900px){
        flex-direction: column;
    }
    display:flex;
    flex-direction: row;
`;

export const StyledMenuContainer = styled.div`
    @media (max-width: 900px){
        order: 2;
    }
    order: 1;
    padding: 4em 4%;
    background-image: linear-gradient(to bottom,#13355C,#13355C);
    background-position: center center;
    background-size: cover;
    display: flex;
    flex: 0 1 35%;
    flex-direction: column;
    justify-content: center;
`;

export const StyledDescriptionContainser = styled.div`
    @media (max-width: 900px){
        order: 1;
    }
    order: 2;
    padding: 4em 6%;
    width: 100%;
    background-color: #F4F4F4;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
`;

export const StyledLink = styled.span`
    color: #FFFFFF;
    text-align: center;
    display: block;
    font-family: 'Cormorant', serif;
    font-size: 1.75em;
    border: 1px solid #FFFFFF;
    padding: 12px;
    font-weight: bold;
    transition: 0.5s;
    margin: 0.3em 0;
    cursor: pointer;
    &:hover {
        color: #D0D9E0;
        border-color: #D0D9E0;
    }
`;
