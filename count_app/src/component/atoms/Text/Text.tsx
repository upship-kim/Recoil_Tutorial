import React from 'react';
import styled from 'styled-components';

interface TextArgs {
    text: string;
}

const Text: React.FC<TextArgs> = ({ text }) => {
    return <Default>{text}</Default>;
};

export default Text;

const Default = styled.span`
    color: navy;
    font-weight: 600;
    font-size: 14px;
`;
