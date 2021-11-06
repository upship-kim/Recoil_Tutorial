import React from 'react';
import styled from 'styled-components';
interface NumberArgs {
    count: number;
}
const Number = ({ count }: NumberArgs) => {
    return <StyledText>{count}</StyledText>;
};

export default Number;

const StyledText = styled.h2`
    color: gray;
    font-size: 3rem;
`;
