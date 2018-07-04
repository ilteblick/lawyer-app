import styled from 'styled-components';

export const StyledHeader = styled.header`
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    box-sizing: border-box;
    background: white;
    z-index: 1000;
`;

export const StyledSpan = styled.span`
    font-size: 2.2em;
    text-transform: uppercase;
    font-weight: 300;
    color: #a5a5a5;
    line-height: 1.1;
    font-family: 'Cormorant', serif;
    flex: 1;
    border-bottom: 1px solid #a5a5a5;
`;

export const MenuItem = styled.div`
    cursor: pointer;
    background-color: #D0D9E0;
    color: #075F92;
    transition: .5s ease 0s;
    font-weight: 700;
    font-size: 22px;
    padding: .25em 3em;
    font-family: 'Marcellus', serif;
    position: relative;
    border-bottom: 1px solid #075F92;
    border-right: 1px solid #075F92;

    &:hover{
        background-color: #13355C;
        color: #FFFFFF;

        ul{
            transform: scale(1,1);
            transition: transform .3s ease 0s;
            transform-origin: top;
        }
    }

    ul{
        transition: transform .3s ease 0s;
        transform: scale(1,0);
        transform-origin: top;
        padding: 0;
        margin: 0;
        list-style: none;
        position: absolute;
        background: white;
        min-width: 250px;
        box-shadow: 0 0 15px rgba(0,0,0,.25);
        left: 0;
        top: 100%;
    }
`;

export const SubMenu = styled.li`
    a{
        display: block;
        border-bottom: solid 1px rgba(0,0,0,0.1);
        padding: .25em 1.5em !important;
        color: #4C4C4C;
        font-size: 15px;
        font-family: 'Marcellus', serif;
        text-transform: uppercase;

        &:hover{
            background-color: #DCD2D0;
            color: #4C4C4C;
        }
    }

`;

export const Menu = styled.ul`
    display: block;
    margin: 0;
    padding: 0;
    list-style: none;
`;
