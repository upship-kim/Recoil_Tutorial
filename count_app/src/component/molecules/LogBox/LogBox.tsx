import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import Text from '../../atoms/Text/Text';
import { countAtom } from '../../../utils/recoilState';
import { logHistorySelector } from '../../../utils/logHistory';
import styled from 'styled-components';

type RowItemArg = {
    text: any;
};
interface LogListArgs {
    data: RowItemArg[];
    defaultValue: number;
}
const LogList = ({ data, defaultValue }: LogListArgs) => {
    return (
        <ul>
            {data.map((row: RowItemArg, index: number) => (
                <RowItem>
                    <Text
                        text={
                            index === 0
                                ? `기본 값은 ${defaultValue} 입니다.`
                                : row.text
                        }
                        key={index}
                    />
                </RowItem>
            ))}
        </ul>
    );
};
const LogBox = () => {
    const [count, setCount] = useRecoilState(countAtom);
    const value = useRecoilValue(logHistorySelector);
    const [history, setHistory] = useState<RowItemArg[]>([]);
    const [defaultValue, setDefaultValue] = useState<number>(count);

    useEffect(() => {
        setHistory([...history, { text: value }]);
    }, [value]);

    return (
        <Container>
            <Box>
                <LogList data={history} defaultValue={defaultValue} />
            </Box>
        </Container>
    );
};

export default LogBox;

const Container = styled.div`
    display: flex;
    width: 100%;
    flex: 1;
`;
const Box = styled.div`
    display: flex;
    flex: 1;
    width: 100%;
    margin: 1rem 3rem;
`;

const RowItem = styled.li`
    list-style: square;
`;
