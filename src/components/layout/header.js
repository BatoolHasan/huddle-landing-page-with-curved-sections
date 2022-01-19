import styled from "styled-components";
import {Logo} from '../micro/Logo';
import React from 'react';

import { RoundButtonSmall } from "../micro/Buttons";
const StyledHeader = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
padding:4em 2em 3em 2em;
`;
export const Header = ()=>{
    return (
    <StyledHeader>
        <Logo/>
        <RoundButtonSmall>Try It Free</RoundButtonSmall>
    </StyledHeader>
    );
}