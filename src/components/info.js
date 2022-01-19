import styled from "styled-components";
import { theme } from "./theme";
import { StyledImage } from "./utils/utils";
import React from 'react';

const StyledInfo = styled.div`
display:grid;
grid-template-columns: 1fr;
row-gap: 0.1em;
@media only screen and (max-width: 700px) {
    &:not(:last-child){
        margin-bottom:6em;
    }
}
`;
const StyledTitle = styled.h3`
font-size:5em;
color:${theme.veryDarkCyan};
font-weight: 700;
`;
const StyledLabel= styled.p`
font-size:1em;
color:hsl(192deg 100% 9% / 43%);
font-weight: 300;
text-align: center;
`;
const IconContainer = styled.div`
width: 2.5em;
height: 2.5em;
`;
export const Info=({icon, title, subTitle})=>{

    return (
        <StyledInfo>
            <IconContainer><StyledImage src={icon} alt=""/></IconContainer>
            <StyledTitle>{title}</StyledTitle>
            <StyledLabel>{subTitle}</StyledLabel>
        </StyledInfo>
    );
}