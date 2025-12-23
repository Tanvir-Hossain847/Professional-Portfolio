import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

// Smooth easing curve for all animations
const smoothEase = [0.25, 0.1, 0.25, 1]

const Projects = () => {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 768)
    }
    
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])
  const projects = [
    {
      id: 1,
      name: "Style Decore",
      description: "A full-stack platform where users can book services, make payments, and track orders. Admin can manage users and assign decorators.",
      image: "https://i.ibb.co.com/pcJvqLD/Screenshot-2025-12-15-000939.png",
      features: [
        "User authentication & role-based access",
        "Secure payment system",
        "Admin dashboard",
        "Real-time status updates"
      ],
      techStack: {
        frontend: ["React", "Tailwind", "React Router"],
        backend: ["Node.js", "Express"],
        database: ["MongoDB"],
        other: ["Stripe",, "Chart.js", "JWT", "Framer Motion", "Firebase"]
      },
      liveLink: "https://style-decor-d89db.web.app/",
      githubLink: "https://github.com/Tanvir-Hossain847/Decore-Manage-Client_side-.git",
      color: "#842A3B",
      accent: "#842A3B"
    },
    {
      id: 2,
      name: "KrishiLink",
      description: "Krishi Link is an app that helps farmers sell their crops directly, cutting out the middleman and getting better prices for their produce.",
      image: "https://i.ibb.co.com/zWmqFbL0/Whats-App-Image-2025-12-22-at-9-32-17-PM.jpg",
      features: [
        "Product & inventory management",
        "Order processing system",
        "Customer analytics",
      ],
      techStack: {
        frontend: ["React", "Tailwind", "React Router"],
        backend: ["Node.js", "Express"],
        database: ["MongoDB"],
        other: ["Chart.js", "JWT", "Framer Motion, Firebase"]
      },
      liveLink: "https://assignment-10-8a9e3.web.app/",
      githubLink: "https://github.com/Tanvir-Hossain847/KrishiLink_Client_Side.git",
      color: "#842A3B",
      accent: "#842A3B"
    },
    {
      id: 3,
      name: "Dragon News",
      description: "A modern digital newspaper that brings the latest news to your screen in a clean, easy-to-read format.",
      image: "https://i.ibb.co.com/5wLL7Tg/dragon-news-fb588-web-app-category-1-1.png",
      features: [
        "Team collaboration tools",
        "Real-time updates",
        "Easy switching between sections",
        "Distraction-free article view",
        "Politics, World, Business, Sports, Tech, Entertainment",
        "Search by headline, topic, or keyword",
      ],
      techStack: {
        frontend: ["React", "Tailwind"],
        backend: ["None Used"],
        database: ["None Used"],
        other: ["Firebase"]
      },
      liveLink: "https://dragon-news-fb588.web.app/",
      githubLink: "https://github.com/Tanvir-Hossain847/Dragon-News.git",
      color: "#842A3B",
      accent: "#842A3B"
    },
    {
      id: 4,
      name: "ECKLEZIA",
      description: "A complete church management app designed to handle every church activity digitally in one secure platform.",
      image: "https://i.ibb.co.com/tT42L1Ps/Screenshot-2025-12-22-221855.png",
      features: [
        "Real-time Notification",
        "Dynamic Data Structure",
        "Account Section",
        "User profile management",
        "Dashboard Statistics",
        "Comprihensive Task Management System",
      ],
      techStack: {
        frontend: ["Bootstrape", "CSS5"],
        backend: ["Django", "Python"],
        database: ["SQLite", "MySQL"],
        other: ["Cloudinary", "Firebase", "Stripe"]
      },
      liveLink: "https://social-platform-demo.com",
      githubLink: "https://github.com/tanvir/social-platform",
      color: "#842A3B",
      accent: "#842A3B"
    }
  ]

  return (
    <section id="work" 
      className="min-h-screen bg-white relative px-4 md:px-8 z-20" 
      style={{ 
        clipPath: isDesktop 
          ? 'polygon(0 8%, 100% 0, 100% 92%, 0 100%)' 
          : 'polygon(0 3%, 100% 0, 100% 97%, 0 100%)',
        paddingTop: '160px', 
        paddingBottom: '160px',
        overflow: 'hidden'
      }}
    >
      <div className="max-w-7xl mx-auto relative z-30 overflow-hidden pt-12 md:pt-0 pb-8 md:pb-0">
        {/* Slanted top accent */}
        <div className="absolute top-0 left-0 w-full h-32 pointer-events-none z-0">
          <motion.div
            animate={{ 
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute top-0 w-full h-full bg-gradient-to-b from-black/20 to-transparent"
            style={{ clipPath: 'polygon(0 0, 100% 50%, 100% 0)' }}
          />
        </div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: smoothEase }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-light text-black mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.02, ease: smoothEase }}
          >
            Featured Projects
          </motion.h2>
          <motion.div
            className="w-32 h-1 bg-[#842A3B] mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.04, ease: smoothEase }}
          />
          <motion.p
            className="text-gray-600 text-lg mt-6 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.06, ease: smoothEase }}
          >
            A showcase of full-stack applications demonstrating modern web development practices, 
            clean architecture, and user-centered design solutions.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.4, 
                delay: 0.08 + index * 0.05,
                type: "spring",
                stiffness: 120,
                damping: 15,
                ease: smoothEase
              }}
              className="group relative"
            >
              {/* Background geometric shape */}
              <motion.div
                animate={{ 
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ 
                  duration: 10 + index * 2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg transform rotate-1 border border-gray-300"
              />
              
              {/* Main project card */}
              <div className="relative bg-white border border-gray-300 rounded-lg overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                {/* Project Image */}
                <motion.div 
                  className="relative h-75 overflow-hidden"
                  initial={{ opacity: 0, scale: 1.05 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.05, ease: smoothEase }}
                >
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                  />
                  
                  {/* Professional overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  
                  {/* Project number - Professional design */}
                  <motion.div
                    animate={{ 
                      opacity: [0.9, 1, 0.9]
                    }}
                    transition={{ 
                      duration: 4 + index, 
                      repeat: Infinity, 
                      ease: "easeInOut"
                    }}
                    className="absolute top-4 right-4 w-10 h-10 bg-white/95 backdrop-blur-sm flex items-center justify-center font-bold text-lg shadow-lg"
                    style={{ color: project.color }}
                  >
                    {project.id}
                  </motion.div>

                  {/* Project title overlay */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.12 + index * 0.05, ease: smoothEase }}
                    className="absolute bottom-4 left-4 right-4"
                  >
                    <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-lg">
                      {project.name}
                    </h3>
                    <div 
                      className="w-12 h-0.5"
                      style={{ backgroundColor: project.color }}
                    />
                  </motion.div>
                </motion.div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Description */}
                  <motion.div 
                    className="mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.14 + index * 0.05, ease: smoothEase }}
                  >
                    <p className="text-gray-700 leading-relaxed">
                      {project.description}
                    </p>
                  </motion.div>

                  {/* Features - Professional grid */}
                  <motion.div 
                    className="mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.16 + index * 0.05, ease: smoothEase }}
                  >
                    <h4 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">Key Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 0.2, 
                            delay: 0.18 + index * 0.05 + featureIndex * 0.01,
                            ease: smoothEase
                          }}
                          className="flex items-start space-x-2 p-2 border-l-2"
                          style={{ borderColor: project.color }}
                        >
                          <div 
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2"
                            style={{ backgroundColor: project.color }}
                          />
                          <span className="text-gray-700 text-sm leading-tight">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Tech Stack - Clean professional layout */}
                  <motion.div 
                    className="mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.05, ease: smoothEase }}
                  >
                    <h4 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">Technology Stack</h4>
                    <div className="space-y-2">
                      {Object.entries(project.techStack).map(([category, techs]) => (
                        <div key={category} className="flex items-center space-x-3">
                          <span className="text-xs font-medium text-gray-500 uppercase tracking-wider w-16 flex-shrink-0">
                            {category}
                          </span>
                          <div className="flex flex-wrap gap-1">
                            {techs.map((tech, techIndex) => (
                              <motion.span
                                key={tech}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ 
                                  duration: 0.15, 
                                  delay: 0.22 + index * 0.05 + techIndex * 0.005,
                                  ease: smoothEase
                                }}
                                className="px-2 py-1 text-xs font-medium border transition-all duration-200"
                                style={{ 
                                  borderColor: project.color,
                                  color: project.color,
                                  backgroundColor: 'transparent'
                                }}
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Action buttons - Professional design */}
                  <motion.div 
                    className="flex space-x-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.24 + index * 0.05, ease: smoothEase }}
                  >
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-3 px-4 font-semibold text-sm uppercase tracking-wide transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                      style={{ 
                        backgroundColor: project.color,
                        color: 'white'
                      }}
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-3 px-4 font-semibold text-sm uppercase tracking-wide transition-all duration-300 border-2 hover:shadow-md transform hover:scale-105"
                      style={{ 
                        borderColor: project.color,
                        color: project.color,
                        backgroundColor: 'transparent'
                      }}
                    >
                      Source Code
                    </a>
                  </motion.div>
                </div>

                {/* Professional corner accent */}
                <div
                  className="absolute top-0 left-0 w-16 h-1"
                  style={{ backgroundColor: project.color }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3, ease: smoothEase }}
          className="text-center"
        >
          <motion.p
            className="text-gray-600 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.35, ease: smoothEase }}
          >
            More projects coming soon...
          </motion.p>
          
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4, ease: smoothEase }}
            className="bg-[#842A3B] text-white px-8 py-3 rounded-full font-medium transition-all duration-200 border-2 border-[#842A3B] opacity-50 cursor-not-allowed"
            disabled
          >
            Load More Projects (Coming Soon)
          </motion.button>
        </motion.div>

        {/* Slanted bottom accent */}
        <div className="absolute bottom-0 left-0 w-full h-32 pointer-events-none z-0">
          <motion.div
            animate={{ 
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute bottom-0 w-full h-full bg-gradient-to-t from-black/20 to-transparent"
            style={{ clipPath: 'polygon(0 100%, 100% 50%, 100% 100%)' }}
          />
        </div>
      </div>

      {/* Background decorative elements - Contained within viewport */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Static floating geometric shapes - only rotation and opacity */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-1/4 right-4 md:right-20 w-24 h-24 md:w-32 md:h-32 border border-[#842A3B] rounded-2xl transform rotate-12"
        />
        
        <motion.div
          animate={{ 
            rotate: [0, 45, 0],
            opacity: [0.08, 0.18, 0.08]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-1/4 left-4 md:left-16 w-20 h-20 md:w-24 md:h-24 bg-[#F5DAA7] rounded-lg transform rotate-45"
        />

        {/* Static floating particles - only scale and opacity */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 6 + i * 0.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
            className="absolute w-2 h-2 bg-[#842A3B] rounded-full"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 20}%`,
            }}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects