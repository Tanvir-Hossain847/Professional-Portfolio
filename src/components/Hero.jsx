import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0">
        {/* Large accent shape - Continuous rotation and scale */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
          animate={{ 
            opacity: 0.2, 
            scale: [1, 1.05, 1], 
            rotate: [45, 90, 45] 
          }}
          transition={{ 
            opacity: { duration: 1.5, ease: "easeOut" },
            scale: { duration: 1.5, ease: "easeOut" },
            scale: { duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 },
            rotate: { duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }
          }}
          className="absolute top-20 right-20 w-96 h-96 bg-[#842A3B] transform rounded-3xl"
        ></motion.div>
        
        {/* Secondary accent - Continuous pulsing and floating */}
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.1, 0.15, 0.1], 
            scale: [1, 1.1, 1],
            y: [0, -10, 0],
            x: [0, 5, 0]
          }}
          transition={{ 
            opacity: { duration: 1.2, delay: 0.3, ease: "easeOut" },
            scale: { duration: 1.2, delay: 0.3, ease: "easeOut" },
            opacity: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2.5 },
            scale: { duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2.5 },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 },
            x: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 3.5 }
          }}
          className="absolute bottom-32 left-16 w-64 h-64 bg-[#F5DAA7] rounded-full"
        ></motion.div>
        
        {/* Sharp lines - Continuous pulsing */}
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ 
            scaleX: 1,
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            scaleX: { duration: 1.5, delay: 0.8, ease: "easeInOut" },
            opacity: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }
          }}
          className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#842A3B] to-transparent origin-center"
        ></motion.div>
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ 
            scaleX: 1,
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            scaleX: { duration: 1.5, delay: 1, ease: "easeInOut" },
            opacity: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }
          }}
          className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F5DAA7] to-transparent origin-center"
        ></motion.div>
      </div>

      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 flex justify-between items-center p-8"
      >
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.1 }}
          className="text-2xl font-bold text-[#F5DAA7] tracking-wider cursor-pointer"
        >
          TH
        </motion.div>
        <div className="hidden md:flex space-x-12">
          {['About', 'Work', 'Contact'].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -2, color: '#F5DAA7' }}
              className="text-white hover:text-[#F5DAA7] transition-colors duration-300 font-light tracking-wide"
            >
              {item}
            </motion.a>
          ))}
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-between min-h-[80vh] px-8 max-w-7xl mx-auto">
        {/* Left Content */}
        <div className="flex-1 max-w-2xl">
          <motion.h1 
            className="text-7xl md:text-8xl font-light leading-none mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-white mb-2"
            >
              Creative
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-[#842A3B] font-medium"
            >
              Developer
            </motion.div>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="text-xl text-gray-300 mb-12 max-w-lg leading-relaxed font-light"
          >
            Crafting digital experiences with precision and artistry. 
            Where code meets creativity.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="flex space-x-6"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(132, 42, 59, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#842A3B] text-white px-8 py-4 font-medium tracking-wide hover:bg-[#6d2230] transition-colors duration-300 border border-[#842A3B]"
            >
              VIEW WORK
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: '#F5DAA7', color: '#000000' }}
              whileTap={{ scale: 0.95 }}
              className="border border-[#F5DAA7] text-[#F5DAA7] px-8 py-4 font-medium tracking-wide transition-all duration-300"
            >
              GET IN TOUCH
            </motion.button>
          </motion.div>
        </div>

        {/* Right Artistic Element */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="hidden lg:flex flex-1 justify-center items-center relative"
        >
          {/* Main Circle - Continuous rotation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              rotate: 360
            }}
            transition={{ 
              opacity: { duration: 1, delay: 1.7, ease: "easeOut" },
              scale: { duration: 1, delay: 1.7, ease: "easeOut" },
              rotate: { duration: 8, repeat: Infinity, ease: "linear", delay: 1 }
            }}
            className="w-80 h-80 border border-[#F5DAA7] rounded-full relative"
          >
            {/* Inner elements - Pulsing animation */}
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0.8, 0.4, 0.8], 
                scale: [1, 1.1, 1] 
              }}
              transition={{ 
                opacity: { duration: 0.8, delay: 2, ease: "easeOut" },
                scale: { duration: 0.8, delay: 2, ease: "easeOut" },
                opacity: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 3 },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 3 }
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
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: 1, 
                  scale: [1, 1.3, 1],
                  rotate: 360
                }}
                transition={{ 
                  opacity: { duration: 0.5, delay: dot.delay },
                  scale: { duration: 0.5, delay: dot.delay },
                  scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 3 + dot.orbitDelay },
                  rotate: { duration: 10, repeat: Infinity, ease: "linear", delay: 3 + dot.orbitDelay }
                }}
                className={`absolute ${dot.position} ${dot.size} ${index % 2 === 0 ? 'bg-[#F5DAA7]' : 'bg-[#842A3B]'} rounded-full`}
              ></motion.div>
            ))}
          </motion.div>

          {/* Sharp geometric lines - Continuous animations */}
          <motion.div 
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ 
              scaleX: 1, 
              opacity: [1, 0.3, 1],
              rotate: [45, 90, 45]
            }}
            transition={{ 
              scaleX: { duration: 0.8, delay: 3, ease: "easeOut" },
              opacity: { duration: 0.8, delay: 3, ease: "easeOut" },
              opacity: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 4 },
              rotate: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 4 }
            }}
            className="absolute top-1/4 right-1/4 w-24 h-px bg-[#F5DAA7] origin-left"
          ></motion.div>
          
          <motion.div 
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ 
              scaleX: 1, 
              opacity: [1, 0.5, 1],
              rotate: [-45, -90, -45]
            }}
            transition={{ 
              scaleX: { duration: 0.8, delay: 3.2, ease: "easeOut" },
              opacity: { duration: 0.8, delay: 3.2, ease: "easeOut" },
              opacity: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 4.2 },
              rotate: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 4.2 }
            }}
            className="absolute bottom-1/4 left-1/4 w-32 h-px bg-[#842A3B] origin-left"
          ></motion.div>
          
          <motion.div 
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ 
              scaleY: [1, 1.5, 1], 
              opacity: [1, 0.4, 1]
            }}
            transition={{ 
              scaleY: { duration: 0.8, delay: 3.4, ease: "easeOut" },
              opacity: { duration: 0.8, delay: 3.4, ease: "easeOut" },
              scaleY: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 4.4 },
              opacity: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 4.4 }
            }}
            className="absolute top-1/2 right-0 w-16 h-px bg-[#F5DAA7] transform rotate-90 origin-bottom"
          ></motion.div>

          {/* Additional floating elements */}
          <motion.div
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
              delay: 5
            }}
            className="absolute top-10 left-10 w-3 h-3 bg-[#F5DAA7] rounded-full"
          ></motion.div>
          
          <motion.div
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
              delay: 6
            }}
            className="absolute bottom-10 right-10 w-2 h-2 bg-[#842A3B] rounded-full"
          ></motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 3.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-[#F5DAA7]"
      >
        <motion.div 
          animate={{ scaleY: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-16 bg-[#F5DAA7] mb-4 opacity-60 origin-top"
        ></motion.div>
        <motion.span 
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
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