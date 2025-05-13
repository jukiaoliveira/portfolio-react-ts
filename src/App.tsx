import Footer from './components/Footer/Footer'
import NavBar from './components/NavBar/NavBar'
import AboutSection from './pages/Home/sections/About/AboutSection'
import Hero from './pages/Home/sections/Hero/Hero'
import ProjectsSection from './pages/Home/sections/Projects/ProjectsSection'


const App = () => {

  return (
    <>
      <NavBar />
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <Footer />
    </>
  )
}

export default App
