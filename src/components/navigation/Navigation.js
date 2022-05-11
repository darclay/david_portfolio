import './Navigation.css'
import Resume from '../../assets/docs/david_gurule_resume_050422.pdf'

const linkStyle = {
  textDecoration: "none",
  color: "white"
}

export default function Navigation() {
  return (
    <div className="Nav">
     <ul className="navItems">
       <li>PROJECTS</li>
       <li><a className="resume" href={Resume} target="_blank" style={linkStyle}>RESUME</a></li>
      <li><a href="mailto:davidgurulejr@gmail.com?subject=Nice to meet you Dave..." style={linkStyle}>CONTACT</a></li>
     </ul>
    </div>
  )
}
