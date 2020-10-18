import React, { FC, useState } from 'react';
import { Typography } from '@material-ui/core';
import { BrokerCardContainer } from './styled-components';
import { EmailIcon, UserIcon } from 'components/icons';
import { colours } from 'design-system/colours';
import { Row } from 'components/row-column';
import { fontWeights } from 'design-system/font-weights';
import { spacings } from 'design-system/spacings';

export const BrokerCard: FC<{ full_name: string, email: string }> = p => {
    return (
        <BrokerCardContainer>
            <Typography 
                variant="body2" 
                component="p" 
                style={{
                    fontFamily: 'inherit',
                    color: colours.info4,
                    fontWeight: fontWeights.medium
                }}
            >
                Broker's Details
            </Typography>
            <Row>
                <UserIcon color={ colours.info4 } />
                <Typography 
                    variant="body2" 
                    component="p" 
                    style={{
                        marginLeft: spacings._3 
                    }}
                >
                    { p.full_name }
                </Typography>
            </Row>
            <Row>
                <EmailIcon color={ colours.info4 } />
                <Typography 
                    variant="body2" 
                    component="p" 
                    style={{
                        marginLeft: spacings._3 
                    }}
                >
                    { p.email }
                </Typography>
            </Row>
        </BrokerCardContainer>
    )
}