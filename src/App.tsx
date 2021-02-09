import React, { FC } from 'react';
import styled from 'styled-components';
import AppRouter from 'Router';
import { StylesProvider } from '@material-ui/core';

const MainApp = styled.div`
    display: flex;
    align-items: center;
    flex-grow: 1;
`;

// #################################################################################

const App: FC = () => (
    <StylesProvider injectFirst>
        <MainApp>
            <AppRouter />
        </MainApp>
    </StylesProvider>
);

export default App;
