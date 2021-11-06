import './App.css';

import AnotherComponent from './component/pages/AnotherComponent';
import Count from './component/pages/Count';
import { RecoilRoot } from 'recoil';

function App() {
    return (
        <RecoilRoot>
            <Count />
            <AnotherComponent />
        </RecoilRoot>
    );
}

export default App;
