import { useState } from 'react'
import './Projects.css'
import Laptop from '../../assets/pics/laptop.png'
import Mobile from '../../assets/pics/smartphone.png'


export default function Projects({project, index}) {

   return (
    <div className="ProjectsDiv">
        <div 
          className="projectGroup">
          <div 
            key={index} 
            className="showMore hoverInfo"
          >
            <p id={index} className="projectDescription">{project.miscInfo}</p>
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