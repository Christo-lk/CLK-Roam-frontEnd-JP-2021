import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;

    label {
        padding: 0.5rem 0;
        font-size: 1.4em;
    }
`;

const BaseTextArea = ({ field, required = false, value, setValue }) => {
    const id =
        field.toLowerCase().split(' ').join('_') + new Date().toISOString();

    return (
        <InputContainer>
            <label htmlFor={id}>{field}</label>
            <textarea
                id={id}
                rows="5"
                required={required}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </InputContainer>
    );
};

BaseTextArea.propTypes = {
    field: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
    setValue: PropTypes.func.isRequired,
};

export default BaseTextArea;
