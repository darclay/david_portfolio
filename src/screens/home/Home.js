import './Home.css'
import projectData from '../../assets/data/Data.js'
import About from '../../components/about/About'
import Projects from '../../components/projects/Projects'
import background from '../../assets/pics/background.png'
import foreground from '../../assets/pics/foreground.png'
import frontground from '../../assets/pics/frontground.png'

export default function Home() {

  return (
    <div>
      <div className="scrollContainer">
        <header>  
          <img className="background" src={background}/>
          <img className="foreground" src={foreground}/>
          <img className="frontground" src={frontground}/>
        </header>
        <section>
          <About/>
        </section>
        <div className="projectDivContainer">
          {projectData.map((project, index)=>(
            <Projects key={index} project={project} index={index} />
            ))
          }
        </div>
      </div>      
    </div>
  )
}