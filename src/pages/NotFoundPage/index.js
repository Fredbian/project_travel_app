import { Link } from "react-router-dom"
import './index.css'

const NotFound = () => {
  return (
    <>
      <h1 className="notFound-title">Uh oh, that page doesn't exist!!</h1>
      <p className="notFound-message">Please go bakc to <Link to={'/'}>Home</Link> page!</p>
    </>
  )
}

export default NotFound