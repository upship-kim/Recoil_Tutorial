import Number from '../../atoms/Number/Number';
import React from 'react';
import { countAtom } from '../../../utils/recoilState';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';

const CountViewBox = () => {
    const [count, setCount] = useRecoilState(countAtom);
    return (
        <Container>
            <Number count={count} />
        </Container>
    );
};

export default CountViewBox;

const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 2rem 1rem;
    justify-content: center;
    align-items: center;
`;
