import styled from 'styled-components';
import {theme} from '../theme';
const RoundButton= styled.button`
border-radius:20px;
background-color:${theme.pink};
color:white;
box-shadow:1px 5px 17px -2px rgba(0,0,0,0.20);
transition: 0.4s;
border:none;
cursor:pointer;
&:hover{
    box-shadow:1px 5px 17px -2px rgba(0,0,0,0.35);
    filter:brightness(1.2);
}
`;
export const RoundButtonMedium= styled(RoundButton)`
padding:1.5em 5.5em;
border-radius:30px;
font-size:0.9em;
font-weight: bold;
`;
export const ButtonSmall= styled(RoundButton)`
padding:0.7em 2em;
border-radius:7px;
`;
export const RoundButtonSmall= styled(RoundButton)`
padding:0.5em 1.7em;
font-size:0.8em;
background-color:white;
border: 1px solid ${theme.pink};
color:${theme.pink}
`;

