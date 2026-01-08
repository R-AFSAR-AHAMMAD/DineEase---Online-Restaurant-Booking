import "./App.css"

import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import PopularDishes from "./components/PopularDishes"
import Team from './components/Team'
import Reservation from './components/Reservation'
import Footer from './components/Footer'

const App = () => {
  return (
    <main className='main-container'>
      <Home />
      <AboutUs />
      <Services />
      <PopularDishes />
      <Team />
      <Reservation />
      <Footer />
    </main>
  )
}

export default App
