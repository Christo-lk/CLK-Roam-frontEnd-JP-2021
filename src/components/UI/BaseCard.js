import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
    padding: 2rem;
    border: solid 1px #ccc;
    border-radius: 5px;

    display: flex;
    flex-flow: column nowrap;

    & > div {
        display: flex;
        flex-flow: column nowrap;
        flex: 1 1 auto;
    }

    p {
        padding: 0;
        font-size: 1.6em;
    }
`;

const StyledHeader = styled.header`
    padding-bottom: 1rem;
    border-bottom: solid 1px #ccc;

    h2 {
        margin: 0;
        font-size: 2em;
    }
`;

const BaseCard = ({ cardHeader, children }) => {
    const headerContent = (
        <StyledHeader>
            {cardHeader ? cardHeader : <h2>Card Title</h2>}
        </StyledHeader>
    );

    const bodyContent = <div>{children ? children : <p>Card body...</p>}</div>;

    return (
        <StyledCard>
            {headerContent}
            {bodyContent}
        </StyledCard>
    );
};

export default BaseCard;
