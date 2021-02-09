import styled, { css } from 'styled-components';

export const AbsoluteDiv = styled.div<{ z_index?: number }>`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    ${ p => p.z_index && css`
        z-index: ${ p.z_index };
    ` }
`