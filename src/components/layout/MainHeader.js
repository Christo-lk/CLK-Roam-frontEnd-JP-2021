import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
    border-bottom: solid 1px #ccc;
`;

const Title = styled.h1`
    margin: 1rem 0 1rem 2rem;
    font-size: 2.8em;
`;

const MainHeader = (props) => {
    const { children } = props;
    return (
        <StyledHeader>
            {children ? children : <Title>Title</Title>}
        </StyledHeader>
    );
};

export default MainHeader;
