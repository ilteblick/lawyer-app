import styled from 'styled-components';

export const Header = styled.span`
    background-color: #0E2744;
    text-align: center;
    color: #F2F2F2;
    font-weight: 400;
    padding: .5em;
    font-size: 2em;
    display: block;
`;

export const MenuLink = styled.span`
    color: #4C4C4C;
    font-size: 1em;
    display: block;
    padding: 1em 2% 1em 10%;
    transition: .5s ease;
    display: block;
    cursor: pointer;
    background-color: #EAEAEA;
    border-bottom: 1px solid white;

    &:hover{
        background-color: #13355C;
        color: #FFFFFF;
    }
`;

export const Container = styled.div`
@media (max-device-width: 900px){
    padding: 1em;
}
    padding: 6em 3em;
`;
