import React from 'react';
import RootWrapper from '../atoms/RootWrapper/RootWrapper';
import Text from '../atoms/Text/Text';
import { countAtom } from '../../utils/recoilState';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';

const AnotherComponent = () => {
    const [count, setCount] = useRecoilState(countAtom);
    return (
        <RootWrapper>
            <Text text={'recoil 상태를 공유 받고 있음(루트) '} />
            <Container>{count}</Container>
        </RootWrapper>
    );
};

export default AnotherComponent;

const Container = styled.div`
    display: flex;
    background: violet;
    width: 50%;
    justify-content: center;
    align-items: center;
    font-size: 4rem;
    flex: 1;
`;
