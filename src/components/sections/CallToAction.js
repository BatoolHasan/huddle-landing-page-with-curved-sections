import { RoundButtonMedium } from "../micro/Buttons";
import { Heading2, Heading3 } from "../micro/Headings";
import styled from "styled-components";
const StyledCallToAction = styled.div`
display:grid;
row-gap:2em;
align-items:center;
justify-content:center;
padding:5em 4em;
background-color:white;
text-align: center;
@media only screen and (max-width: 700px) {
    padding:3em 2em;
}
`;
const StyledButtonContainer = styled.div`
display:flex;
align-items:center;
justify-content:center;`;
export const CallToAction = ()=>{
return (
    <StyledCallToAction>
        <Heading2>Reading To Build Your Community?</Heading2>
        <StyledButtonContainer>
            <RoundButtonMedium>Get Started For Free</RoundButtonMedium>
        </StyledButtonContainer>
    </StyledCallToAction>
);
}