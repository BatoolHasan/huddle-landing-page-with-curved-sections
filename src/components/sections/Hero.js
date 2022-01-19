import styled from "styled-components";
import React from 'react';

import {  ParagraphMedium } from "../micro/Paragraphs";
import { Heading1 } from "../micro/Headings";
import { RoundButtonMedium} from "../micro/Buttons";
import { StyledImage } from "../utils/utils";
import { Info } from "../info";
import mockups from '../../images/screen-mockups.svg';
import communitiesIcon from "../../images/icon-communities.svg";
import messagesIcon from "../../images/icon-messages.svg";
const StyledHeroInfo = styled.div`
display:grid;
grid-template-columns:1fr;
row-gap: 2em;
text-align:center;
padding:2em;

`;
const StyledHero = styled.div`
display:grid;
grid-template-columns:1fr;
row-gap: 3em;
padding:4em 5em;
@media only screen and (max-width: 700px) {
    padding:3em 2em;
}
`;
const InfoContainer = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
@media only screen and (max-width: 700px) {
  flex-direction: column;
}
`;
const StyledParagraph = styled(ParagraphMedium)`
max-width:50ch;
margin:auto;`;
export const Hero =()=>{
    return (
        <StyledHero>
            <StyledHeroInfo>
                <Heading1>Build The Community Your Fans Will Love</Heading1>
                <StyledParagraph>
                        Huddle re-imagines the way we build communities. You have a voice, but so does 
                        your audience. Create connections with your users as you engage in genuine discussion. </StyledParagraph>
                        <div>
                            <RoundButtonMedium>Get Started For Free</RoundButtonMedium>
                        </div>
            </StyledHeroInfo>
            <StyledImage src={mockups} alt="mockups"/>
            <InfoContainer>
                <Info icon={communitiesIcon} title={"1.4k+"} subTitle={"Communities Formed"}/>
                <Info icon={messagesIcon} title={"2.7m+"} subTitle={"Messages Sent"}/>
            </InfoContainer>
        </StyledHero>
    );
}