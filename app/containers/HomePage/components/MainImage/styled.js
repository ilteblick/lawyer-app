import styled from 'styled-components';

export const StyledImageContainer = styled.div`
    width: 100%;
    max-height: 700px;
    display: flex;
    align-items: ${(props) => props.align};
    overflow: hidden;
`;
