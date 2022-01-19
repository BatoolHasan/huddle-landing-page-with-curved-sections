import styled from "styled-components";
import React from 'react';

const StyledFooter = styled.footer`
width:100%;
height: 3em;
margin-top:1em;
position:unset;
font-size:0.8em;
display: flex;
justify-content: center;
align-items: center;
background-color:${props=> props.theme.FontColor1};
& a:link{
color: ${props=> props.theme.FontColor3}
}
& a:visited{
color: ${props=> props.theme.FontColor3}
}
`
const Footer = ({challengeUrl, repoUrl})=>{ 
return (
<StyledFooter>
    <p>
        Challenge by <a href={challengeUrl}>Frontend Mentor</a>. 
            Coded by <a href={repoUrl}>Batool H.</a>
    </p>
</StyledFooter>
);
} 
export default Footer;