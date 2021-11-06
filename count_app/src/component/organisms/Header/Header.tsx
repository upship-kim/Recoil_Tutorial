import React from 'react';
import Text from '../../atoms/Text/Text';
import styled from 'styled-components';

const Header = () => {
    return (
        <Container>
            <Text text="Count App With Recoil" />
        </Container>
    );
};

export default Header;

const Container = styled.div`
    display: flex;
    background: white;
    width: 100%;
    height: 2rem;
    justify-content: center;
    align-items: center;
    span {
        font-size: 1.2rem;
    }
`;
