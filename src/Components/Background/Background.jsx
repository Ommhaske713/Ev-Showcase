import './Background.css'
import video1 from '../../assets/video1.mp4'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import car_img3 from '../../assets/car_img3.jpg'
import image0 from '../../assets/image0.png'
import car_img1 from '../../assets/car_img1.jpg'
import car_img2 from '../../assets/car_img2.jpg'
import car_img4 from '../../assets/car_img4.jpg'





const Background = ({ playStatus, heroCount }) => {

  if (playStatus) {
    return (
    <video className='background fade-in' autoPlay loop muted><source src={video1} type='video/mp4' /></video>

    )
  }else if (heroCount===0) {
    return <img src={image0} className='background fade-in' alt="" />

  }
  else if (heroCount===1) {
    return <img src={image3} className='background fade-in' alt="" />

  }
  else if (heroCount===2) {
    return <img src={car_img3} className='background fade-in' alt="" />

  }
  

}

export default Background;
