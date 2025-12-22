import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

// Smooth easing curve for all animations
const smoothEase = [0.25, 0.1, 0.25, 1]

// Smooth scroll function with animation preservation
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    // Use requestAnimationFrame to ensure smooth scrolling doesn't interfere with animations
    requestAnimationFrame(() => {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }
}

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [isVisible, setIsVisible] = useState(false)
  const [navbarTheme, setNavbarTheme] = useState('dark') // 'dark' or 'light'

  // Section background mapping
  const sectionThemes = {
    'home': 'dark',    // black background
    'about': 'light',  // white background
    'skills': 'dark',  // black background
    'work': 'light',   // white background
    'experience': 'dark', // black background
    'contact': 'dark'  // black background
  }

  // Track active section and navbar visibility based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const heroHeight = window.innerHeight * 0.5 // Show navbar after 50% of hero section
      
      // Show/hide navbar based on scroll position
      setIsVisible(scrollPosition > heroHeight)
      
      // Track active section
      const sections = ['home', 'about', 'skills', 'work', 'experience', 'contact']
      const scrollWithOffset = scrollPosition + 150 // Offset for better detection

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i])
        if (element && element.offsetTop <= scrollWithOffset) {
          setActiveSection(sections[i])
          setNavbarTheme(sectionThemes[sections[i]] || 'dark')
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Dynamic navbar styling based on section theme
  const navbarStyles = navbarTheme === 'light' ? {
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(12px)',
    borderColor: 'rgba(132, 42, 59, 0.2)',
    logoColor: '#842A3B',
    textColor: '#000000',
    textColorActive: '#842A3B',
    glowColor: 'rgba(132, 42, 59, 0.8)',
    underlineColor: '#842A3B',
    highlightColor: '#842A3B',
    borderGradient: 'from-transparent via-[#842A3B] to-transparent'
  } : {
    background: 'rgba(0, 0, 0, 0.9)',
    backdropFilter: 'blur(12px)',
    borderColor: 'rgba(132, 42, 59, 0.2)',
    logoColor: '#F5DAA7',
    textColor: '#ffffff',
    textColorActive: '#F5DAA7',
    glowColor: 'rgba(245, 218, 167, 0.8)',
    underlineColor: '#F5DAA7',
    highlightColor: '#F5DAA7',
    borderGradient: 'from-transparent via-[#842A3B] to-transparent'
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0
      }}
      transition={{ 
        duration: 0.3, 
        ease: smoothEase,
        type: "spring",
        stiffness: 300,
        damping: 30
      }}
      className="fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300"
      style={{
        background: navbarStyles.background,
        backdropFilter: navbarStyles.backdropFilter,
        borderColor: navbarStyles.borderColor
      }}
    >
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.button
          onClick={() => scrollToSection('home')}
          whileHover={{ 
            scale: 1.1,
            textShadow: `0 0 20px ${navbarStyles.glowColor}`
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 15
          }}
          className="relative text-xl font-bold tracking-wider cursor-pointer group bg-transparent border-none transition-colors duration-300 isolate"
          style={{ color: navbarStyles.logoColor, isolation: 'isolate' }}
        >
          {/* Glow effect behind logo - isolated */}
          <motion.div
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-colors duration-300 pointer-events-none"
            style={{ backgroundColor: navbarStyles.logoColor, isolation: 'isolate' }}
            whileHover={{ scale: 1.5 }}
            transition={{ duration: 0.3, type: "tween" }}
          />
          <span className="relative z-10">TH</span>
        </motion.button>

        {/* Navigation Links */}
        <div className="flex space-x-8">
          {[
            { name: 'Home', id: 'home' },
            { name: 'About', id: 'about' },
            { name: 'Skills', id: 'skills' },
            { name: 'Work', id: 'work' },
            { name: 'Experience', id: 'experience' },
            { name: 'Contact', id: 'contact' }
          ].map((item) => (
            <motion.button
              key={item.name}
              onClick={() => scrollToSection(item.id)}
              whileHover={{ 
                y: -2, 
                color: navbarStyles.textColorActive,
                textShadow: `0 5px 15px ${navbarStyles.glowColor.replace('0.8', '0.5')}`,
                scale: 1.05
              }}
              whileTap={{ scale: 0.95 }}
              className="relative font-medium tracking-wide cursor-pointer group overflow-hidden bg-transparent border-none transition-colors duration-300 text-sm"
              style={{ 
                color: activeSection === item.id ? navbarStyles.textColorActive : navbarStyles.textColor 
              }}
            >
              {/* Underline animation */}
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 transition-colors duration-300"
                style={{ backgroundColor: navbarStyles.underlineColor }}
                initial={{ width: 0 }}
                animate={{ 
                  width: activeSection === item.id ? '100%' : 0,
                  opacity: activeSection === item.id ? 1 : 0
                }}
                whileHover={{ width: '100%', opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Background highlight */}
              <motion.div
                className="absolute inset-0 rounded transition-colors duration-300"
                style={{ backgroundColor: navbarStyles.highlightColor }}
                initial={{ scale: 0 }}
                animate={{ 
                  opacity: activeSection === item.id ? 0.1 : 0,
                  scale: activeSection === item.id ? 1 : 0
                }}
                whileHover={{ scale: 1, opacity: 0.1 }}
                transition={{ duration: 0.2 }}
              />
              
              <span className="relative z-10 px-3 py-2">{item.name}</span>
            </motion.button>
          ))}
        </div>

        {/* Mobile menu button (for future mobile implementation) */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="md:hidden bg-transparent border-none text-xl transition-colors duration-300"
          style={{ color: navbarStyles.logoColor }}
        >
          ☰
        </motion.button>
      </div>

      {/* Animated border bottom */}
      <motion.div
        className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${navbarStyles.borderGradient}`}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isVisible ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
    </motion.nav>
  )
}

export default Navbar