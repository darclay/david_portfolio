import './Projects.css'
import Laptop from '../../assets/pics/laptop.png'
import Mobile from '../../assets/pics/smartphone.png'
import RollDesktop from '../../assets/pics/RollDesktop.png'
import RollMobile from '../../assets/pics/RollMobile.png'
import hekatesDesktop from '../../assets/pics/hekatesDesktop.png'
import hekatesMobile from '../../assets/pics/hekatesMobile.png'
import EverfreeDesktop from '../../assets/pics/EverfreeDesktop.png'
import EverfreeMobile from '../../assets/pics/EverfreeMobile.png'
import CollisionCourseDesktop from '../../assets/pics/CollisionCourseDesktop.png'
import CollisionCourseMobile from '../../assets/pics/CollisionCourseMobile.png'
import PoopetratorDesktop from '../../assets/pics/PoopetratorDesktop.png'
import PoopetratorMobile from '../../assets/pics/PoopetratorMobile.png'

export default function Projects() {
  const projectData = [
    {
    projectName: "Lucky Roll of the Dice",
    projectSite: "https://lucky-dice-game.netlify.app/",
    githubSite: "https://github.com/darclay/dice-game",
    desktopPic: RollDesktop,
    mobilePic: RollMobile,
    toolsUsed: "JavaScript, HTML, CSS, Dom Manipulation, Git, Github, Netlify",
    miscInfo: "This site idea came from 'The Complete Javascript Course 2022'"
    },
    {
    projectName: "Hekates Bees",
    projectSite: "https://hekates-bees.netlify.app/",
    githubSite: "https://github.com/darclay/hekates_bees",
    desktopPic: hekatesDesktop,
    mobilePic: hekatesMobile,
    toolsUsed: "Reactjs, Hooks CSS, Ruby on Rails, PostgreSQL, Heroku, Netlify, Git, Github, JWT & Bcrypt(auth)",
    miscInfo: ""
    },
    {
    projectName: "Everfree Outdoors",
    projectSite: "https://everfree-outdoors.netlify.app/",
    githubSite: "https://github.com/darclay/EverFree-Outdoors",
    desktopPic: EverfreeDesktop,
    mobilePic: EverfreeMobile,
    toolsUsed: "React, CSS, MongoDB, Express, Whimsical, Heroku, Netlify, Asana, Git, Github, JWT & Bcrypt(auth)",
    miscInfo: "This is a group project completed during my time with General Assembly's Bootcamp."
    },
    {
    projectName: "Collision Course",
    projectSite: "https://collision-course.netlify.app/",
    githubSite: "https://github.com/darclay/COLLISION-COURSE",
    desktopPic: CollisionCourseDesktop,
    mobilePic: CollisionCourseMobile,
    toolsUsed: "JavaScript, HTML, CSS, NASA API, Figma, Postman, fetch, Promise Statements, JS Date method, Git, Github, Netlify",
    miscInfo: "This site demonstrates my working knowledge of connecting to an external API"
    },
    {
      projectName: "Poopetrator",
      projectSite: "https://poopetrator.netlify.app/",
      githubSite: "https://github.com/darclay/poopetrator",
      desktopPic: PoopetratorDesktop,
      mobilePic: PoopetratorMobile,
      toolsUsed: "React, Axios, Hooks, CSS, Airtable, Whimsical, Git, Github, Netlify",
      miscInfo: "This is a spoof site for people to document dog poop in their neighborhood.  PMVP is to move this to a mobile platform (i.e. React Native)"
      }
  ]

  return (
    <div className="ProjectsDiv">
      <div className="projectGroup">
        
        <div className="desktopView">
          <img className="desktopPic" src={Laptop}/>
          <img className="desktop" src={RollDesktop}/>
        </div>

        <div className="mobilePhoneView">
          <img className="mobilePic" src={RollMobile}/>
          <img className="mobile" src={Mobile}/>
        </div>

      </div>
    </div>

  )
}