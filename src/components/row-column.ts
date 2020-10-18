import styled, { css } from 'styled-components';

export const Row = styled.div<{ grow?: boolean }>`
    position: relative;
    display: flex;
    flex-flow: row wrap;
    ${ p => p.grow && css`
        flex-grow: 1;
    ` }
`

export const Column = styled.div<{ grow?: boolean }>`
    position: relative;
    display: flex;
    flex-flow: column wrap;
    ${ p => p.grow && css`
        flex-grow: 1;
    ` }
`