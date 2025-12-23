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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
      // Show navbar earlier on mobile devices for better accessibility
      const heroHeight = window.innerHeight * (window.innerWidth < 768 ? 0.3 : 0.5)
      
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

  // Close mobile menu when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [isMobileMenuOpen])

  // Handle mobile menu toggle
  const toggleMobileMenu = () => {
    console.log('Mobile menu toggle clicked, current state:', isMobileMenuOpen)
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

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
    <>
      {/* Main Navbar */}
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

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex space-x-8">
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

          {/* Mobile menu button - only visible when navbar is visible */}
          <motion.button
            onClick={toggleMobileMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden bg-transparent border-none text-xl transition-colors duration-300 z-[9999] relative"
            style={{ color: navbarStyles.logoColor }}
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 45 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isMobileMenuOpen ? '✕' : '☰'}
            </motion.div>
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

      {/* Floating Mobile Menu Button - Always visible on mobile when navbar is hidden */}
      <motion.button
        onClick={toggleMobileMenu}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: !isVisible ? 1 : 0,
          scale: !isVisible ? 1 : 0,
          pointerEvents: !isVisible ? 'auto' : 'none'
        }}
        transition={{ 
          duration: 0.3, 
          ease: smoothEase,
          type: "spring",
          stiffness: 300,
          damping: 30
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="md:hidden fixed top-6 right-6 z-[9999] w-12 h-12 rounded-full border-none shadow-lg transition-colors duration-300 flex items-center justify-center"
        style={{
          background: navbarTheme === 'light' ? 'rgba(255, 255, 255, 0.95)' : 'rgba(0, 0, 0, 0.9)',
          backdropFilter: 'blur(12px)',
          color: navbarStyles.logoColor,
          boxShadow: `0 4px 20px ${navbarTheme === 'light' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)'}`
        }}
      >
        <motion.div
          animate={{ rotate: isMobileMenuOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-lg"
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </motion.div>
      </motion.button>

      {/* Mobile Menu - Full Screen Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ 
            opacity: 1,
            scale: 1
          }}
          exit={{ 
            opacity: 0,
            scale: 0.95
          }}
          transition={{ duration: 0.3, ease: smoothEase }}
          className="md:hidden fixed inset-0 z-[9998]"
          style={{
            background: navbarTheme === 'light' ? 'rgba(255, 255, 255, 0.98)' : 'rgba(0, 0, 0, 0.98)',
            backdropFilter: 'blur(20px)',
          }}
        >
          {/* Close button positioned at top right */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(false)}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 1,
              scale: 1
            }}
            transition={{ duration: 0.3, delay: 0.1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute top-8 right-8 bg-transparent border-none text-2xl z-[9999] transition-colors duration-300"
            style={{ color: navbarStyles.logoColor }}
          >
            ✕
          </motion.button>

          <div className="flex flex-col items-center justify-center min-h-screen p-8">
            {/* Mobile Menu Items */}
            <div className="space-y-8">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About', id: 'about' },
                { name: 'Skills', id: 'skills' },
                { name: 'Work', id: 'work' },
                { name: 'Experience', id: 'experience' },
                { name: 'Contact', id: 'contact' }
              ].map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => {
                    scrollToSection(item.id)
                    setIsMobileMenuOpen(false)
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ 
                    opacity: 1,
                    y: 0
                  }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.1,
                    ease: smoothEase 
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    color: navbarStyles.textColorActive,
                    textShadow: `0 0 20px ${navbarStyles.glowColor}`
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="block text-center text-2xl font-light tracking-wider cursor-pointer bg-transparent border-none transition-colors duration-300 relative group"
                  style={{ 
                    color: activeSection === item.id ? navbarStyles.textColorActive : navbarStyles.textColor
                  }}
                >
                  {/* Animated underline */}
                  <motion.div
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5"
                    style={{ backgroundColor: navbarStyles.underlineColor }}
                    initial={{ width: 0 }}
                    animate={{ 
                      width: activeSection === item.id ? '100%' : 0,
                      opacity: activeSection === item.id ? 1 : 0
                    }}
                    whileHover={{ width: '100%', opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Background glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-10"
                    style={{ backgroundColor: navbarStyles.highlightColor }}
                    initial={{ scale: 0 }}
                    animate={{ 
                      opacity: activeSection === item.id ? 0.1 : 0,
                      scale: activeSection === item.id ? 1 : 0
                    }}
                    whileHover={{ scale: 1, opacity: 0.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <span className="relative z-10 px-6 py-3 block">{item.name}</span>
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Decorative Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: 0.3,
                scale: 1,
                rotate: [0, 360]
              }}
              transition={{ 
                opacity: { duration: 0.5, delay: 0.3 },
                scale: { duration: 0.5, delay: 0.3 },
                rotate: { duration: 20, repeat: Infinity, ease: "linear" }
              }}
              className="absolute top-20 right-20 w-32 h-32 border rounded-full"
              style={{ borderColor: navbarStyles.logoColor }}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: 0.2,
                scale: 1,
                rotate: [0, -360]
              }}
              transition={{ 
                opacity: { duration: 0.5, delay: 0.5 },
                scale: { duration: 0.5, delay: 0.5 },
                rotate: { duration: 15, repeat: Infinity, ease: "linear" }
              }}
              className="absolute bottom-20 left-20 w-24 h-24 rounded-lg transform rotate-45"
              style={{ backgroundColor: '#842A3B' }}
            />

            {/* Close instruction */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 0.6,
                y: 0
              }}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="absolute bottom-8 text-center text-sm tracking-wide"
              style={{ color: navbarStyles.textColor }}
            >
              Tap ✕ to close menu
            </motion.p>
          </div>
        </motion.div>
      )}
    </>
  )
}

export default Navbar