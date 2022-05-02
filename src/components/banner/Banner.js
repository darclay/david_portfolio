import './Banner.css'
import heroPhoto from '../../assets/pics/main_photo.jpg'

export default function Banner() {
  return (
    <div className="Banner">
      <img className="heroPhoto" src={heroPhoto}/>
    </div>
  )
}