import styled from 'styled-components'
import { UserCircle as UserCircleSVG } from '@styled-icons/boxicons-solid/UserCircle'
import { Email as EmailSVG } from '@styled-icons/material/Email'
import { colours } from 'design-system/colours'
import { imgHeights } from 'design-system/img-heights'

export const UserIcon = styled( UserCircleSVG )<{ color?: string, height?: string }>`
    color: ${ p => p.color || colours.grey4 };
    height: ${ p => p.height || imgHeights.primary };
`

export const EmailIcon = styled( EmailSVG )<{ color?: string, height?: string }>`
    color: ${ p => p.color || colours.grey4 };
    height: ${ p => p.height || imgHeights.primary };
`