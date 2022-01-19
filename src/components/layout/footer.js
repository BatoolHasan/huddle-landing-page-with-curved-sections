import styled from "styled-components";
import { StyledImage } from "../utils/utils";
import { Newsletter } from "../sections/Newsletter";
import { ParagraphSmall } from "../micro/Paragraphs";
import {WhiteLogo} from '../micro/Logo';
import { Contact } from "../micro/Contact";
import { Socials } from "../sections/Socials";
import phoneIcon from "../../images/icon-phone.svg";
import emailIcon from "../../images/icon-email.svg";
import { theme } from "../theme";
import footerTopDesktop from "../../images/bg-footer-top-desktop.svg";
import footerTopMobile from "../../images/bg-footer-top-mobile.svg";
const StyledFooter = styled.div`
padding: 4em 4em;
display:flex;
justify-content: space-between;
align-items:center;
background-color: ${theme.veryDarkCyan};
@media only screen and (max-width: 700px) {
    flex-direction: column-reverse;
    padding: 3em 2em;
}
`;
const CurveContainer = styled.div`
display:flex;`;

const FooterInfo = styled.div`
display:grid;
row-gap: 1em;
margin-right: 2em;
@media only screen and (max-width: 700px) {
    margin-right: 0;
}
`;
const WhiteParagraph = styled(ParagraphSmall)`
color:white;
max-width:50ch;`;
export const Footer = ()=>{
return (
    <div>
        <CurveContainer>
            <StyledImage src={footerTopDesktop}  srcSet={`${footerTopMobile} 480w,
                ${footerTopDesktop} 800w`}
                sizes="(max-width: 600px) 480px,
                800px"alt=""/>
        </CurveContainer>
        <StyledFooter>
            <FooterInfo>
                <WhiteLogo/>
                <WhiteParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia 
  vestibulum a, ultrices quis sem.</WhiteParagraph>
            <Contact icon={phoneIcon} text={"Phone: +1-543-123-4567"}/>
            <Contact icon={emailIcon} text={"example@huddle.com"}/>
            <Socials/>
            </FooterInfo>
            <Newsletter/>
        </StyledFooter>
    </div>
);
}