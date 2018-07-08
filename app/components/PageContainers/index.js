import styled from 'styled-components';

export const StyledPageWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding-top: 200px;
    background: white;
    flex-direction: column;
`;

export const StyledPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1200px;  
    padding: 4em 1em;
`;

export const StyledContainer = styled.div`
    @media (max-device-width: 900px){
        flex-direction: column;
    }
    display:flex;
    flex-direction: row;
`;
