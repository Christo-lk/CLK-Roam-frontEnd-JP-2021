import React, { useState, useEffect } from 'react';
import BaseCard from '../UI/BaseCard';
import BaseTextInput from '../UI/BaseTextInput';
import BaseResult from '../UI/BaseResult';
import lessThan1000 from '../../utils/task1';
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

const Task1UI = () => {
    const [valueA, setValueA] = useState(0);
    const [valueB, setValueB] = useState(0);
    const [valueC, setValueC] = useState(0);
    const [result, setResult] = useState('True');

    useEffect(() => {
        setResult(lessThan1000(valueA, valueB, valueC) ? 'True' : 'False');
    }, [valueA, valueB, valueC]);

    const title = <h2>1. Less than 1000?</h2>;

    const displayResult = () => {
        if (valueA === '' || valueB === '' || valueC === '') {
            return <BaseResult text="Please input values" />;
        } else {
            return <BaseResult label="Result" text={result} />;
        }
    };

    return (
        <BaseCard cardHeader={title}>
            <CardBody>
                <p>
                    Given three numbers, return true if the sum of the numbers
                    is less than 1000. Otherwise return false.
                </p>
                <BaseTextInput
                    field="Value A"
                    type="number"
                    value={valueA}
                    setValue={setValueA}
                />
                <BaseTextInput
                    field="Value B"
                    type="number"
                    value={valueB}
                    setValue={setValueB}
                />
                <BaseTextInput
                    field="Value C"
                    type="number"
                    value={valueC}
                    setValue={setValueC}
                />
                {displayResult()}
            </CardBody>
        </BaseCard>
    );
};

export default Task1UI;
