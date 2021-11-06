import Body from '../../organisms/Body/Body';
import Button from '../../atoms/Button/Button';
import Header from '../../organisms/Header/Header';
import Number from '../../atoms/Number/Number';
import React from 'react';
import RootWrapper from '../../atoms/RootWrapper/RootWrapper';
import Text from '../../atoms/Text/Text';
import styled from 'styled-components';

const CountTemplate = () => {
    return (
        <RootWrapper>
            <Container>
                <Header />
                <Body />
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
