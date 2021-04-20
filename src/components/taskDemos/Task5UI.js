import React, { useState, useEffect } from 'react';
import BaseCard from '../UI/BaseCard';
import BaseTextInput from '../UI/BaseTextInput';
import BaseResult from '../UI/BaseResult';
import getDistance from '../../utils/task5';
import styled from 'styled-components';

const CardBody = styled.div`
    display: flex;
    flex-flow: column nowrap;

    h3 {
        margin: 0;
        font-size: 1.6em;
    }

    p {
        padding: 0;
    }
`;

const Vector2D = styled.div`
    margin-bottom: 1.5rem;

    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;

    div {
        margin-right: 1rem;
        width: 30%;
    }
`;

const Task5UI = () => {
    const [pointAx, setPointAx] = useState(0);
    const [pointAy, setPointAy] = useState(0);
    const [pointBx, setPointBx] = useState(0);
    const [pointBy, setPointBy] = useState(0);
    const [result, setResult] = useState(0);

    useEffect(() => {
        setResult(
            getDistance({ x: pointAx, y: pointAy }, { x: pointBx, y: pointBy })
        );
    }, [pointAx, pointAy, pointBx, pointBy]);

    const title = <h2>5. Cartesian Distance</h2>;

    const displayResult = () => {
        if (
            pointAx === '' ||
            pointAy === '' ||
            pointBx === '' ||
            pointBy === ''
        ) {
            return <BaseResult text="Please input values" />;
        } else {
            return <BaseResult label="Distance" text={result} />;
        }
    };

    return (
        <BaseCard cardHeader={title}>
            <CardBody>
                <p>
                    Given two object literals A and B being the two points
                    coordinates (​x​ and ​y​), implement a function that returns
                    the distance between the points and round to the nearest
                    thousandth.
                </p>

                <h3>Point A</h3>
                <Vector2D>
                    <BaseTextInput
                        field="x"
                        type="number"
                        value={pointAx}
                        setValue={setPointAx}
                    />
                    <BaseTextInput
                        field="y"
                        type="number"
                        value={pointAy}
                        setValue={setPointAy}
                    />
                </Vector2D>

                <h3>Point B</h3>
                <Vector2D>
                    <BaseTextInput
                        field="x"
                        type="number"
                        value={pointBx}
                        setValue={setPointBx}
                    />
                    <BaseTextInput
                        field="y"
                        type="number"
                        value={pointBy}
                        setValue={setPointBy}
                    />
                </Vector2D>

                {displayResult()}
            </CardBody>
        </BaseCard>
    );
};

export default Task5UI;
