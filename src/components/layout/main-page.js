import { Header } from "./header";
import {Hero} from '../sections/Hero';
import grow from '../../images/illustration-grow-together.svg';
import flow from '../../images/illustration-flowing-conversation.svg';
import users from '../../images/illustration-your-users.svg';
import {Post} from '../sections/Post';
import {CallToAction} from '../sections/CallToAction';
import { Footer } from "./footer";
import PersonalFooter from "../layout/personal/Footer";
const posts =[
    {
        img:grow,
        title:"Grow Together",
        paragraph:"Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form."
    },
    {
        img:flow,
        title:"Flowing Conversations",
        paragraph:"You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow."
    },
    {
        img:users,
        title:"Your Users",
        paragraph:"It takes no time at all to integrate Huddle with your app's authentication solution. This means,once signed in to your app, your users can start chatting immediately."
    },
];

  
  
export const MainPage = ()=>{
    return (
        <div>
            <Header/>
            <Hero/>
            {posts.map((post, i)=><Post key={i+1} post={{...post, key:i+1}}/>)}
            <CallToAction/>
            <Footer/>
            <PersonalFooter 
                challengeUrl={"https://www.frontendmentor.io/challenges/huddle-landing-page-with-curved-sections-5ca5ecd01e82137ec91a50f2"}
                repoUrl={"https://github.com/BatoolHasan/huddle-landing-page-with-curved-sections"}
            />
        </div>
    );
}