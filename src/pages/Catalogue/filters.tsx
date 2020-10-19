import React, { FC, memo, useCallback, useState } from 'react';
import { Container, 
    CssBaseline, 
    FormControl, 
    InputLabel,
    Select, 
    Typography } from '@material-ui/core';
import { spacings } from 'design-system/spacings';
import { ButtonAsLink, FiltersBG, FiltersBorder, FiltersWrapper, FilterWrap } from './styled-components';
import { fontWeights } from 'design-system/font-weights';
import { zIndexes } from 'design-system/z-indexes';
import { AbsoluteDiv } from 'components/absolute-div';
import { Row } from 'components/row-column';
import { colours } from 'design-system/colours';

type Props = {
    broker_name_array: string[]
    listing_area_array: string[]
    listing_street_array: string[]
}

export const Filters: FC<Props> = memo( p => {

    const {
        broker_name_array,
        listing_area_array,
        listing_street_array
    } = p;

    const [ selected_broker, setBroker ] = useState( '' );
    const handleBrokerChange = ( event: React.ChangeEvent<{ value: unknown }> ) => {
        setBroker( event.target.value as string );
    };
    const [ selected_area, setArea ] = useState( '' );
    const handleAreaChange = ( event: React.ChangeEvent<{ value: unknown }> ) => {
        setArea( event.target.value as string );
    };
    const [ selected_street, setStreet ] = useState( '' );
    const handleStreetChange = ( event: React.ChangeEvent<{ value: unknown }> ) => {
        setStreet( event.target.value as string );
    };

    const clearFilters = useCallback( () => {
        setBroker( '' );
        setArea( '' );
        setStreet( '' )
    }, [] )

    return (
        <>
            <CssBaseline />
            <Container 
                maxWidth="xs"
                style={{
                    position: 'relative',
                    marginTop: spacings._3,
                    zIndex: zIndexes._2
                }}
            >
                <AbsoluteDiv>
                    <FiltersBG>
                        <FiltersBorder>
                            <FiltersWrapper>
                                <Row space_between>
                                    <Typography 
                                        variant="h5" 
                                        component="p" 
                                        style={{
                                            fontWeight: fontWeights.medium,
                                            marginBottom: spacings._6 
                                        }}
                                    >
                                        Filters
                                    </Typography>
                                    <ButtonAsLink
                                        text_italic
                                        hover_colour={ colours.info4 } 
                                        onClick={ clearFilters }
                                    >
                                        Clear all
                                    </ButtonAsLink>
                                </Row>
                                <FilterWrap>
                                    <Typography 
                                        variant="body2" 
                                        component="p"
                                        className="filter_helper_message"
                                    >
                                        Select a broker to display his / hers available listings
                                    </Typography>
                                    <FormControl variant="outlined" className="filter_form_control">
                                        <InputLabel htmlFor="outlined-broker-native-simple">Broker</InputLabel>
                                        <Select
                                            native
                                            value={ selected_broker }
                                            onChange={ handleBrokerChange }
                                            label="Broker"
                                            inputProps={{
                                                name: 'broker',
                                                id: 'outlined-broker-native-simple',
                                            }}
                                        >
                                            <option value=''></option>
                                            { broker_name_array.map( value =>
                                                <option key={ value } value={ value }>{ value }</option>
                                            )}
                                        </Select>
                                    </FormControl>
                                </FilterWrap>
                                <FilterWrap>
                                    <Typography 
                                        variant="body2" 
                                        component="p"
                                        className="filter_helper_message"
                                    >
                                        Select an area to display the available listings
                                    </Typography>
                                    <FormControl variant="outlined" className="filter_form_control">
                                        <InputLabel htmlFor="outlined-broker-native-simple">Area / City</InputLabel>
                                        <Select
                                            native
                                            value={ selected_area }
                                            onChange={ handleAreaChange }
                                            label="Area / City"
                                            inputProps={{
                                                name: 'area',
                                                id: 'outlined-broker-native-simple',
                                            }}
                                        >
                                            <option value=''></option>
                                            { listing_area_array.map( value =>
                                                <option key={ value } value={ value }>{ value }</option>
                                            )}
                                        </Select>
                                    </FormControl>
                                </FilterWrap>
                                <FilterWrap>
                                    <Typography 
                                        variant="body2" 
                                        component="p"
                                        className="filter_helper_message"
                                    >
                                        Select a street to display the available listings
                                    </Typography>
                                    <FormControl variant="outlined" className="filter_form_control">
                                        <InputLabel htmlFor="outlined-broker-native-simple">Street</InputLabel>
                                        <Select
                                            native
                                            value={ selected_street }
                                            onChange={ handleStreetChange }
                                            label="Street"
                                            inputProps={{
                                                name: 'street',
                                                id: 'outlined-broker-native-simple',
                                            }}
                                        >
                                            <option value=''></option>
                                            { listing_street_array.map( value =>
                                                <option key={ value } value={ value }>{ value }</option>
                                            )}
                                        </Select>
                                    </FormControl>
                                </FilterWrap>
                            </FiltersWrapper>
                        </FiltersBorder>
                    </FiltersBG>
                </AbsoluteDiv>
            </Container>
        </>
    )
} )