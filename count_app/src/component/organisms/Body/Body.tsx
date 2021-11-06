import ControllBox from '../../molecules/ControllBox/ControllBox';
import CountViewBox from '../../molecules/CountViewBox/CountViewBox';
import React from 'react';
import styled from 'styled-components';

const Body = () => {
    return (
        <Container>
            <CountViewBox />
            <ControllBox />
        </Container>
    );
};

export default Body;

const Container = styled.div`
    width: 100%;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
