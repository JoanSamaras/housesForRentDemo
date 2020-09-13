import React, { FC } from 'react';
import styled from 'styled-components';
import { fontSizes } from 'design-system/font-sizes';
import { fontColours } from 'design-system/font-colours';


const FlexContainer = styled.div`
    display: flex;
    align-items: center;
`

const Text = styled.span`
    font-size: ${ fontSizes.h1 };
    color: ${ fontColours.medium };
`

// #################################################################################


export const Catalogue: FC = () => {
    return (
        <FlexContainer>
            <Text>
                Edit and save to reload.
            </Text>
        </FlexContainer>
    );
}