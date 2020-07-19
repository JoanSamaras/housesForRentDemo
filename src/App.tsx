import React, { FC } from "react";
import logo from "./logo.svg";
import styled from "styled-components";
import { colour_map } from "./styles/colour-map";


const MainApp = styled.div`
    display: flex;
`

const Logo = styled.img`
    height: 40vmin;
    pointer-events: none;
`

const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${ colour_map.white };
`

// #################################################################################


const App: FC = () => {
    return (
        <MainApp>
            <Header>
                <Logo src={ logo } alt="logo" />
            </Header>
            <p>
                Edit and save to reload.
            </p>
        </MainApp>
    );
}

export default App;
