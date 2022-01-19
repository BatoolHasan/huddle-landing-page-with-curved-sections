import {FacebookIcon, InstagramIcon, TwitterIcon} from "../micro/Social";
import styled from "styled-components";
const StyledSocials = styled.div`
display:grid;
column-gap:1em;
grid-template-columns:repeat(3, max-content);
margin-top:2em;`
;
export const Socials = ()=>{
    return (
        <StyledSocials>
            <FacebookIcon/>
            <InstagramIcon/>
            <TwitterIcon/>
        </StyledSocials>
    );
}