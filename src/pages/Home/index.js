import { Link } from "react-router-dom"
import './index.css'

const Home = () => {
  return (
    <div className="home-container" 
    style={{ backgroundImage: `url(/Travel.png)`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'contain', height: '90vh', width: '90vw' }}
    >
      <h1 className="title">Want to make a travel plan?</h1>
      <Link to={'/travelapp'} className='link'>
        <button className="home-btn">Let's Go!!!</button>
      </Link>
    </div>
  )
}

export default Home