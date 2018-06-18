import styled from 'styled-components';

export const StyledContainer = styled.div`
    background-color: #F4F4F4;
    padding: 3em 0; 
    display: flex;
    flex-direction: column;
`;

export const StyledTitle = styled.span`
    color: #13355C;
    margin: 0;
    font-weight: 600;
    font-size: 2.75em;
    line-height: 1.1;
    font-family: 'Cormorant', serif;
    text-align: center;
`;

export const StyledTextContainer = styled.div`
    padding: 2em 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    min-height: 200px;
`;

export const StyledLeft = styled.div`
    width: 0; 
    height: 0; 
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent; 

    border-right:20px solid #13355C; 
    margin: 30px;
    cursor: pointer;
`;

export const StyledRight = styled.div`
    width: 0; 
    height: 0; 
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;

    border-left: 20px solid #13355C; 
    margin: 30px;
    cursor: pointer;
`;

export const StyledText = styled.span`
    font-size: 2.5em;
    font-style: italic;
    padding: 0;
    line-height: 1.8;
    text-align: center;
    width: 80%;
`;
