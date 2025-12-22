import { motion } from 'framer-motion'

const About = () => {
  const skills = [
    {
      title: "1+ year experience in MERN stack development",
      icon: "⚡",
      description: "Building full-stack applications with modern technologies"
    },
    {
      title: "Strong backend logic with Node.js & Express",
      icon: "🚀",
      description: "Creating robust server-side architectures and APIs"
    },
    {
      title: "Experience with Django & relational databases (MySQL)",
      icon: "🗄️",
      description: "Database design and optimization for scalable systems"
    },
    {
      title: "Familiar with authentication, role-based access, REST APIs",
      icon: "🔐",
      description: "Implementing secure and efficient user management systems"
    },
    {
      title: "Comfortable working with teams & real-world projects",
      icon: "👥",
      description: "Collaborative development and agile methodologies"
    }
  ]

  return (
    <section className="min-h-screen bg-white relative py-20 px-8" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }}>
      <div className="max-w-6xl mx-auto pb-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-light text-black mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            About Me
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-[#842A3B] mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-16 items-center">
          {/* Left Content - Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-2"
          >
            <motion.h3 
              className="text-3xl font-semibold text-[#842A3B] mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.25 }}
            >
              Why should you hire me?
            </motion.h3>
            
            <motion.div 
              className="text-lg text-gray-700 leading-relaxed space-y-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p>
                I'm a dedicated MERN stack developer with a passion for creating scalable, 
                efficient web applications. My approach combines clean code practices with 
                innovative problem-solving to deliver solutions that make a real impact.
              </p>
              <p>
                With hands-on experience in both frontend and backend development, I focus 
                on building robust systems that can grow with your business needs while 
                maintaining optimal performance and security.
              </p>
            </motion.div>

            {/* Tech Stack Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              {['React', 'Node.js', 'Express', 'MongoDB', 'MySQL', 'Django'].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium cursor-pointer transition-colors hover:scale-105 hover:bg-[#842A3B] hover:text-[#F5DAA7]"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Center - Profile Picture Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Main Profile Shape */}
              <motion.div
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.02, 1]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="w-64 h-64 bg-gradient-to-br from-[#842A3B] to-[#6d2230] rounded-3xl relative overflow-hidden shadow-2xl"
              >
                {/* Inner geometric pattern */}
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                  className="absolute inset-4 border-2 border-[#F5DAA7] rounded-2xl"
                />
                
                {/* Floating elements inside */}
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -10, 0],
                      x: [0, 5, 0],
                      opacity: [0.4, 0.8, 0.4]
                    }}
                    transition={{
                      duration: 3 + i * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.5
                    }}
                    className="absolute w-3 h-3 bg-[#F5DAA7] rounded-full"
                    style={{
                      top: `${20 + i * 15}%`,
                      left: `${15 + i * 20}%`,
                    }}
                  />
                ))}
                
                {/* Placeholder text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.span 
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-[#F5DAA7] font-medium text-sm"
                  >
                   
                  </motion.span>
                </div>
              </motion.div>

              {/* Orbiting elements around profile */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#F5DAA7] rounded-full" />
                <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 w-3 h-3 bg-[#842A3B] rounded-full" />
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-[#F5DAA7] rounded-full opacity-70" />
                <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 w-2 h-2 bg-[#842A3B] rounded-full" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <motion.h3 
            className="text-3xl font-semibold text-center text-[#842A3B] mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Core Strengths
          </motion.h3>

          {/* Skills Grid with Cascading Animation */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  type: "spring",
                  stiffness: 100,
                  delay: index * 0.1
                }}
                
                className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-[#F5DAA7] hover:scale-105 transition-all duration-400 cursor-pointer relative overflow-hidden shadow-lg"
              >
                {/* Background animation on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#F5DAA7] to-transparent opacity-0 group-hover:opacity-5"
                  initial={{ scale: 0, borderRadius: "50%" }}
                  whileHover={{ scale: 2, borderRadius: "0%" }}
                  transition={{ duration: 0.4 }}
                />

                <div className="relative z-10">
                  <div className="flex items-start space-x-4 mb-4">
                    <motion.div
                      whileHover={{ scale: 1.5, rotate: 30 }}
                      transition={{ duration: 0.2 }}
                      className="text-3xl flex-shrink-0"
                    >
                      {skill.icon}
                    </motion.div>
                    <motion.h4 
                      className="font-semibold text-gray-900 group-hover:text-[#842A3B] transition-colors leading-tight"
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      {skill.title}
                    </motion.h4>
                  </div>
                  
                  <motion.p 
                    className="text-gray-600 text-sm leading-relaxed"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {skill.description}
                  </motion.p>

                  {/* Animated progress indicator */}
                  <motion.div
                    className="h-1 bg-[#F5DAA7] mt-4 rounded-full opacity-0 group-hover:opacity-100"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.p 
            className="text-xl text-gray-600 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.7 }}
          >
            Ready to bring your ideas to life with clean, scalable code.
          </motion.p>
          
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.8 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 15px 35px rgba(132, 42, 59, 0.3)",
              y: -2
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#842A3B] text-white px-8 py-3 rounded-full font-medium tracking-wide hover:bg-[#6d2230] transition-colors duration-200"
          >
            Let's Work Together
          </motion.button>
        </motion.div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated circle */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-20 right-10 w-32 h-32 border border-[#F5DAA7] rounded-full"
        />
        
        {/* Floating square */}
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 45, 0],
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-32 left-10 w-24 h-24 bg-[#842A3B] rounded-lg transform"
        />
        
        {/* Additional floating elements */}
        <motion.div
          animate={{ 
            x: [0, 20, 0],
            y: [0, -15, 0],
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-1/2 right-1/4 w-16 h-16 border-2 border-[#F5DAA7] rounded-full"
        />
        
        <motion.div
          animate={{ 
            rotate: [0, -360],
            scale: [1, 0.8, 1],
            opacity: [0.08, 0.2, 0.08]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "linear",
            delay: 5
          }}
          className="absolute top-3/4 left-1/4 w-20 h-20 bg-[#F5DAA7] rounded-lg transform rotate-45"
        />
        
        {/* Floating dots */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.2
            }}
            className="absolute w-2 h-2 bg-[#842A3B] rounded-full"
            style={{
              top: `${10 + i * 15}%`,
              left: `${5 + i * 12}%`,
            }}
          />
        ))}
      </div>

      {/* Slanted transition overlay */}
      <div className="absolute bottom-0 left-0 w-full h-32 pointer-events-none">
        <motion.div
          animate={{ 
            opacity: [0.1, 0.2, 0.1],
            scaleX: [1, 1.02, 1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-0 w-full h-full bg-gradient-to-t from-black/20 to-transparent"
          style={{ clipPath: 'polygon(0 100%, 100% 70%, 100% 100%)' }}
        />
      </div>
    </section>
  )
}

export default About