import { useRecoilState, useRecoilValue } from 'recoil';

import Button from '../../atoms/Button/Button';
import React from 'react';
import { countAtom } from '../../../utils/recoilState';
import { logHistorySelector } from '../../../utils/logHistory';
import styled from 'styled-components';

const ControllBox = () => {
    const count = useRecoilValue(countAtom);
    const [countSelect, setCountSelect] = useRecoilState(logHistorySelector);
    const onIncrese = () => {
        setCountSelect(() => count + 1);
    };
    const onDecrese = () => {
        setCountSelect(() => count - 1);
    };
    return (
        <Container>
            <Button text="+1" onClick={onIncrese} />
            <Button text="-1" onClick={onDecrese} />
        </Container>
    );
};

export default ControllBox;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;

    width: 60%;
`;
