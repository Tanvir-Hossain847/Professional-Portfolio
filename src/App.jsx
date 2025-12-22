import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  // Auto scroll to top on page load/reload - Enhanced version
  useEffect(() => {
    // Function to scroll to top
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto' // Instant scroll, no smooth animation
      })
      // Fallback for older browsers
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }
    
    // Immediate scroll to top
    scrollToTop()
    
    // Set scroll restoration to manual to prevent browser from restoring position
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }
    
    // Additional scroll to top after DOM is fully loaded
    const timer = setTimeout(scrollToTop, 50)
    
    // Also scroll on window load event
    const handleLoad = () => scrollToTop()
    window.addEventListener('load', handleLoad)

    // Add smooth scroll class for navigation
    document.documentElement.classList.add('smooth-scroll')
    
    return () => {
      clearTimeout(timer)
      window.removeEventListener('load', handleLoad)
      document.documentElement.classList.remove('smooth-scroll')
    }
  }, [])

  return (
    <div className="App overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  )
}

export default App