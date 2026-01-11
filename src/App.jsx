import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Lenis from 'lenis'
import Loading from './components/Loading'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isContentReady, setIsContentReady] = useState(false)

  // Initialize Lenis smooth scrolling
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2, // Duration of the smooth scroll animation
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function
      direction: 'vertical', // Scroll direction
      gestureDirection: 'vertical', // Gesture direction
      smooth: true, // Enable smooth scrolling
      mouseMultiplier: 1, // Mouse wheel sensitivity
      smoothTouch: false, // Disable smooth scrolling on touch devices for better performance
      touchMultiplier: 2, // Touch sensitivity
      infinite: false, // Disable infinite scrolling
    })

    // Make Lenis globally available
    window.lenis = lenis

    // Animation frame loop for Lenis
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    // Auto scroll to top on page load/reload
    const scrollToTop = () => {
      lenis.scrollTo(0, { immediate: true })
    }
    
    // Immediate scroll to top
    scrollToTop()
    
    // Set scroll restoration to manual
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }
    
    // Additional scroll to top after DOM is fully loaded
    const timer = setTimeout(scrollToTop, 50)
    
    // Also scroll on window load event
    const handleLoad = () => scrollToTop()
    window.addEventListener('load', handleLoad)

    // Cleanup function
    return () => {
      clearTimeout(timer)
      window.removeEventListener('load', handleLoad)
      window.lenis = null // Clean up global reference
      lenis.destroy() // Clean up Lenis instance
    }
  }, [])

  // Handle loading completion
  useEffect(() => {
    // Simulate content loading (fonts, images, etc.)
    const contentTimer = setTimeout(() => {
      setIsContentReady(true)
    }, 2000) // Minimum loading time

    // Also wait for window load event
    const handleWindowLoad = () => {
      setIsContentReady(true)
    }

    if (document.readyState === 'complete') {
      setIsContentReady(true)
    } else {
      window.addEventListener('load', handleWindowLoad)
    }

    return () => {
      clearTimeout(contentTimer)
      window.removeEventListener('load', handleWindowLoad)
    }
  }, [])

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <div className="App overflow-x-hidden">
      <AnimatePresence mode="wait">
        {isLoading && isContentReady && (
          <Loading key="loading" onLoadingComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>
      
      {!isLoading && (
        <>
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </>
      )}
    </div>
  )
}

export default App