import Button from '../../atoms/Button/Button';
import React from 'react';
import { countAtom } from '../../../utils/recoilState';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';

const ControllBox = () => {
    const [count, setCount] = useRecoilState(countAtom);
    const onIncrese = () => {
        setCount(() => count + 1);
    };
    const onDecrese = () => {
        setCount(() => count - 1);
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
