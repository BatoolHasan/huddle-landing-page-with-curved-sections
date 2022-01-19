import styled from "styled-components";
import { Heading3 } from "../micro/Headings";
import { ParagraphSmall } from "../micro/Paragraphs";
import {ButtonSmall} from "../micro/Buttons";
import { useState } from "react";
const StyledNewsletter = styled.div`
display:grid; 
row-gap:2em;
@media only screen and (max-width: 700px) {
    margin-bottom: 2em;
}
`;
const StyledInput = styled.input`
border:none;
border-radius:5px;
width:100%;
height:2em;
margin-right:2em;
border: 1px solid transparent;`;
const StyledInputContainer = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
height:100%;
width:100%;
`;
const WhiteHeading = styled(Heading3)`
color:white;
text-transform:uppercase;
font-weight:300;`;
const WhiteParagraph = styled(ParagraphSmall)`
color:white;
max-width:50ch;`;
const ErrorMessage = styled.p`
color:#d94848;;
font-size:0.7em;`;
const ConfirmationMessage = styled.p`
color:#54e154;;
font-size:0.7em;
display:none;`;

const StyledForm = styled.form`
display:flex;
align-items:center;
justify-content:space-between;`;
export const Newsletter = ()=>{
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [showError, setShowError] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const emailValidation=()=>{
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!email || regex.test(email) === false){
            setError("Check your email please");
            return false;
        }
        setError("");
        return true;
    }
    const handleChange = (event)=>{
        setEmail(event.target.value);
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        if(!emailValidation()){
            setShowError(true);
            setShowConfirmation(false);
        }else{
            setShowError(false);
            setShowConfirmation(true);
        }
    }
return (
    <StyledNewsletter>
        <WhiteHeading>Newsletter</WhiteHeading>
        <WhiteParagraph>To recieve tips on how to grow your community, sign up to our weekly newsletter. We’ll never 
send you spam or pass on your email address</WhiteParagraph>
            <div>
                
            <StyledForm onSubmit={handleSubmit}>
        <StyledInputContainer>
            <StyledInput type="text" value={email} onChange={handleChange}/>
            <ButtonSmall>Subscribe</ButtonSmall>
        </StyledInputContainer>
            </StyledForm>
        <ErrorMessage>{error}</ErrorMessage>
        <ConfirmationMessage className={showConfirmation && "visible"}>Subscribed!</ConfirmationMessage>
            </div>
    </StyledNewsletter>
);
}




