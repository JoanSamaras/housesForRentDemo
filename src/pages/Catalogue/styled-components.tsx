import styled from 'styled-components';
import { fontSizes } from 'design-system/font-sizes';
import { fontColours } from 'design-system/font-colours';
import { Column } from 'components/row-column';
import { borderSizes } from 'design-system/border-sizes';
import { colours } from 'design-system/colours';
import { spacings } from 'design-system/spacings';
import { Card, Typography } from '@material-ui/core';

export const FlexContainer = styled.div`
    display: flex; 
    align-items: center;
`;

export const Text = styled.span`
    font-size: ${ fontSizes.h1 };
    color: ${ fontColours.medium };
`;

export const MapWrapper = styled.div`
    & .map {
        height: 11.2em;
    }
`

export const BrokerCardContainer = styled( Column )`
    display: flex;
    border-radius: ${ borderSizes._4 };
    border: ${ borderSizes._1 } solid ${ colours.info4 };
    padding: ${ spacings._3 };
    margin-top: ${ spacings._6 };
`

export const ListingCard = styled( Card )`
    width: 32.143em;
    height: 26em;
    display: flex;
    flex-direction: column;
    position: relative;
`

export const PageTitle = styled( Typography )`
    margin: ${ spacings._4 } 0 0 ${ spacings._12 };
`
