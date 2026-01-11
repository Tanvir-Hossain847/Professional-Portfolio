import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'

// Smooth easing curve for all animations
const smoothEase = [0.25, 0.1, 0.25, 1]

const Contact = () => {
  const [isDesktop, setIsDesktop] = useState(false)
  const form = useRef()
  
  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 768)
    }
    
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('')

    try {
      // EmailJS configuration
      const serviceId = 'YOUR_SERVICE_ID' // Replace with your EmailJS service ID
      const templateId = 'YOUR_TEMPLATE_ID' // Replace with your EmailJS template ID
      const publicKey = 'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key

      // Send email using EmailJS
      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        form.current,
        publicKey
      )

      console.log('Email sent successfully:', result.text)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(''), 5000)
      
    } catch (error) {
      console.error('Email sending failed:', error)
      setSubmitStatus('error')
      
      // Reset error status after 5 seconds
      setTimeout(() => setSubmitStatus(''), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      value: "tanvirhossaintufa@gmail.com",
      link: "mailto:tanvirhossaintufa@gmail.com",
      description: "Send me an email for project inquiries"
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "linkedin.com/in/tanvir-hossain-2a1b52188",
      link: "www.linkedin.com/in/tanvir-hossain-2a1b52188",
      description: "Connect with me professionally"
    },
    {
      icon: "💻",
      title: "GitHub",
      value: "github.com/Tanvir-Hossain847",
      link: "https://github.com/Tanvir-Hossain847",
      description: "Check out my code repositories"
    }
  ]

  return (
    <section id="contact" 
      className="min-h-screen bg-white relative px-4 md:px-8 z-20" 
      style={{ 
        clipPath: isDesktop 
          ? 'polygon(0 8%, 100% 0, 100% 100%, 0 100%)' 
          : 'polygon(0 3%, 100% 0, 100% 100%, 0 100%)',
        paddingTop: '160px', 
        paddingBottom: '80px',
        overflow: 'hidden'
      }}
    >
      <div className="max-w-7xl mx-auto relative z-30 overflow-hidden pt-12 md:pt-0">
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
            Let's Work Together
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
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08, ease: smoothEase }}
          >
            <motion.h3 
              className="text-3xl font-bold text-[#842A3B] mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1, ease: smoothEase }}
            >
              Get In Touch
            </motion.h3>

            <motion.p 
              className="text-gray-700 text-lg leading-relaxed mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.12, ease: smoothEase }}
            >
              I'm always interested in new opportunities, challenging projects, and collaborating with great teams. 
              Whether you have a project in mind or just want to connect, I'd love to hear from you.
            </motion.p>

            {/* Contact Methods */}
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.title}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.14 + index * 0.02, ease: smoothEase }}
                  className="group flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:border-[#842A3B] hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-3xl">{method.icon}</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 group-hover:text-[#842A3B] transition-colors">
                      {method.title}
                    </h4>
                    <p className="text-[#842A3B] font-medium">{method.value}</p>
                    <p className="text-gray-600 text-sm">{method.description}</p>
                  </div>
                  <div className="text-[#842A3B] opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.16, ease: smoothEase }}
            className="relative"
          >
            {/* Background geometric shape */}
            <motion.div
              animate={{ 
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ 
                duration: 10, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg transform rotate-1 border border-gray-200"
            />

            <div className="relative bg-white border border-gray-300 rounded-lg p-8 shadow-2xl">
              <motion.h3 
                className="text-2xl font-bold text-[#842A3B] mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.18, ease: smoothEase }}
              >
                Send Message
              </motion.h3>

              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2, ease: smoothEase }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="from_name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="w-full px-4 text-black py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#842A3B] focus:border-[#842A3B] transition-colors"
                      placeholder="Your full name"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.22, ease: smoothEase }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="from_email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      className="w-full text-black px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#842A3B] focus:border-[#842A3B] transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </motion.div>
                </div>

                {/* Subject */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.24, ease: smoothEase }}
                >
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    required
                    className="w-full text-black px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#842A3B] focus:border-[#842A3B] transition-colors"
                    placeholder="Project inquiry, collaboration, etc."
                  />
                </motion.div>

                {/* Message */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.26, ease: smoothEase }}
                >
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                    rows={5}
                    className="w-full text-black px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#842A3B] focus:border-[#842A3B] transition-colors resize-none"
                    placeholder="Tell me about your project, timeline, and requirements..."
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.28, ease: smoothEase }}
                >
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#842A3B] text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-[#6d2230] hover:shadow-lg transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        Send Message
                      </>
                    )}
                  </button>
                </motion.div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg text-center font-medium flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg text-center font-medium flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    Failed to send message. Please try again or email me directly.
                  </motion.div>
                )}
              </form>

              {/* Corner accent */}
              <div
                className="absolute top-0 left-0 w-16 h-1"
                style={{ backgroundColor: '#842A3B' }}
              />
            </div>
          </motion.div>
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3, ease: smoothEase }}
          className="text-center py-16 border-t border-gray-200"
        >
          <motion.h3
            className="text-3xl font-bold text-[#842A3B] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.35, ease: smoothEase }}
          >
            Ready to Start Your Project?
          </motion.h3>
          <motion.p
            className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4, ease: smoothEase }}
          >
            Let's turn your ideas into reality. I'm here to help you build something extraordinary.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.45, ease: smoothEase }}
          >
            <a
              href="mailto:tanvir.hossain@email.com"
              className="bg-[#842A3B] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-[#6d2230] hover:shadow-lg transform hover:scale-105"
            >
              Email Me Directly
            </a>
            <a
              href="https://linkedin.com/in/tanvir-hossain"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-[#842A3B] text-[#842A3B] px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-[#842A3B] hover:text-white hover:shadow-lg transform hover:scale-105"
            >
              Connect on LinkedIn
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating geometric shapes */}
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

        {/* Static floating particles */}
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
              top: `${15 + i * 15}%`,
              left: `${8 + i * 20}%`,
            }}
          />
        ))}
      </div>
    </section>
  )
}

export default Contact