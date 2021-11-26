import {  selector } from 'recoil';

import { countAtom } from './recoilState';

export const logHistorySelector = selector({
    key: 'logHistorySelector',
    get: ({ get }) => {
        let newCount = get(countAtom);
        return `변경된 값은 ${newCount} 입니다.`;
    },
    set: ({ set }, newValue) =>
        set(countAtom, Number(newValue) === 3 ? 0 : Number(newValue)),
});
