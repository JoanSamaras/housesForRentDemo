import React, { FC, useState } from 'react';
import { api } from 'services/api';
import { 
    Button, 
    Card, 
    CardActions, 
    CardContent, 
    Container, 
    CssBaseline, 
    Grid, 
    Typography 
} from '@material-ui/core';
import { CardItem } from './card-item';
import { HomeListing } from 'types';
import { spacings } from 'design-system/spacings';
import { PageTitle } from './styled-components';
import overline from 'assets/custom_svgs/homeOverline.svg';
import { AbsoluteDiv } from 'components/absolute-div';
import { zIndexes } from 'design-system/z-indexes';

const Catalogue: FC = () => {
    const [ listings, setListings ] = useState<HomeListing[]>( [] );

    const getListings = async () => {
        const res = await api.getHomeListings();
        
        if ( res ) {
            setListings( res );
        }
    };

    getListings();

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
                        paddingLeft: '36em',
                        marginTop: '2em'
                    }}
                />
            </AbsoluteDiv>
            <Grid 
                item 
                xs={ 12 } 
                style={{ 
                    display: 'flex',
                    marginTop: spacings._4 
                }}
            >
                <>
                    <CssBaseline />
                    <Container maxWidth="xs">
                        <Card>
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    Word of the Day
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    Hello World
                                </Typography>
                                <Typography color="textSecondary">
                                    adjective
                                </Typography>
                                <Typography variant="body2" component="p" style={{ fontFamily: 'inherit' }}>
                                    well meaning and kindly. {'"a benevolent smile"'}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Container>
                </>

                <Grid 
                    container 
                    justify="center" 
                    spacing={ 2 } 
                    style={{ 
                        position: 'relative',
                        zIndex: zIndexes._2 
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
        </Grid>
    );
};

export default Catalogue;
