import './Home.css'
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
        <Projects/>
      </div>      
    </div>
  )
}