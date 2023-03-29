import { Link } from "react-router-dom"
import './index.css'

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="title">Want to make a travel plan?</h1>
      <Link to={'/travelapp'} className='link'>
        <button className="home-btn">Let's Go!!!</button>
      </Link>
    </div>
  )
}

export default Home