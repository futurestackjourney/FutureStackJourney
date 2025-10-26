import LogoSection from './sections/LogoSection';
import Navbar from './components/Navbar';
import FeatureCards from './sections/FeatureCards';
import Hero from './sections/Hero';
import ShowcaseSection from './sections/ShowcaseSection';
import ExperiencesSection from './sections/ExperiencesSection';
import TechStack from './sections/TechStack';
import TestimonialsSection from './sections/TestimonialsSection';
import Contact from './sections/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
  <>
  <Navbar/>
  <Hero />
  <ShowcaseSection/>
  <LogoSection/>
  <FeatureCards/>
  <ExperiencesSection/>
  <TechStack/>
  <TestimonialsSection/>
  <Contact/>
  <Footer/>
  </>
  )
}

export default App