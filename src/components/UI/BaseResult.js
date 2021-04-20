import React from 'react';
import styled from 'styled-components';

const Result = styled.div`
    margin: 2rem 0 0 0;
    padding: 1rem 0;
    background-color: #eee;
    border-radius: 5px;

    p {
        margin: 0;
        padding: 0 1rem;
        font-size: 1.6em;
        text-align: center;
    }
`;

const BaseResult = ({ label, text }) => {
    return (
        <Result>
            <p>
                {label && <strong>{label}:</strong>} {text}
            </p>
        </Result>
    );
};

export default BaseResult;
