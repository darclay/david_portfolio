import './Home.css'
// import Banner from '../../components/banner/Banner'
import About from '../../components/about/About'
// import heroPhoto from '../../assets/pics/main_photo.jpg'
import Projects from '../../components/projects/Projects'
import background from '../../assets/pics/background.png'
import middleground from '../../assets/pics/middleground.png'
import foreground from '../../assets/pics/foreground.png'

export default function Home() {
  return (
    <div>
      <div className="scrollContainer">
        <header>  
          <img className="background" src={background}/>
          {/* <img className="middleground" src={middleground}/> */}
          <img className="foreground" src={foreground}/>
        </header>
        <section>
          <About/>
        </section>
        <Projects/>
      </div>      
    </div>
  )
}