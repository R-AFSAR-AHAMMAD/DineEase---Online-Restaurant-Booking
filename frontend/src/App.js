import "./App.css"

import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import Team from './components/Team'
import Reservation from './components/Reservation'
import Footer from './components/Footer'

const App = () => {
  return (
    <main className='main-container'>
      <Home />
      <AboutUs />
      <Services />
      <Team />
      <Reservation />
      <Footer />
    </main>
  )
}

export default App
