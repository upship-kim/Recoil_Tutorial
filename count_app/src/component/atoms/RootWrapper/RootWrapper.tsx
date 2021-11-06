import React from 'react';
import styled from 'styled-components';

const RootWrapper: React.FC = ({ children }) => {
    return <Container>{children}</Container>;
};

export default RootWrapper;

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    flex: 1;
    height: 100vh;
    background: #e3e3e3;
`;
