import React, { FC } from 'react';
import { api } from 'services/api';
import { FlexContainer, Text } from './styled-components';

const Catalogue: FC = () => {
    const getListings = async () => {
        const res = await api.getHomeListings();

        // eslint-disable-next-line
        console.log( res );
    };

    return (
        <FlexContainer>
            <Text>Edit and save to reload.</Text>
            <button type="button" onClick={ getListings }>click me</button>
        </FlexContainer>
    );
};

export default Catalogue;
