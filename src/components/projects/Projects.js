import Laptop from '../../assets/pics/laptop.png'
import RollDesktop from '../../assets/pics/RollDesktop'
import RollMobile from '../../assets/pics/RollMobile'
import hekatesDesktop from '../../assets/pics/hekatesDesktop'
import hekatesMobile from '../../assets/pics/hekatesMobile'
import EverfreeDesktop from '../../assets/pics/EverfreeDesktop'
import EverfreeMobile from '../../assets/pics/EverfreeMobile'
import CollisionCourseDesktop from '../../assets/pics/CollisionCourseDesktop'
import CollisionCourseMobile from '../../assets/pics/CollisionCourseMobile'
import PoopetratorDesktop from '../../assets/pics/PoopetratorDesktop'
import PoopetratorMobile from '../../assets/pics/PoopetratorMobile'

export default function Projects() {
  const projectData = [
    {
    projectName: "Lucky Roll of the Dice",
    projectSite: "https://lucky-dice-game.netlify.app/",
    githubSite: "https://github.com/darclay/dice-game",
    desktopPic: RollDesktop,
    mobilePic: RollMobile,
    toolsUsed: "JavaScript, HTML, CSS, Dom Manipulation, Git, Github",
    miscInfo: "This site idea came from 'The Complete Javascript Course 2022'"
    },
    {
    projectName: "Hekates Bees",
    projectSite: "https://hekates-bees.netlify.app/",
    githubSite: "https://github.com/darclay/hekates_bees",
    desktopPic: hekatesDesktop,
    mobilePic: hekatesMobile,
    toolsUsed: "Reactjs, Hooks CSS, Ruby on Rails, PostgreSQL, JWT & Bcrypt(auth)",
    miscInfo: ""
    },
    {
    projectName: "Everfree Outdoors",
    projectSite: "https://everfree-outdoors.netlify.app/",
    githubSite: "https://github.com/darclay/EverFree-Outdoors",
    desktopPic: EverfreeDesktop,
    mobilePic: EverfreeMobile,
    toolsUsed: "React, CSS, MongoDB, Express, Whimsical, Asana, Git, Github, JWT & Bcrypt(auth)",
    miscInfo: "This is a group project completed during my time with General Assembly's Bootcamp."
    },
    {
    projectName: "Collision Course",
    projectSite: "https://collision-course.netlify.app/",
    githubSite: "https://github.com/darclay/COLLISION-COURSE",
    desktopPic: CollisionCourseDesktop,
    mobilePic: CollisionCourseMobile,
    toolsUsed: "JavaScript, HTML, CSS, NASA API, Figma, Postman, fetch, Promise Statements, JS Date method",
    miscInfo: "This site demonstrates my working knowledge of connecting to an external API"
    },
    {
      projectName: "Poopetrator",
      projectSite: "https://poopetrator.netlify.app/",
      githubSite: "https://github.com/darclay/poopetrator",
      desktopPic: PoopetratorDesktop,
      mobilePic: PoopetratorMobile,
      toolsUsed: "React, Axios, Hooks, CSS, ",
      miscInfo: "This is a spoof site for people to document dog poop in their neighborhood.  PMVP is to move this to a mobile platform (i.e. React Native)"
      }
  ]

  return (
    <div className="ProjectsDiv">
      <div className="projectGroup"></div>
    </div>

  )
}