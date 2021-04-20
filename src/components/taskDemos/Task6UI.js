import React, { useState, useEffect } from 'react';
import BaseCard from '../UI/BaseCard';
import BaseTextArea from '../UI/BaseTextArea';
import BaseResult from '../UI/BaseResult';
import styled from 'styled-components';
import identicalFilter from '../../utils/task6';

const CardBody = styled.div`
    display: flex;
    flex-flow: column nowrap;

    p {
        padding: 0;
    }

    label {
        margin-top: 0.5rem;
    }

    p.note {
        margin: 0.5rem 0;
        padding-left: 1rem;

        font-size: 1.3rem;

        color: #555;
    }
`;

const Task6UI = () => {
    const [strings, setStrings] = useState('');
    const [result, setResult] = useState('');

    useEffect(() => {
        // remove spacess and split by commas
        const stringArray = strings.replace(/\s/g, '').split(',');
        const filtered = identicalFilter(stringArray).join(', ');

        setResult(filtered);
    }, [strings]);

    const title = <h2>6. Identical Filter</h2>;
    return (
        <BaseCard cardHeader={title}>
            <CardBody>
                <p>
                    Create a function that keeps only strings with repeating
                    identical characters.
                </p>
                <BaseTextArea
                    field="Add Strings"
                    value={strings}
                    setValue={setStrings}
                />
                <p className="note">Insert strings separated by commas.</p>
                <BaseResult label="Identical Strings" text={result} />
            </CardBody>
        </BaseCard>
    );
};

export default Task6UI;
