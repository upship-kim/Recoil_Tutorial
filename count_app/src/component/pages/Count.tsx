import CountTemplate from '../templates/CountTemplate/CountTemplate';
import React from 'react';
import RootWrapper from '../atoms/RootWrapper/RootWrapper';
import styled from 'styled-components';

const Count = () => {
    return (
        <Container>
            <CountTemplate />
        </Container>
    );
};

export default Count;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;
