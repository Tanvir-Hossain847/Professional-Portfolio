import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

// Smooth easing curve for all animations
const smoothEase = [0.25, 0.1, 0.25, 1]

const Experience = () => {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 768)
    }
    
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])
  const experiences = [
    {
      id: 1,
      title: "Junior Backend Developer",
      company: "ECKLEZIA (Contract Work)",
      period: "2025 - Present",
      type: "Contract",
      description: "Developing custom web applications. That manages and tracks all the Churches and their finaces. One Dashoard fo every need",
      achievements: [
        "Built and deployed multiple features applications with Django",
        "Implemented secure authentication systems and role-based access control",
        "Created responsive admin dashboards with real-time data visualization",
        "Handled CRUD oparation for the entire website",
        "Made and loaded dynamic data system in frontend and back-end",
        "Handled and designed the front-end and Dashboard",
      ],
      technologies: ["Django", "SQLite", "MySQL", "Bootstrape", "Stripe", "Chart.js"],
      color: "#842A3B"
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Freelance & Contract Work",
      period: "2025 - Present",
      type: "Contract/Freelance",
      description: "Developing custom web applications for clients with focus on modern technologies and scalable solutions.",
      achievements: [
        "Built and deployed multiple full-stack applications using MERN and Django",
        "Implemented secure authentication systems and role-based access control",
        "Created responsive admin dashboards with real-time data visualization",
        "Delivered projects on time with 100% client satisfaction rate"
      ],
      technologies: ["React", "Node.js", "Django", "MongoDB", "MySQL", "Express.js"],
      color: "#842A3B"
    },
    {
      id: 3,
      title: "MERN Stack Developer",
      company: "Self-Directed Projects",
      period: "2025 - Present",
      type: "Personal Development",
      description: "Continuously building and improving personal projects to master full-stack development and explore new technologies.",
      achievements: [
        "Developed 4+ complete full-stack applications from concept to deployment",
        "Mastered modern React patterns, hooks, and state management",
        "Implemented secure payment systems using Stripe integration",
        "Gained expertise in database design and API development"
      ],
      technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      color: "#842A3B"
    },
    {
      id: 4,
      title: "Web Development Specialist",
      company: "Open Source & Learning",
      period: "2025 - Present",
      type: "Continuous Learning",
      description: "Contributing to open-source projects and continuously expanding technical skills through hands-on development.",
      achievements: [
        "Contributed to open-source projects and community development",
        "Mastered version control with Git and collaborative development",
        "Learned and implemented modern deployment strategies (Vercel, Netlify)",
        "Built responsive, accessible web applications following best practices"
      ],
      technologies: ["Git", "GitHub", "Vercel", "Netlify", "Firebase", "REST APIs"],
      color: "#842A3B"
    }
  ]

  return (
    <section id="experience" 
      className="min-h-screen bg-black relative px-4 md:px-8 z-20" 
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
            className="absolute top-0 w-full h-full bg-gradient-to-b from-[#842A3B]/30 to-transparent"
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
            className="text-5xl md:text-6xl font-light text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.02, ease: smoothEase }}
          >
            Professional Experience
          </motion.h2>
          <motion.div
            className="w-32 h-1 bg-[#F5DAA7] mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.04, ease: smoothEase }}
          />
          <motion.p
            className="text-gray-400 text-lg mt-6 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.06, ease: smoothEase }}
          >
            Building expertise through hands-on development, client projects, and continuous learning
          </motion.p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08, ease: smoothEase }}
            className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-[#F5DAA7] origin-top"
          />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.4, 
                  delay: 0.1 + index * 0.05,
                  type: "spring",
                  stiffness: 120,
                  damping: 15
                }}
                className="relative flex items-start space-x-8"
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.12 + index * 0.05, ease: smoothEase }}
                  className="relative z-10 flex-shrink-0"
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.8, 1, 0.8]
                    }}
                    transition={{ 
                      duration: 3 + index, 
                      repeat: Infinity, 
                      ease: "easeInOut"
                    }}
                    className="w-4 h-4 bg-[#F5DAA7] rounded-full border-4 border-black"
                  />
                </motion.div>

                {/* Experience Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.35 + index * 0.1 }}
                  className="flex-1 bg-gray-900 border border-gray-700 rounded-lg p-8 relative overflow-hidden"
                >
                  {/* Background accent */}
                  <motion.div
                    animate={{ 
                      opacity: [0.05, 0.1, 0.05]
                    }}
                    transition={{ 
                      duration: 8 + index * 2, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                    className="absolute inset-0 bg-gradient-to-br from-[#842A3B] to-transparent"
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Header */}
                    <motion.div 
                      className="flex flex-col md:flex-row md:items-center md:justify-between mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.14 + index * 0.05, ease: smoothEase }}
                    >
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-[#F5DAA7] font-semibold text-lg">
                          {exp.company}
                        </p>
                      </div>
                      <div className="mt-2 md:mt-0 text-right">
                        <span className="text-gray-400 font-medium">
                          {exp.period}
                        </span>
                        <div className="mt-1">
                          <span 
                            className="px-3 py-1 text-xs font-semibold rounded-full border"
                            style={{ 
                              borderColor: exp.color,
                              color: exp.color,
                              backgroundColor: `${exp.color}20`
                            }}
                          >
                            {exp.type}
                          </span>
                        </div>
                      </div>
                    </motion.div>

                    {/* Description */}
                    <motion.p 
                      className="text-gray-300 leading-relaxed mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.16 + index * 0.05, ease: smoothEase }}
                    >
                      {exp.description}
                    </motion.p>

                    {/* Achievements */}
                    <motion.div 
                      className="mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.18 + index * 0.05, ease: smoothEase }}
                    >
                      <h4 className="font-semibold text-white mb-3 text-sm uppercase tracking-wide">
                        Key Achievements
                      </h4>
                      <div className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <motion.div
                            key={achIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ 
                              duration: 0.2, 
                              delay: 0.2 + index * 0.05 + achIndex * 0.01,
                              ease: smoothEase
                            }}
                            className="flex items-start space-x-3"
                          >
                            <div 
                              className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2"
                              style={{ backgroundColor: '#F5DAA7' }}
                            />
                            <span className="text-gray-300 text-sm leading-relaxed">
                              {achievement}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Technologies */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.22 + index * 0.05, ease: smoothEase }}
                    >
                      <h4 className="font-semibold text-white mb-3 text-sm uppercase tracking-wide">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ 
                              duration: 0.15, 
                              delay: 0.24 + index * 0.05 + techIndex * 0.005,
                              ease: smoothEase
                            }}
                            className="px-3 py-1 text-xs font-medium border rounded-full"
                            style={{ 
                              borderColor: '#F5DAA7',
                              color: '#F5DAA7',
                              backgroundColor: 'transparent'
                            }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Corner accent */}
                  <div
                    className="absolute top-0 right-0 w-16 h-1"
                    style={{ backgroundColor: '#F5DAA7' }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3, ease: smoothEase }}
          className="text-center mt-20"
        >
          <motion.p
            className="text-gray-400 text-lg mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.35, ease: smoothEase }}
          >
            Ready to bring this experience to your next project
          </motion.p>
          
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4, ease: smoothEase }}
            onClick={() => {
              const element = document.getElementById('contact')
              if (element) {
                element.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
                })
              }
            }}
            className="bg-[#F5DAA7] text-black px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-[#F5DAA7]/90 hover:shadow-lg transform hover:scale-105"
          >
            Let's Work Together
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
            className="absolute bottom-0 w-full h-full bg-gradient-to-t from-[#842A3B]/30 to-transparent"
            style={{ clipPath: 'polygon(0 100%, 100% 50%, 100% 100%)' }}
          />
        </div>
      </div>

      {/* Background decorative elements - Enhanced visibility */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large geometric shapes - More visible */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-1/4 right-4 md:right-20 w-32 h-32 md:w-40 md:h-40 border-2 border-[#F5DAA7] rounded-2xl transform rotate-12"
        />
        
        <motion.div
          animate={{ 
            rotate: [0, 45, 0],
            opacity: [0.18, 0.28, 0.18]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-1/4 left-4 md:left-16 w-24 h-24 md:w-32 md:h-32 bg-[#842A3B] rounded-lg transform rotate-45"
        />

        {/* Additional large shapes */}
        <motion.div
          animate={{ 
            rotate: [0, -360],
            scale: [1, 1.1, 1],
            opacity: [0.12, 0.22, 0.12]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-1/2 left-1/4 w-28 h-28 md:w-36 md:h-36 border-2 border-[#842A3B] rounded-full"
        />

        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-3/4 right-1/3 w-20 h-20 md:w-28 md:h-28 bg-[#F5DAA7] transform rotate-45"
        />

        {/* Medium floating shapes */}
        <motion.div
          animate={{ 
            x: [0, 15, 0],
            y: [0, -10, 0],
            rotate: [0, 90, 0],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-1/6 left-1/2 w-16 h-16 md:w-20 md:h-20 border border-[#F5DAA7] rounded-lg transform rotate-12"
        />

        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -45, 0],
            opacity: [0.12, 0.22, 0.12]
          }}
          transition={{ 
            duration: 14, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute bottom-1/6 right-1/2 w-14 h-14 md:w-18 md:h-18 bg-[#842A3B] rounded-full"
        />

        {/* Enhanced floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              opacity: [0.2, 0.4, 0.2],
              scale: [1, 1.5, 1],
              y: [0, -15, 0]
            }}
            transition={{
              duration: 5 + i * 0.6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8
            }}
            className="absolute w-3 h-3 bg-[#F5DAA7] rounded-full"
            style={{
              top: `${15 + i * 10}%`,
              left: `${8 + i * 11}%`,
            }}
          />
        ))}

        {/* Animated lines/connectors */}
        <motion.div
          animate={{
            scaleX: [0.5, 1, 0.5],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 left-1/4 right-1/4 h-0.5 bg-[#F5DAA7] transform rotate-12"
        />

        <motion.div
          animate={{
            scaleY: [0.3, 1, 0.3],
            opacity: [0.08, 0.18, 0.08]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute top-1/4 bottom-1/4 left-2/3 w-0.5 bg-[#842A3B] transform rotate-45"
        />
      </div>
    </section>
  )
}

export default Experience