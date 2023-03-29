import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NotFoundPage from './pages/NotFoundPage'
import TravelApp from './pages/TravelApp'

const App = () => {
    return (
        <BrowserRouter>
          <Routes>
            <Route path='*' element={<NotFoundPage />}/>
            <Route path='/' element={<Home />} />
            <Route path="/travelapp" element={<TravelApp />} />
          </Routes>
        </BrowserRouter>
      );
}

export default App