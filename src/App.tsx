import React, { FC } from 'react';
import styled from 'styled-components';
import AppRouter from 'Router';


const MainApp = styled.div`
    display: flex;
    align-items: center;
`

// #################################################################################


const App: FC = () => {
    return (
        <MainApp>
            <AppRouter />
        </MainApp>
    );
}

export default App;
