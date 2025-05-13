import NavBar from './components/NavBar/NavBar'
import Home from './pages/Home/Home'
import AboutSection from './pages/Home/sections/About/AboutSection'
import Hero from './pages/Home/sections/Hero/Hero'


const App = () => {

  return (
    <>
      <NavBar />
      <Hero />
      <AboutSection />
    </>
  )
}

export default App
