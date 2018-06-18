import styled from 'styled-components';

export const StyledPageContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding-top: 200px;
    background: white;
    flex-direction: column;
`;

export const StyledPersonContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1000px;  
    padding: 4em 1em;
`;

export const Img = styled.img`
    margin: 4px 0px 4px 8px;
    float: right;
    width: 280px;
    min-width: 280px;
    height: 374px;
    box-sizing: border-box;
`;

export const StyledUl = styled.ul`
    list-style: disc;
    margin: 1em 0;
    padding-left: 2.5em;
    font-size: 1.25em;
`;

export const StyledLi = styled.li`
    font-size: 1.2em;
    line-height: 1.1em;
    padding: 6px;
`;
