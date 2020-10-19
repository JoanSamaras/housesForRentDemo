import styled, { css } from 'styled-components';

export const Row = styled.div<{ grow?: boolean, space_between?: boolean }>`
    position: relative;
    display: flex;
    flex-flow: row wrap;
    ${ p => p.grow && css`
        flex-grow: 1;
    ` }
    ${ p => p.space_between && css`
        justify-content: space-between;
    ` }
`

export const Column = styled.div<{ grow?: boolean, space_between?: boolean }>`
    position: relative;
    display: flex;
    flex-flow: column wrap;
    ${ p => p.grow && css`
        flex-grow: 1;
    ` }
    ${ p => p.space_between && css`
        justify-content: space-between;
    ` }
`