import React from 'react';
import styled from 'styled-components';

interface ButtonArgs {
    text: string;
    onClick: () => void;
}

const Button = ({ onClick, text }: ButtonArgs) => {
    return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
    display: flex;
    align-items: center;
    border-radius: 2px;
    width: 100%;
    background: #5eb9ee;
    border: 1px solid #5eb9ee;
    padding: 6px 10px;
    justify-content: center;
    :active {
        font-weight: 900;
    }
    & {
        margin: 1rem;
    }
`;
