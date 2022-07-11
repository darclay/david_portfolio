import {useState} from 'react'
import './Projects.css'
import Laptop from '../../assets/pics/laptop.png'
import Mobile from '../../assets/pics/smartphone.png'


export default function Projects({project, index}) {
  const [githubIsHovered, setGithubIsHovered] = useState(false)
  const [siteIsHovered, setSiteIsHovered] = useState(false)
  
  function handleMouseHover (linkSelected){
    if (linkSelected === 'github'){
      setGithubIsHovered(true)
    }
    if(linkSelected === 'site'){
      setSiteIsHovered(true)
    } 
  }

  function handleMouseExit (linkSelected){
    if (linkSelected === 'github'){
      setGithubIsHovered(false)
    }
    if (linkSelected === 'site'){
      setSiteIsHovered(false)
    } 
  }

  return (
    <div className="ProjectsDiv">
        <div className="projectGroup">
          <div key={index} className="showMore hoverInfo">
            <p id={index} className="projectDescription">{project.miscInfo}</p>
            <p className="projectTools">{project.toolsUsed}</p>
            <a  className="githubLink" 
                onMouseEnter={()=> {handleMouseHover('github')}}
                onMouseLeave={()=> {handleMouseExit('github')}}
                href={project.githubSite} 
                target="_blank" 
                style={githubIsHovered ? {color: 'yellow', textDecoration: 'underline'} : {color: 'white', textDecoration: 'none'}}
            >
              LINK TO GITHUB
            </a>
            <br/>
            <a  className="siteLink" 
                onMouseEnter={()=>{handleMouseHover('site')}}
                onMouseLeave={()=>{handleMouseExit('site')}}
                href={project.projectSite} 
                target="_blank" 
                style={siteIsHovered ? {color: 'yellow', textDecoration: 'underline'} : {color: 'white', textDecoration: 'none'}}
            >
              LINK TO SITE
            </a>
          </div> 

          <div className="desktopView">
            <img className="desktopPic" src={project.desktopPic}/>
            <img className="desktop" src={Laptop}/>
          </div>
          
          <div className="mobilePhoneView">
            <img className="mobilePic" src={project.mobilePic}/>
            <img className="mobile" src={Mobile}/>
          </div>
        </div>
     </div>
  )
}