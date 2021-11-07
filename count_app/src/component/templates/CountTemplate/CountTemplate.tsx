import Body from '../../organisms/Body/Body';
import Header from '../../organisms/Header/Header';
import LogBox from '../../molecules/LogBox/LogBox';
import React from 'react';
import RootWrapper from '../../atoms/RootWrapper/RootWrapper';
import styled from 'styled-components';

const CountTemplate = () => {
    return (
        <RootWrapper>
            <Container>
                <Header />
                <Body />
                <LogBox />
            </Container>
        </RootWrapper>
    );
};

export default CountTemplate;

const Container = styled.div`
    width: 50%;
    height: 100%;
    border: 1px solid white;
    margin: 10rem;
`;
