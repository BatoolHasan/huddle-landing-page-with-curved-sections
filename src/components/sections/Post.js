import styled from 'styled-components';
import React from 'react';

import {theme} from '../theme';
import backgroundTopDesktop1 from '../../images/bg-section-top-desktop-1.svg';
import backgroundTopDesktop2 from '../../images/bg-section-top-desktop-2.svg';
import backgroundBottomDesktop1 from '../../images/bg-section-bottom-desktop-1.svg';
import backgroundBottomDesktop2 from '../../images/bg-section-bottom-desktop-2.svg';
import backgroundTopMobile1 from '../../images/bg-section-top-mobile-1.svg';
import backgroundTopMobile2 from '../../images/bg-section-top-mobile-2.svg';
import backgroundBottomMobile1 from '../../images/bg-section-bottom-mobile-1.svg';
import backgroundBottommMbile2 from '../../images/bg-section-top-mobile-2.svg';
import { StyledImage } from '../utils/utils';
import { Heading3 } from '../micro/Headings';
import { ParagraphSmall } from '../micro/Paragraphs';


const StyledHeading3 = styled(Heading3)`
font-size:2em;`;
const CurveContainer = styled.div`
display:flex;`;
export const Post = ({post:{key, img, title, paragraph}})=>{
    const PostContainer = styled.div`
    background:${key%2===0?"white":`${theme.veryPaleBlue}`};
    padding:4em 4em;
    display:grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 4em;
    align-items: center;
    @media only screen and (max-width: 700px) {
    grid-template-columns: 1fr;
    row-gap:2em;
    padding:3em 2em;
}
`;
const PostInfoContainer = styled.div`
display:grid;
row-gap:2em;
grid-template-rows: min-content;
order:${key%2===0?2:"initial"};
@media only screen and (max-width: 700px) {
    order:2;
    text-align: center;
    padding:3em 2em;
}
`;
return (
    <div>
        <CurveContainer>
            {key===1&& <StyledImage src={backgroundTopDesktop1} srcSet={`${backgroundTopMobile1} 480w,
                ${backgroundTopDesktop1} 800w`}
                sizes="(max-width: 600px) 480px,
                800px" alt='photo'/>}
            {key===3&& <StyledImage src={backgroundTopDesktop2} srcset={`${backgroundTopMobile2} 480w,
                ${backgroundTopDesktop2} 800w`}
                sizes="(max-width: 600px) 480px,
                800px" alt='photo'/>}
        </CurveContainer>
        <PostContainer>
            <PostInfoContainer>
                <StyledHeading3>{title}</StyledHeading3>
                <ParagraphSmall>{paragraph}</ParagraphSmall>
            </PostInfoContainer>
            <StyledImage src={img}/>
        </PostContainer>
        <CurveContainer>
            {key===1&& <StyledImage src={backgroundBottomDesktop1} alt="photo"/>}
            {key===3&& <StyledImage src={backgroundBottomDesktop2} alt="photo"/>}
        </CurveContainer>
    </div>
);
}
