/* eslint-disable import/prefer-default-export */

import Axios from 'axios';
import { EventEmitter } from 'events';
import { HomeListing } from 'types';

const ev = new EventEmitter();

const Get = <REQ, RES>( url: string ) => async ( req: REQ ) => {
    try {
        const resp = await Axios.get( url, {
            params: req,
        } );

        return resp.data as RES;
    } catch ( error ) {
        ev.emit( 'error', error );
        console.error( error );
        return null;
    }
};

export const api = {
    getHomeListings: Get<void, HomeListing[]>( 'https://jsonplaceholder.typicode.com/users' ),
};
