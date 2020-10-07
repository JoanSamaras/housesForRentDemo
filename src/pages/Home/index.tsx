import React, { FC } from 'react';
import styled from 'styled-components';
import { fontSizes } from 'design-system/font-sizes';
import { imgHeights } from 'design-system/img-heights';
import { fontColours } from 'design-system/font-colours';
import logo from '../../logo.svg';

const FlexContainer = styled.div`
    display: flex;
    align-items: center;
`;

const Logo = styled.img`
    height: ${ imgHeights.h1 };
    pointer-events: none;
`;

const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Text = styled.span`
    font-size: ${ fontSizes.h1 };
    color: ${ fontColours.light };
`;

// #################################################################################

const Home: FC = () => (
    <FlexContainer>
        <Header>
            <Logo src={ logo } alt="logo" />
        </Header>
        <Text>
            Edit and save to reload.
        </Text>
    </FlexContainer>
);

export default Home;
