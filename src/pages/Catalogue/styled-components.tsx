import styled from 'styled-components';
import { fontSizes } from 'design-system/font-sizes';
import { fontColours } from 'design-system/font-colours';

// eslint-disable-next-line
export const FlexContainer = styled.div`
    display: flex; 
    align-items: center;
`;

export const Text = styled.span`
    font-size: ${ fontSizes.h1 };
    color: ${ fontColours.medium };
`;
