import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const Loading = ({ onLoadingComplete }) => {
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [currentText, setCurrentText] = useState(0)

  const loadingTexts = [
    "Initializing...",
    "Loading Components...",
    "Preparing Experience...",
    "Almost Ready..."
  ]

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          // Delay before calling onLoadingComplete to show completion
          setTimeout(() => onLoadingComplete(), 800)
          return 100
        }
        return prev + 2
      })
    }, 50)

    // Change loading text every 1.2 seconds
    const textInterval = setInterval(() => {
      setCurrentText(prev => (prev + 1) % loadingTexts.length)
    }, 1200)

    return () => {
      clearInterval(interval)
      clearInterval(textInterval)
    }
  }, [onLoadingComplete])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed inset-0 bg-black flex items-center justify-center z-[10000] overflow-hidden"
    >
      {/* Background geometric elements - Reduced */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large rotating shapes - Smaller and more subtle */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.05, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-10 right-10 w-20 h-20 border border-[#842A3B] rounded-2xl"
        />
        
        <motion.div
          animate={{ 
            rotate: [0, -360],
            scale: [1, 1.1, 1],
            opacity: [0.03, 0.08, 0.03]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute bottom-10 left-10 w-24 h-24 bg-[#F5DAA7] rounded-full"
        />

        {/* Floating particles - Fewer and smaller */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.sin(i) * 15, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 3 + i * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4
            }}
            className="absolute w-1 h-1 bg-[#F5DAA7] rounded-full"
            style={{
              top: `${15 + (i * 12)}%`,
              left: `${8 + (i * 15)}%`,
            }}
          />
        ))}

        {/* Geometric lines - More subtle */}
        <motion.div
          animate={{ 
            scaleX: [0, 1, 0],
            opacity: [0, 0.2, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#842A3B] to-transparent"
        />
        
        <motion.div
          animate={{ 
            scaleX: [0, 1, 0],
            opacity: [0, 0.15, 0]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F5DAA7] to-transparent"
        />
      </div>

      {/* Main loading content */}
      <div className="relative z-10 text-center">
        {/* Logo/Brand - Minimal */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-8"
        >
          <motion.div
            animate={{ 
              textShadow: [
                "0 0 15px rgba(245, 218, 167, 0.5)",
                "0 0 25px rgba(245, 218, 167, 0.8)",
                "0 0 15px rgba(245, 218, 167, 0.5)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-5xl font-bold text-[#F5DAA7] tracking-wider mb-2"
          >
            TH
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white text-sm font-light tracking-wide"
          >
          </motion.p>
        </motion.div>

        {/* Geometric Loading Animation - Smaller */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="relative mb-6"
        >
          {/* Main loading circle - Reduced size */}
          <div className="relative w-20 h-20 mx-auto">
            {/* Outer rotating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-3 border-transparent border-t-[#F5DAA7] border-r-[#F5DAA7] rounded-full"
            />
            
            {/* Inner counter-rotating ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-1 border-2 border-transparent border-b-[#842A3B] border-l-[#842A3B] rounded-full"
            />
            
            {/* Center pulsing dot */}
            <motion.div
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#F5DAA7] rounded-full"
            />

            {/* Orbiting elements - Smaller */}
            {[0, 120, 240].map((rotation, index) => (
              <motion.div
                key={index}
                animate={{ rotate: 360 }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "linear",
                  delay: index * 0.3
                }}
                className="absolute inset-0"
                style={{ transform: `rotate(${rotation}deg)` }}
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{ 
                    duration: 1, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: index * 0.1
                  }}
                  className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#842A3B] rounded-full"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Progress Bar - Smaller */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mb-4"
        >
          <div className="w-48 h-1.5 bg-gray-800 rounded-full mx-auto overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#842A3B] to-[#F5DAA7] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${loadingProgress}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </div>
          <motion.p
            key={loadingProgress}
            initial={{ opacity: 0.7 }}
            animate={{ opacity: 1 }}
            className="text-[#F5DAA7] text-xs font-medium mt-1"
          >
            {loadingProgress}%
          </motion.p>
        </motion.div>

        {/* Loading Text - Smaller */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="h-4"
        >
          <motion.p
            key={currentText}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.3 }}
            className="text-white text-sm font-light tracking-wide"
          >
            {loadingTexts[currentText]}
          </motion.p>
        </motion.div>

        {/* Animated dots - Smaller */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="flex justify-center space-x-1 mt-3"
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.2
              }}
              className="w-1.5 h-1.5 bg-[#F5DAA7] rounded-full"
            />
          ))}
        </motion.div>
      </div>

      {/* Corner decorative elements - Smaller */}
      <motion.div
        animate={{ 
          rotate: [0, 90, 0],
          opacity: [0.05, 0.15, 0.05]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-4 left-4 w-8 h-8 border-l border-t border-[#F5DAA7]"
      />
      
      <motion.div
        animate={{ 
          rotate: [0, -90, 0],
          opacity: [0.05, 0.15, 0.05]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 3
        }}
        className="absolute bottom-4 right-4 w-8 h-8 border-r border-b border-[#842A3B]"
      />
    </motion.div>
  )
}

export default Loading