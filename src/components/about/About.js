import './About.css'
import Navigation from '../navigation/Navigation'

export default function About() {
  return (
    <div className="aboutDiv">
      <Navigation/>

      <div className="aboutContainer">
        <h1 className="intro">Hello<br/>I'm Dave</h1>
        <p className="aboutContent fade-in">Mountain Biker, Sender, Coder, Peopler?...are just a few words that represent me.  Hello again and nice to meet you.  I am a people person who spent the last 17 years in law enforcement. I take that same passion for helping others out on the streets and now code to help people virtually.  Outside of developing I enjoy being on an adventure with my wife, two boys, and two dogs (Bailey & Sage)  Check out some of my work below and don't hesitate to say hi.</p>
      </div>
    </div>
  )
}