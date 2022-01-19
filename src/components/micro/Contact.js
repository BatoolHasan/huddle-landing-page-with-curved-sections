import styled from 'styled-components';
import { WhiteIcon } from '../utils/utils';
import React from 'react';

const StyledText = styled.p`
color:white;
font-size:0.8em;
margin-left:0.5em;`;
const StyledContact = styled.div`
display:grid;
column-gap: 0.5em;
align-items:center;
grid-template-columns: repeat(2, max-content);
`;
export const Contact = ({icon, text})=>{
    return (
    <StyledContact>
        <WhiteIcon>
            <img src={icon} alt="icon"/>
        </WhiteIcon>
        <StyledText>{text}</StyledText>
    </StyledContact>
    );
}