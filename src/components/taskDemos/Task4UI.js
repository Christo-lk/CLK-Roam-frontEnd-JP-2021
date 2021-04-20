import React, { useState, useEffect } from 'react';
import BaseCard from '../UI/BaseCard';
import BaseTextInput from '../UI/BaseTextInput';
import BaseResult from '../UI/BaseResult';
import triangleArea from '../../utils/task4';
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

const Task4UI = () => {
    const [valueA, setValueA] = useState(0);
    const [valueB, setValueB] = useState(0);
    const [valueC, setValueC] = useState(0);
    const [result, setResult] = useState('True');

    useEffect(() => {
        setResult(triangleArea(valueA, valueB, valueC));
    }, [valueA, valueB, valueC]);

    const title = <h2>4. Triangle Area</h2>;

    const displayResult = () => {
        if (valueA === '' || valueB === '' || valueC === '') {
            return <BaseResult text="Please input values" />;
        } else if (isNaN(result)) {
            return (
                <BaseResult text="Triangle does not exist, please try again" />
            );
        } else {
            return <BaseResult label="Area" text={result} />;
        }
    };

    return (
        <BaseCard cardHeader={title}>
            <CardBody>
                <p>
                    Create a function to calculate a triangle area using its 3
                    sides.
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

export default Task4UI;
