import './About.css'
import Navigation from '../navigation/Navigation'

export default function About() {
  return (
    <div>
      <Navigation/>

      <div className="aboutContainer">
        <h1 className="intro">Hello<br/>I'm Dave</h1>
        <p className="aboutContent">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
  )
}