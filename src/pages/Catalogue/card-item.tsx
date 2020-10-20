import React, { FC, memo, useState } from 'react';
import { Button, 
    CardActions, 
    CardContent, 
    Grid, 
    StylesProvider, 
    Typography } from '@material-ui/core';
import ReactLeafletMap from 'components/map';
import { marker, Marker } from 'leaflet';
import { BrokerCard } from './broker-card';
import { ListingCard, MapWrapper } from './styled-components';
import { HomeListing } from 'types';
import { LoremIpsum } from 'lorem-ipsum';
import { spacings } from 'design-system/spacings';
import { Column } from 'components/row-column';

const lorem = new LoremIpsum( {
    sentencesPerParagraph: {
        max: 8,
        min: 4
    },
    wordsPerSentence: {
        max: 16,
        min: 4
    }
} );

enum View {
    initial,
    map
}

type DemoMarker = {
    lat: string,
    lng: string
}

type Props = {
    home_listing: HomeListing
}

const createMarker = ( marker_details: DemoMarker ) => {
    const lat = Number( marker_details.lat ); 
    const lng = Number( marker_details.lng );
    const new_marker = marker( [ lat, lng ] );

    new_marker.bindPopup( 'LATITUDE: ' + lat + ' and LONGITUDE: ' + lng );
    return new_marker;
}

export const CardItem: FC<Props> = memo( p => {
    const { name, email, address, company } = p.home_listing;
    const [ view, setView ] = useState( View.initial );
    const [ open, setBrokerModalOpen ] = useState( false );
    const [ anchorEl, setAnchorEl ] = useState<HTMLButtonElement | null>( null );
    const [ listing_title, setListingTitle ] = useState( lorem.generateWords( 3 ) );
    const [ listing_description, setListingDescription ] = useState( lorem.generateSentences( 2 ) );
    
    const layers: Marker[] = [];

    layers.push( 
        createMarker( address.geo ) 
    )

    return (
        <Grid item style={{
            height: 'fit-content' 
        }}>
            <ListingCard>
                <CardContent
                    style={{
                        flexGrow: 1
                    }}
                >
                    <Typography color="textSecondary" gutterBottom>
                        { address.city }
                    </Typography>

                    { view === View.initial  
                        ? <Column>
                            <Typography variant="h5" component="h2">
                                { listing_title }
                            </Typography>
                            <Typography color="textSecondary">
                                Street: { address.street }, Zip-code: { address.zipcode }
                            </Typography>
                            <Typography 
                                variant="body2" 
                                component="p" 
                                style={{
                                    marginTop: spacings._2
                                }}
                            >
                                { listing_description }
                            </Typography>
                            <BrokerCard 
                                full_name={ name } 
                                email={ email } 
                            />
                        </Column>
                        : <MapWrapper>
                            <div className='map'>
                                <ReactLeafletMap 
                                    center={[ Number( address.geo.lat ), Number( address.geo.lng ) ]} 
                                    markers={ layers }
                                />
                            </div>
                            <BrokerCard 
                                full_name={ name } 
                                email={ email } 
                            />
                        </MapWrapper>
                    }
                </CardContent>

                <CardActions
                    style={{
                        flexShrink: 0
                    }}
                >
                    <Button size="small" onClick={ () => setView( View.initial ) }>
                        House details
                    </Button>
                    <Button size="small" onClick={ () => setView( View.map ) }>Location on the map</Button>
                </CardActions>

            </ListingCard>
        </Grid>
    )
} )