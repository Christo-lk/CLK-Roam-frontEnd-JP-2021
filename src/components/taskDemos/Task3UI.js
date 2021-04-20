import React, { useState, useEffect } from 'react';
import BaseCard from '../UI/BaseCard';
import BaseTextInput from '../UI/BaseTextInput';
import BaseResult from '../UI/BaseResult';
import isOdd from '../../utils/task3';
import styled from 'styled-components';

const CardBody = styled.div`
    display: flex;
    flex-flow: column nowrap;

    p {
        padding: 0;
    }

    label {
        margin-top: 0.5rem;
    }
`;

const Task3UI = () => {
    const [value, setValue] = useState(0);
    const [result, setResult] = useState('True');

    useEffect(() => {
        setResult(isOdd(value) ? 'True' : 'False');
    }, [value]);

    const title = <h2>3. Odd Number</h2>;

    const displayResult = () => {
        if (value === '') {
            return <BaseResult text="Please input values" />;
        } else {
            return <BaseResult label="Result" text={result} />;
        }
    };

    return (
        <BaseCard cardHeader={title}>
            <CardBody>
                <p>
                    Create a function to take a number and return true if it is
                    an odd number.
                </p>
                <BaseTextInput
                    field="Value"
                    type="number"
                    value={value}
                    setValue={setValue}
                />
                {displayResult()}
            </CardBody>
        </BaseCard>
    );
};

export default Task3UI;
