import logo from '../../images/logo.svg';
import styled from 'styled-components'
import { StyledImage } from '../utils/utils';
import React from 'react';

const StyledImg = styled.img`
width:100%;
`;
const StyledImgWhite = styled(StyledImage)`
filter:  brightness(0) invert(1);
`;
const StyledContainer = styled.div`
width:10em;
height:2em;`;
export const Logo = ()=>(
<StyledContainer>
<StyledImg src={logo} alt="logo"/>
</StyledContainer>
);
export const WhiteLogo = ()=>(
<StyledContainer>
<StyledImgWhite src={logo} alt="logo"/>
</StyledContainer>
);
