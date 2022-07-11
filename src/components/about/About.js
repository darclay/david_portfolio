import {useInView} from 'react-intersection-observer'
import './About.css'
import Navigation from '../navigation/Navigation'

export default function About() {
// below instead of using useEffect, useRef, and useState I used "npm install react-intersection-observer --save" and then imported at the top "import {useInView} from 'react-intersection-observer'".
//This allows me to use: "useInView()" hook.  I am duplicating them below and giving "ref" and "inView" specific names to use in the html below.  This creates a boolean when the ref becomes visible.

  // const {ref: aboutRef, inView: aboutIsVisible} = useInView()
  // const {ref: introRef, inView: introIsVisible} = useInView()  
  const [aboutRef, aboutIsVisible] = useInView({threshold: .75})
  const [introRef, introIsVisible] = useInView({threshold: .75}) 


  return (
    <div className="aboutDiv">
      <Navigation/>

      <div className="aboutContainer">
        <h1 ref={introRef} className={`intro ${introIsVisible ? 'introIsVisible' : 'introIsNotVisible'}`}>Hello<br/>I'm Dave</h1>
        <p ref={aboutRef} className={`aboutContent ${aboutIsVisible ? 'aboutIsVisible' : 'aboutIsNotVisible'}`}>Mountain Biker, Sender, Coder, Peopler?...are just a few words that represent me.  Hello again and nice to meet you.  I am a people person who spent the last 17 years in law enforcement. I take that same passion for helping others out on the streets and now code to help people virtually.  Outside of developing I enjoy being on an adventure with my wife, two boys, and two dogs (Bailey & Sage)  Check out some of my work below.</p>
      </div>
    </div>
  )
}