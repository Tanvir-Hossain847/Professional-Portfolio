import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "⚡",
      color: "#842A3B",
      skills: [
        "React",
        "JavaScript (ES6+)",
        "Tailwind CSS",
        "HTML5 / CSS3",
        "React Router"
      ]
    },
    {
      title: "Backend",
      icon: "🚀",
      color: "#F5DAA7",
      skills: [
        "Node.js",
        "Express.js",
        "Django",
        "REST APIs",
        "JWT Authentication"
      ]
    },
    {
      title: "Database",
      icon: "🗄️",
      color: "#842A3B",
      skills: [
        "MongoDB",
        "MySQL",
        "Mongoose",
        "Prisma"
      ]
    },
    {
      title: "Tools & Others",
      icon: "🛠️",
      color: "#F5DAA7",
      skills: [
        "Git & GitHub",
        "Axios",
        "Firebase",
        "Deployment (Vercel, Netlify, Render)"
      ]
    }
  ]

  return (
    <section className="min-h-screen bg-black relative py-20 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-light text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Technical Skills
          </motion.h2>
          <motion.div
            className="w-32 h-1 bg-[#F5DAA7] mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.p
            className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A comprehensive toolkit for building modern, scalable web applications
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.7, 
                delay: 0.5 + categoryIndex * 0.15,
                type: "spring",
                stiffness: 100
              }}
              className="relative group"
            >
              {/* Background geometric shape */}
              <motion.div
                animate={{ 
                  rotate: [0, 2, -2, 0],
                  scale: [1, 1.01, 1]
                }}
                transition={{ 
                  duration: 8 + categoryIndex * 2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl transform rotate-1"
              />
              
              {/* Main card */}
              <div className="relative bg-gray-900 border border-gray-700 rounded-2xl p-6 h-full">
                {/* Category header */}
                <motion.div 
                  className="flex items-center space-x-3 mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 + categoryIndex * 0.15 }}
                >
                  <motion.div
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 4 + categoryIndex, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: categoryIndex * 0.5
                    }}
                    className="text-2xl"
                  >
                    {category.icon}
                  </motion.div>
                  <h3 
                    className="text-xl font-semibold text-white"
                    style={{ color: category.color }}
                  >
                    {category.title}
                  </h3>
                </motion.div>

                {/* Skills list */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.4, 
                        delay: 0.8 + categoryIndex * 0.15 + skillIndex * 0.05 
                      }}
                      className="relative"
                    >
                      {/* Skill item */}
                      <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-800 border border-gray-600">
                        {/* Geometric indicator */}
                        <motion.div
                          animate={{ 
                            rotate: [0, 360],
                            opacity: [0.5, 1, 0.5]
                          }}
                          transition={{ 
                            duration: 6 + skillIndex, 
                            repeat: Infinity, 
                            ease: "linear",
                            delay: skillIndex * 0.3
                          }}
                          className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{ backgroundColor: category.color }}
                        />
                        
                        <span className="text-gray-300 text-sm font-medium">
                          {skill}
                        </span>
                      </div>

                      {/* Animated line */}
                      <motion.div
                        className="absolute left-0 top-0 h-full w-1 rounded-full"
                        style={{ backgroundColor: category.color }}
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.6, 
                          delay: 1 + categoryIndex * 0.15 + skillIndex * 0.05,
                          ease: "easeOut"
                        }}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Bottom geometric accent */}
                <motion.div
                  className="absolute bottom-4 right-4 w-8 h-8 border-2 rounded-lg transform rotate-45"
                  style={{ borderColor: category.color }}
                  animate={{ 
                    rotate: [45, 90, 45],
                    opacity: [0.3, 0.7, 0.3]
                  }}
                  transition={{ 
                    duration: 5 + categoryIndex, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: categoryIndex * 0.8
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom decorative section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="text-center mt-16"
        >
          <motion.p
            className="text-gray-400 text-lg mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.7 }}
          >
            Constantly learning and adapting to new technologies
          </motion.p>
          
          {/* Animated tech icons */}
          <motion.div
            className="flex justify-center space-x-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.9 }}
          >
            {['⚛️', '🟢', '🐍', '🔥', '📱'].map((icon, index) => (
              <motion.div
                key={index}
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 3 + index * 0.5, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: index * 0.2
                }}
                className="text-3xl opacity-60"
              >
                {icon}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Background geometric elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large rotating shapes */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-20 right-20 w-64 h-64 border-2 border-[#F5DAA7] rounded-3xl transform rotate-12"
        />
        
        <motion.div
          animate={{ 
            rotate: [0, -360],
            y: [0, -30, 0],
            x: [0, 15, 0],
            opacity: [0.12, 0.22, 0.12]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-32 left-16 w-48 h-48 bg-[#842A3B] rounded-2xl transform rotate-45"
        />

        {/* Medium floating shapes */}
        <motion.div
          animate={{ 
            rotate: [0, 180, 360],
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-1/2 right-1/3 w-32 h-32 border-2 border-[#842A3B] rounded-full"
        />

        <motion.div
          animate={{ 
            rotate: [45, 135, 225, 315, 45],
            y: [0, -25, 0],
            opacity: [0.08, 0.25, 0.08]
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-1/4 left-1/3 w-24 h-24 bg-[#F5DAA7] rounded-lg transform"
        />

        {/* Floating geometric particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -40, 0],
              x: [0, 20, 0],
              rotate: [0, 180, 360],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
            className={`absolute w-3 h-3 ${i % 2 === 0 ? 'bg-[#F5DAA7]' : 'border border-[#842A3B]'} transform rotate-45`}
            style={{
              top: `${8 + i * 7}%`,
              left: `${3 + i * 8}%`,
            }}
          />
        ))}

        {/* Additional dynamic lines */}
        <motion.div
          animate={{ 
            scaleX: [0, 1, 0],
            opacity: [0, 0.4, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F5DAA7] to-transparent"
        />

        <motion.div
          animate={{ 
            scaleX: [0, 1, 0],
            opacity: [0, 0.3, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 5
          }}
          className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#842A3B] to-transparent"
        />

        {/* Corner accent elements */}
        <motion.div
          animate={{ 
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.35, 0.15]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            ease: "linear"
          }}
          className="absolute top-10 left-10 w-16 h-16 border-2 border-[#F5DAA7] transform rotate-45"
        />

        <motion.div
          animate={{ 
            rotate: [360, 270, 180, 90, 0],
            scale: [1, 1.4, 1],
            opacity: [0.12, 0.3, 0.12]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "linear",
            delay: 2
          }}
          className="absolute bottom-10 right-10 w-20 h-20 bg-[#842A3B] rounded-full"
        />
      </div>
    </section>
  )
}

export default Skills