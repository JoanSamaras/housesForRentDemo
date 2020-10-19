import React, { FC, memo, useState, useCallback, useEffect } from 'react';
import { api } from 'services/api';
import { Grid } from '@material-ui/core';
import { CardItem } from './card-item';
import { HomeListing } from 'types';
import { spacings } from 'design-system/spacings';
import { PageTitle } from './styled-components';
import overline from 'assets/custom_svgs/homeOverline.svg';
import { AbsoluteDiv } from 'components/absolute-div';
import { zIndexes } from 'design-system/z-indexes';
import { Row } from 'components/row-column';
import { Filters } from './filters';

const Catalogue: FC = memo( () => {
    const [ listings, setListings ] = useState<HomeListing[]>( [] );
    const [ broker_name_set, setBrokerName ] = useState<Set<string>>( new Set() );
    const [ listing_area_set, setListingArea ] = useState<Set<string>>( new Set() );
    const [ listing_street_set, setListingStreet ] = useState<Set<string>>( new Set() );

    const getListings = useCallback( async () => {
        const res = await api.getHomeListings();
        
        if ( res ) {
            setListings( res );

            const name_set = new Set<string>();
            const area_set = new Set<string>();
            const street_set = new Set<string>();

            res.forEach( listing => {
                if ( !name_set.has( listing.name ) ) {
                    name_set.add( listing.name )
                }
                if ( !area_set.has( listing.address.city ) ) {
                    area_set.add( listing.address.city )
                }
                if ( !street_set.has( listing.address.street ) ) {
                    street_set.add( listing.address.street )
                }
            } )
            setBrokerName( name_set );
            setListingArea( area_set );
            setListingStreet( street_set );
        }
    }, [] );

    useEffect( () => {
        ( async () => await getListings() )();
    }, [] );

    return (
        <Grid 
            container 
            spacing={ 2 }
            style={{
                margin: 0
            }}
        >
            <PageTitle variant="h1">
                Catalogue
            </PageTitle>
            <AbsoluteDiv z_index={ zIndexes._1 }>
                <img 
                    src={ overline } 
                    style={{
                        width: '100%',
                        paddingLeft: '37em',
                        marginTop: '2em'
                    }}
                />
            </AbsoluteDiv>
            <Row>
                <Grid 
                    item 
                    xs={ 12 } 
                    style={{ 
                        display: 'flex',
                        marginTop: spacings._4 
                    }}
                >
                    <Filters 
                        broker_name_array={ Array.from( broker_name_set ) }
                        listing_area_array={ Array.from( listing_area_set ) }
                        listing_street_array={ Array.from( listing_street_set ) }
                    />

                    <Grid 
                        container 
                        justify="center" 
                        spacing={ 2 } 
                        style={{ 
                            position: 'relative',
                            zIndex: zIndexes._2,
                            height: '100%',
                            overflowY: 'auto', 
                            margin: 0
                        }}
                    >
                        { listings.map( value => 
                            <CardItem 
                                key={ value.id } 
                                home_listing={ value }
                            />
                        )}
                    </Grid>
                    
                </Grid>
            </Row>
        </Grid>
    );
} );

export default Catalogue;
