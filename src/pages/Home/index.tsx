import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { fontSizes } from 'design-system/font-sizes';
import { imgHeights } from 'design-system/img-heights';
import { fontColours } from 'design-system/font-colours';
import logo from '../../logo.svg';
import { Column, Row } from 'components/row-column';
import { borderSizes } from 'design-system/border-sizes';
import { colours } from 'design-system/colours';
import { fontWeights } from 'design-system/font-weights';
import { spacings } from 'design-system/spacings';
import { Link } from 'react-router-dom';

const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    flex-grow: 1;   
`;

const Logo = styled.img`
    height: ${ imgHeights.h1 };
    pointer-events: none;
    margin-right: ${ spacings._3 };
`;

const LogoContainer = styled( Row )`
    width: 46rem;
    justify-content: flex-end;
    margin-bottom: ${ spacings._4 };
`

const HeaderWrapper = styled( Row )`
    border-top: ${ borderSizes._10 } solid ${ colours.grey9 };
    border-bottom: ${ borderSizes._2 } solid ${ colours.grey9 };
    display: flex;
    justify-content: center;
`

const ContentWrapper = styled( Row )`
    display: flex;
    justify-content: center;
`

const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 26rem;
    height: 15rem;
    justify-content: space-between;
`;

const Text = styled.span<{ margin_right?: string, italic?: boolean }>`
    font-size: ${ fontSizes.primary };
    color: ${ fontColours.dark };

    ${ p => p.margin_right && css`
        margin-right: ${ p.margin_right };
    ` }
    ${ p => p.italic && css`
        font-style: italic;
    ` }
`;

const Year = styled.p<{ vertical?: boolean, margin_right?: string }>`
    font-size: 5em;
    color: ${ colours.primary5 };
    font-weight: ${ fontWeights.extraBold };
    margin-top: ${ spacings._11 };

    ${ p => p.vertical && css`
        writing-mode: vertical-rl;
    ` }
    ${ p => p.margin_right && css`
        margin-right: ${ p.margin_right };
    ` }
`

const Title = styled.p`
    font-size: ${ fontSizes.h1 };
    font-weight: ${ fontWeights.extraBold };
    margin-bottom: 2.5rem;
`

const ParagraphWrapper = styled.span`
    margin: ${ spacings._3 } 0;
`

const ParagraphTitle = styled.p`
    font-size: ${ fontSizes.primary };
    font-weight: ${ fontWeights.bold };
    text-transform: uppercase;
    margin-bottom: ${ spacings._1 };
`

const StyledLink = styled( Link )`
    color: ${ colours.primary4 };
    cursor: pointer;
    display: flex;
    align-self: center;
    font-style: italic;
    text-decoration: none;
    font-weight: ${ fontWeights.bold };
    margin-top: ${ spacings._3 };
    :hover {
        color: ${ colours.primary7 };
    }
`


// #################################################################################

const Home: FC = () => (
    <FlexContainer>
        <LogoContainer align_center>
            <Logo src={ logo } alt='logo'/>
            <Text italic>Joan Samaras</Text>
        </LogoContainer>
        <HeaderWrapper full_width>
            <Header>
                <Row 
                    align_center 
                    style={{
                        marginTop: '1rem' 
                    }}
                >
                    <Year margin_right={ spacings._7 }>'20</Year>
                    <Title>Houses For Rent Demo</Title>
                </Row>
                <Row full_width space_between>
                    <Text>Created by: Joan Samaras</Text>
                    <Text>October 2020</Text>
                </Row>
            </Header>
        </HeaderWrapper>
        <ContentWrapper full_width>
            <Column 
                style={{
                    maxWidth: '20rem' 
                }}
            >
                <ParagraphWrapper>
                    <ParagraphTitle>What is this?</ParagraphTitle>
                    <p style={{
                        marginBottom: 0 
                    }}>
                        This is just a demo that shows a nice App design using tools like React, 
                        Typescript, Styled-components and a custom design system as well.
                    </p>
                </ParagraphWrapper>
                <ParagraphWrapper>
                    <ParagraphTitle>How about the other pages?</ParagraphTitle>
                    <span>
                        <p style={{
                            marginBottom: 0
                        }}>
                            There is just one more page, waiting for you to play with the filters and 
                            discover it! 
                        </p>
                        <StyledLink to='/catalogue'>Take me there &nbsp; &rarr;</StyledLink>
                    </span>
                </ParagraphWrapper>
            </Column>
            <Column>
                <Year vertical>2020</Year>
            </Column>
        </ContentWrapper>
    </FlexContainer>
);

export default Home;
