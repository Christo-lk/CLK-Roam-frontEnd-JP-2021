import React, { useState, useEffect } from 'react';
import BaseCard from '../UI/BaseCard';
import BaseTextInput from '../UI/BaseTextInput';
import BaseResult from '../UI/BaseResult';
import divisibleBy10 from '../../utils/task2';
import styled from 'styled-components';

const CardBody = styled.div`
    display: flex;
    flex-flow: column nowrap;
    flex: 1 1 auto;

    p {
        padding: 0;
    }

    label {
        margin-top: 0.5rem;
    }
`;

const Task2UI = () => {
    const [value, setValue] = useState(0);
    const [result, setResult] = useState('True');

    useEffect(() => {
        setResult(divisibleBy10(value) ? 'True' : 'False');
    }, [value]);

    const title = <h2>2. Divisible by 10</h2>;

    const displayResult = () => {
        if (value === '') {
            return <BaseResult text="Please input value" />;
        } else {
            return <BaseResult label="Result" text={result} />;
        }
    };

    return (
        <BaseCard cardHeader={title}>
            <CardBody>
                <p>
                    Create a function that takes an integer and returns true if
                    it's divisible by 10, otherwise return false.
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

export default Task2UI;
