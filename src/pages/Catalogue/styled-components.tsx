import styled, { css } from 'styled-components';
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

export const FiltersBG = styled.div`
    background-color: ${ colours.grey1 };
    padding: ${ spacings._7 } ${ spacings._7 } 0 ${ spacings._7 };
    height: 100%;
    position: relative;
    display: flex;
`

export const FiltersBorder = styled.div`
    padding: ${ spacings._3 } ${ spacings._3 } 0 ${ spacings._3 };
    border-radius: ${ borderSizes._1 };
    border: ${ borderSizes._1 } solid ${ colours.info2 };
    border-bottom: none;
    width: 100%;
    display: flex;
`

export const FiltersWrapper = styled.div`
    background-color: ${ colours.grey9 };
    padding: ${ spacings._5 } ${ spacings._5 } 0 ${ spacings._5 };
    flex-grow: 1;
    color: ${ colours.grey1 };
    width: 100%;
    display: flex;
    flex-flow: column wrap;
`

export const FilterWrap = styled.div`
    background-color: ${ colours.grey1 };
    padding: ${ spacings._7 };
    border-radius: ${ borderSizes._3 };
    border: none;
    display: flex;
    flex-flow: row wrap;
    margin-bottom: ${ spacings._6 };
    color: ${ colours.grey9 };
    align-items: center;
    justify-content: space-between;

    & .filter_helper_message {
        display: flex;
        margin-right: ${ spacings._6 };
        max-width: 10.714rem;
    }

    & .filter_form_control {
        width: 12.143rem;
    }
`

export const ButtonAsLink = styled.div<{ text_italic?: boolean, hover_colour?: string }>`
    color: ${ colours.grey1 };
    cursor: pointer;
    display: flex;
    align-self: center;

    ${ p => p.text_italic && css`
        font-style: italic;
    ` }
    ${ p => p.hover_colour && css`
        :hover {
            color: ${ p.hover_colour };
        }
    ` }
`
