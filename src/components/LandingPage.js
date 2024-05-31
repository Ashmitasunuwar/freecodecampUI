import React from 'react'
import '../css/assignment.css'
import ImageShow from './ImageShow'
import apple from '../images/apple3.svg'
import Google from '../images/google caps.svg'
import amazon from '../images/amazon.svg'
import microsoft from '../images/microsoft.svg'
import sportify from '../images/Black_Spotify_logo_with_text.svg'
import peers from '../personImages/peers.png'
import companies from '../personImages/companies.png'
import ProfileCard from './ProfileCard'
import steve from '../personImages/steve.png'
import emma from '../personImages/emma.png'
import sara from '../personImages/sarah.png'
import SignIn from './SignIn'
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer'
function LandingPage() {
    const navi = useNavigate();
    const handleDivClick = () => {
        console.log('landingpage div clicked')
        return navi('/signin');
    }
    return (
        <div className='wrapper'>

            <div className='sectionfirst'>
                <main >
                    <div className='sectionTop'>
                        <h1 className="big-heading ">Learn to code — for free.</h1>
                        <p className="big-heading" >Build projects.</p>
                        <p className="big-heading" >Earn certifications.</p>
                        <p className="heading1">Since 2014, more than 40,000 freeCodeCamp.org graduates have gotten jobs at tech companies including:</p>
                    </div>
                    <div className='imagesShow'><ImageShow imgsrc={apple} />
                        <ImageShow imgsrc={Google} />
                        <ImageShow imgsrc={microsoft} />
                        <ImageShow imgsrc={sportify} />
                        <ImageShow imgsrc={amazon} /></div>
                    <div className='singinlINK' onClick={handleDivClick}>
                        Get started (it's free)
                    </div>
                    <figure className='figure'>
                        <img className='peers' src={peers} loading='lazy' height={442} width={750} />
                        <figcaption className="caption">freeCodeCamp students at a local study group in South Korea.</figcaption>
                    </figure>
                </main>
            </div>
            <div className='divider'>
                <h2 class="big-heading" >As seen in:</h2>
                <img src={companies} />
            </div>
            <div className='divider1'><h2 class="big-heading" >Here is what our alumni say about freeCodeCamp:</h2></div>
            <div className='outerCard'>
                <div className='profileCardDiv'>

                    <ProfileCard imgsrc={steve} name='Shawn Wang' location='in Singapore' occupation='Software Engineer at' company='Amazon'
                        testimonyDesc='&ldquo;It&prime;s scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life.&rdquo; ' />
                </div>
            </div>
            <div className='outerCard'>
                <div className='profileCardDiv'>
                    <ProfileCard imgsrc={emma} name='Emma Bostian' location='in Sweden' occupation='Software Engineer at'
                        company='Spotify' testimonyDesc="I' ve always struggled with learning JavaScript. I've taken many courses but
                freeCodeCamp's course was the one
                which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp
                gave me the skills and confidence I needed to land my dream job as a software engineer at Sportify"/>

                </div>
            </div>
            <div className='outerCard'>
                <div className='profileCardDiv'>
                    <ProfileCard imgsrc={sara} name='Sarah Chima' location='in Nigeria' occupation='Software Engineer at' company='ChatDesk'
                        testimonyDesc='"freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company."' />
                </div>
            </div>
            <div className='singinlINK' onClick={handleDivClick}>
                Get started (it's free)
            </div>
            <div>
                <Footer />
            </div>

        </div>
    )
}

export default LandingPage