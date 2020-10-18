import React, { Component } from 'react'; 
import styled from 'styled-components';
import { Marker as LeafletMarker, latLngBounds, LatLngLiteral } from 'leaflet';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { Popable } from 'types';

const MapContainer = styled.div`
    width: 100%;
    height: 100%;
    > .leaflet-container {
        height: 100%;
    }
`

// #########################################################################################################################

export type PolyMarker = {
    pos: LatLngLiteral
    letter: string
}

type Props = {
    center?: [ number, number ],
    markers?: ( LeafletMarker & Popable )[],
}

export class ReactLeafletMap extends Component<Props> {

    getRouteBounds = () => {
        const { markers } = this.props;

        if ( markers && markers.length > 1 ) {
            const prepare_bounds_arr = markers.map( elem => elem.getLatLng() );
            const bounds = latLngBounds( prepare_bounds_arr );

            const { lat: _lat, lng: _lng } = bounds.getSouthWest();
            const { lat, lng } = bounds.getNorthEast();

            if ( lat == _lat && lng == _lng ) {
                return undefined
            }
            return bounds;
        }
        return undefined;
    }

    render() {
        const { markers, center } = this.props;
        const bounds = !center ? this.getRouteBounds() : undefined;

        return (
            <MapContainer>
                <Map center={ center } 
                    zoom={ 14 } 
                    boundsOptions={{
                        maxZoom: 19 
                    }}
                    bounds={ bounds }>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    />
                    { markers &&
                        markers.map( ( marker, i ) => {
                            const pos = marker.getLatLng();
                            const { popup_element } = marker;

                            return (
                                <Marker 
                                    key={ i }
                                    position={[ pos.lat, pos.lng ]} >
                                    { popup_element &&
                                        <Popup>{ popup_element }</Popup> 
                                    }
                                </Marker>
                            )
                        } )
                    }
                </Map>
            </MapContainer>
        );
    }
}

export default ReactLeafletMap;