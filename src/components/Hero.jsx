import { motion } from 'framer-motion'
import { useState } from 'react'

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

const Hero = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  return (
    <div id="home" className="min-h-screen bg-black relative overflow-hidden">
      {/* Geometric Background Elements - Isolated animations */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large accent shape - Continuous rotation and scale */}
        <motion.div 
          key="hero-accent-shape"
          initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
          animate={{ 
            opacity: 0.2, 
            scale: [1, 1.05, 1], 
            rotate: [45, 90, 45] 
          }}
          transition={{ 
            opacity: { duration: 1.5, ease: "easeOut" },
            scale: { 
              duration: 12, 
              repeat: Infinity, 
              ease: "easeInOut", 
              delay: 2,
              repeatType: "loop"
            },
            rotate: { 
              duration: 15, 
              repeat: Infinity, 
              ease: "easeInOut", 
              delay: 2,
              repeatType: "loop"
            }
          }}
          className="absolute top-20 right-20 w-96 h-96 bg-[#842A3B] transform rounded-3xl"
        ></motion.div>
        
        {/* Secondary accent - Continuous pulsing and floating */}
        <motion.div 
          key="hero-secondary-accent"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.1, 0.15, 0.1], 
            scale: [1, 1.1, 1],
            y: [0, -10, 0],
            x: [0, 5, 0]
          }}
          transition={{ 
            opacity: { 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut", 
              delay: 2.5,
              repeatType: "loop"
            },
            scale: { 
              duration: 10, 
              repeat: Infinity, 
              ease: "easeInOut", 
              delay: 2.5,
              repeatType: "loop"
            },
            y: { 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut", 
              delay: 3,
              repeatType: "loop"
            },
            x: { 
              duration: 7, 
              repeat: Infinity, 
              ease: "easeInOut", 
              delay: 3.5,
              repeatType: "loop"
            }
          }}
          className="absolute bottom-32 left-16 w-64 h-64 bg-[#F5DAA7] rounded-full"
        ></motion.div>
        
        {/* Sharp lines - Continuous pulsing */}
        <motion.div 
          key="hero-line-1"
          initial={{ scaleX: 0 }}
          animate={{ 
            scaleX: 1,
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            scaleX: { duration: 1.5, delay: 0.8, ease: "easeInOut" },
            opacity: { 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut", 
              delay: 2,
              repeatType: "loop"
            }
          }}
          className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#842A3B] to-transparent origin-center"
        ></motion.div>
        <motion.div 
          key="hero-line-2"
          initial={{ scaleX: 0 }}
          animate={{ 
            scaleX: 1,
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            scaleX: { duration: 1.5, delay: 1, ease: "easeInOut" },
            opacity: { 
              duration: 5, 
              repeat: Infinity, 
              ease: "easeInOut", 
              delay: 2.5,
              repeatType: "loop"
            }
          }}
          className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F5DAA7] to-transparent origin-center"
        ></motion.div>
      </div>

      {/* Hero Navigation - Enhanced visibility */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: smoothEase }}
        className="relative z-10 flex justify-between items-center p-8"
      >
        <motion.button
          onClick={() => scrollToSection('home')}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ 
            duration: 0.6, 
            delay: 0.4, 
            ease: smoothEase,
            type: "spring", 
            stiffness: 300, 
            damping: 15
          }}
          whileHover={{ 
            scale: 1.1,
            textShadow: "0 0 20px rgba(245, 218, 167, 0.8)"
          }}
          whileTap={{ scale: 0.95 }}
          className="relative text-2xl font-bold text-[#F5DAA7] tracking-wider cursor-pointer group bg-transparent border-none isolate"
          style={{ isolation: 'isolate' }}
        >
          {/* Enhanced glow effect behind logo - isolated */}
          <motion.div
            className="absolute inset-0 bg-[#F5DAA7] rounded-full opacity-0 group-hover:opacity-20 blur-xl pointer-events-none"
            whileHover={{ scale: 1.5 }}
            transition={{ duration: 0.3, type: "tween" }}
            style={{ isolation: 'isolate' }}
          />
          <span className="relative z-10 drop-shadow-lg">TH</span>
        </motion.button>
        
        {/* Enhanced navigation menu for hero */}
        <div className="hidden md:flex space-x-8">
          {[
            { name: 'Home', id: 'home' },
            { name: 'About Me', id: 'about' },
            { name: 'Skills', id: 'skills' },
            { name: 'Projects', id: 'work' },
            { name: 'Experience', id: 'experience' },
            { name: 'Contact Me', id: 'contact' },
          ].map((item) => (
            <motion.button
              key={item.name}
              onClick={() => scrollToSection(item.id)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + (item.name.length * 0.02) }}
              whileHover={{ 
                y: -3, 
                color: '#F5DAA7',
                textShadow: "0 5px 15px rgba(245, 218, 167, 0.5)",
                scale: 1.05
              }}
              whileTap={{ scale: 0.95 }}
              className="relative font-light tracking-wide cursor-pointer group overflow-hidden bg-transparent border-none transition-colors duration-300 text-white hover:text-[#F5DAA7]"
            >
              {/* Enhanced underline animation */}
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-[#F5DAA7]"
                initial={{ width: 0 }}
                whileHover={{ width: '100%', opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Background highlight */}
              <motion.div
                className="absolute inset-0 bg-[#F5DAA7] rounded"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1, opacity: 0.1 }}
                transition={{ duration: 0.2 }}
              />
              
              <span className="relative z-10 px-2 py-1 drop-shadow-sm">{item.name}</span>
            </motion.button>
          ))}
        </div>

        {/* Mobile menu button */}
        <motion.button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-[#F5DAA7] bg-transparent border-none text-xl drop-shadow-lg z-[10000] relative"
        >
          <motion.div
            animate={{ rotate: isMobileMenuOpen ? 45 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </motion.div>
        </motion.button>
      </motion.nav>

      {/* Mobile Menu Overlay - Only for Hero Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ 
          opacity: isMobileMenuOpen ? 1 : 0,
          scale: isMobileMenuOpen ? 1 : 0.95,
          pointerEvents: isMobileMenuOpen ? 'auto' : 'none'
        }}
        transition={{ duration: 0.3, ease: smoothEase }}
        className="md:hidden fixed inset-0 bg-black/95 backdrop-blur-lg z-[9999]"
      >
        <div className="flex flex-col items-center justify-center min-h-screen p-8">
          {/* Mobile Menu Items */}
          <div className="space-y-8">
            {[
              { name: 'Home', id: 'home' },
              { name: 'About Me', id: 'about' },
              { name: 'Skills', id: 'skills' },
              { name: 'Projects', id: 'work' },
              { name: 'Experience', id: 'experience' },
              { name: 'Contact Me', id: 'contact' },
            ].map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => {
                  scrollToSection(item.id)
                  setIsMobileMenuOpen(false)
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ 
                  opacity: isMobileMenuOpen ? 1 : 0,
                  y: isMobileMenuOpen ? 0 : 30
                }}
                transition={{ 
                  duration: 0.4, 
                  delay: isMobileMenuOpen ? index * 0.1 : 0,
                  ease: smoothEase 
                }}
                whileHover={{ 
                  scale: 1.1,
                  color: '#F5DAA7',
                  textShadow: "0 0 20px rgba(245, 218, 167, 0.8)"
                }}
                whileTap={{ scale: 0.95 }}
                className="block text-center text-2xl font-light text-white tracking-wider cursor-pointer bg-transparent border-none transition-colors duration-300 relative group"
              >
                {/* Animated underline */}
                <motion.div
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-[#F5DAA7]"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Background glow effect */}
                <motion.div
                  className="absolute inset-0 bg-[#F5DAA7] rounded-lg opacity-0 group-hover:opacity-10"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
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
              opacity: isMobileMenuOpen ? 0.3 : 0,
              scale: isMobileMenuOpen ? 1 : 0,
              rotate: [0, 360]
            }}
            transition={{ 
              opacity: { duration: 0.5, delay: 0.3 },
              scale: { duration: 0.5, delay: 0.3 },
              rotate: { duration: 20, repeat: Infinity, ease: "linear" }
            }}
            className="absolute top-20 right-20 w-32 h-32 border border-[#F5DAA7] rounded-full"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: isMobileMenuOpen ? 0.2 : 0,
              scale: isMobileMenuOpen ? 1 : 0,
              rotate: [0, -360]
            }}
            transition={{ 
              opacity: { duration: 0.5, delay: 0.5 },
              scale: { duration: 0.5, delay: 0.5 },
              rotate: { duration: 15, repeat: Infinity, ease: "linear" }
            }}
            className="absolute bottom-20 left-20 w-24 h-24 bg-[#842A3B] rounded-lg transform rotate-45"
          />

          {/* Close instruction */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: isMobileMenuOpen ? 0.6 : 0,
              y: isMobileMenuOpen ? 0 : 20
            }}
            transition={{ duration: 0.4, delay: 0.8 }}
            className="absolute bottom-8 text-center text-sm text-gray-400 tracking-wide"
          >
            Tap ✕ to close menu
          </motion.p>
        </div>
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-between min-h-[80vh] px-8 max-w-7xl mx-auto">
        {/* Left Content */}
        <div className="flex-1 max-w-2xl">
          <motion.h1 
            className="text-7xl md:text-8xl font-light leading-none mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: smoothEase }}
          >
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: smoothEase }}
              className="text-white mb-2 lg:px-0 px-3"
            >
              Tanvir Hossain
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: smoothEase }}
              className="text-[#842A3B] lg:px-0 px-3 font-medium text-5xl"
            >
              MERN Stack Developer
            </motion.div>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1, ease: smoothEase }}
            className="text-xl lg:px-0 px-3 text-gray-300 mb-12 max-w-lg leading-relaxed font-light"
          >
            Crafting digital experiences with precision and artistry. 
            Where code meets creativity.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3, ease: smoothEase }}
            className="flex space-x-4"
          >
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => scrollToSection('work')}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 15px 35px rgba(132, 42, 59, 0.4)",
                y: -2
              }}
              whileTap={{ scale: 0.95, y: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 20 
              }}
              className="relative bg-[#842A3B] text-white px-6 py-3 font-medium tracking-wide border border-[#842A3B] overflow-hidden group"
            >
              {/* Animated background overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#6d2230] to-[#842A3B] opacity-0 group-hover:opacity-100"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
                initial={{ x: '-100%', skewX: -45 }}
                whileHover={{ x: '200%' }}
                transition={{ duration: 0.6, delay: 0.1 }}
              />
              
              <span className="relative z-10 mx-3">VIEW WORK</span>
            </motion.button>
            
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => scrollToSection('contact')}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: '#F5DAA7',
                color: '#000000',
                borderColor: '#F5DAA7',
                boxShadow: "0 15px 35px rgba(245, 218, 167, 0.3)",
                y: -2
              }}
              whileTap={{ scale: 0.95, y: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 20,
                backgroundColor: { duration: 0.2 },
                color: { duration: 0.2 }
              }}
              className="relative border-2 mx-3 border-[#F5DAA7] text-[#F5DAA7] px-6 py-3 font-medium tracking-wide overflow-hidden group"
            >
              {/* Animated border glow */}
              <motion.div
                className="absolute inset-0 border-2 border-[#F5DAA7] opacity-0 group-hover:opacity-100"
                animate={{ 
                  boxShadow: [
                    "0 0 0px rgba(245, 218, 167, 0)",
                    "0 0 20px rgba(245, 218, 167, 0.5)",
                    "0 0 0px rgba(245, 218, 167, 0)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
              {/* Fill animation */}
              <motion.div
                className="absolute inset-0 bg-[#F5DAA7] opacity-0 group-hover:opacity-100"
                initial={{ scale: 0, borderRadius: '50%' }}
                whileHover={{ scale: 1.5, borderRadius: '0%' }}
                transition={{ duration: 0.4 }}
              />
              
              {/* Particle effect */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-[#F5DAA7] rounded-full opacity-0 group-hover:opacity-100"
                  style={{
                    top: `${20 + Math.random() * 60}%`,
                    left: `${10 + Math.random() * 80}%`,
                  }}
                  animate={{
                    y: [-10, -20, -10],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.1,
                    ease: "easeInOut"
                  }}
                />
              ))}
              
              <span className="relative z-10">GET IN TOUCH</span>
            </motion.button>
          </motion.div>
        </div>

        {/* Right Artistic Element */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.5, ease: smoothEase }}
          className="hidden lg:flex flex-1 justify-center items-center relative"
        >
          {/* Main Circle - Continuous rotation */}
          <motion.div 
            key="hero-main-circle"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              rotate: 360
            }}
            transition={{ 
              opacity: { duration: 1, delay: 1.7, ease: "easeOut" },
              scale: { duration: 1, delay: 1.7, ease: "easeOut" },
              rotate: { 
                duration: 8, 
                repeat: Infinity, 
                ease: "linear", 
                delay: 1,
                repeatType: "loop"
              }
            }}
            className="w-80 h-80 border border-[#F5DAA7] rounded-full relative"
          >
            {/* Inner elements - Pulsing animation */}
            <motion.div 
              key="hero-inner-circle"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0.8, 0.4, 0.8], 
                scale: [1, 1.1, 1] 
              }}
              transition={{ 
                opacity: { 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut", 
                  delay: 3,
                  repeatType: "loop"
                },
                scale: { 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut", 
                  delay: 3,
                  repeatType: "loop"
                }
              }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#842A3B] rounded-full"
            ></motion.div>
            
            {/* Orbiting elements - Continuous orbit */}
            {[
              { delay: 2.2, position: '-top-4 left-1/2 transform -translate-x-1/2', size: 'w-8 h-8', orbitDelay: 0 },
              { delay: 2.4, position: 'top-1/2 -right-4 transform -translate-y-1/2', size: 'w-6 h-6', orbitDelay: 2 },
              { delay: 2.6, position: '-bottom-4 left-1/2 transform -translate-x-1/2', size: 'w-4 h-4', orbitDelay: 4 },
              { delay: 2.8, position: 'top-1/2 -left-4 transform -translate-y-1/2', size: 'w-5 h-5', orbitDelay: 6 }
            ].map((dot, index) => (
              <motion.div
                key={`hero-orbit-${index}`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: 1, 
                  scale: [1, 1.3, 1],
                  rotate: 360
                }}
                transition={{ 
                  opacity: { duration: 0.5, delay: dot.delay },
                  scale: { 
                    duration: 1.5, 
                    repeat: Infinity, 
                    ease: "easeInOut", 
                    delay: 3 + dot.orbitDelay,
                    repeatType: "loop"
                  },
                  rotate: { 
                    duration: 10, 
                    repeat: Infinity, 
                    ease: "linear", 
                    delay: 3 + dot.orbitDelay,
                    repeatType: "loop"
                  }
                }}
                className={`absolute ${dot.position} ${dot.size} ${index % 2 === 0 ? 'bg-[#F5DAA7]' : 'bg-[#842A3B]'} rounded-full`}
              ></motion.div>
            ))}
          </motion.div>

          {/* Sharp geometric lines - Continuous animations */}
          <motion.div 
            key="hero-geo-line-1"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ 
              scaleX: 1, 
              opacity: [1, 0.3, 1],
              rotate: [45, 90, 45]
            }}
            transition={{ 
              scaleX: { duration: 0.8, delay: 3, ease: "easeOut" },
              opacity: { 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut", 
                delay: 4,
                repeatType: "loop"
              },
              rotate: { 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut", 
                delay: 4,
                repeatType: "loop"
              }
            }}
            className="absolute top-1/4 right-1/4 w-24 h-px bg-[#F5DAA7] origin-left"
          ></motion.div>
          
          <motion.div 
            key="hero-geo-line-2"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ 
              scaleX: 1, 
              opacity: [1, 0.5, 1],
              rotate: [-45, -90, -45]
            }}
            transition={{ 
              scaleX: { duration: 0.8, delay: 3.2, ease: "easeOut" },
              opacity: { 
                duration: 3.5, 
                repeat: Infinity, 
                ease: "easeInOut", 
                delay: 4.2,
                repeatType: "loop"
              },
              rotate: { 
                duration: 7, 
                repeat: Infinity, 
                ease: "easeInOut", 
                delay: 4.2,
                repeatType: "loop"
              }
            }}
            className="absolute bottom-1/4 left-1/4 w-32 h-px bg-[#842A3B] origin-left"
          ></motion.div>
          
          <motion.div 
            key="hero-geo-line-3"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ 
              scaleY: [1, 1.5, 1], 
              opacity: [1, 0.4, 1]
            }}
            transition={{ 
              scaleY: { 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut", 
                delay: 4.4,
                repeatType: "loop"
              },
              opacity: { 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut", 
                delay: 4.4,
                repeatType: "loop"
              }
            }}
            className="absolute top-1/2 right-0 w-16 h-px bg-[#F5DAA7] transform rotate-90 origin-bottom"
          ></motion.div>

          {/* Additional floating elements */}
          <motion.div
            key="hero-float-1"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              x: [0, 30, 0],
              y: [0, -20, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 5,
              repeatType: "loop"
            }}
            className="absolute top-10 left-10 w-3 h-3 bg-[#F5DAA7] rounded-full"
          ></motion.div>
          
          <motion.div
            key="hero-float-2"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              x: [0, -25, 0],
              y: [0, 15, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 6,
              repeatType: "loop"
            }}
            className="absolute bottom-10 right-10 w-2 h-2 bg-[#842A3B] rounded-full"
          ></motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        key="hero-scroll-indicator"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 3.5, ease: smoothEase }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-[#F5DAA7]"
      >
        <motion.div 
          key="hero-scroll-line"
          animate={{ scaleY: [1, 1.2, 1] }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut",
            repeatType: "loop"
          }}
          className="w-px h-16 bg-[#F5DAA7] mb-4 opacity-60 origin-top"
        ></motion.div>
        <motion.span 
          key="hero-scroll-text"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut",
            repeatType: "loop"
          }}
          className="text-sm tracking-widest font-light"
        >
          SCROLL
        </motion.span>
      </motion.div>

      {/* Side decorative elements */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 2.5 }}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4"
      >
        {[12, 8, 16].map((height, index) => (
          <motion.div
            key={index}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.6, delay: 2.7 + index * 0.1 }}
            className={`w-1 h-${height} ${index === 1 ? 'bg-[#F5DAA7]' : index === 2 ? 'bg-[#842A3B] opacity-50' : 'bg-[#842A3B]'} origin-bottom`}
          ></motion.div>
        ))}
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 2.5 }}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4"
      >
        {[8, 16, 12].map((height, index) => (
          <motion.div
            key={index}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.6, delay: 2.7 + index * 0.1 }}
            className={`w-1 h-${height} ${index === 0 ? 'bg-[#F5DAA7] opacity-50' : index === 1 ? 'bg-[#842A3B]' : 'bg-[#F5DAA7]'} origin-bottom`}
          ></motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Hero