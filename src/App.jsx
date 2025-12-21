function App() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0">
        {/* Large accent shape */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#842A3B] opacity-20 transform rotate-45 rounded-3xl"></div>
        {/* Secondary accent */}
        <div className="absolute bottom-32 left-16 w-64 h-64 bg-[#F5DAA7] opacity-10 rounded-full"></div>
        {/* Sharp lines */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#842A3B] to-transparent opacity-30"></div>
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F5DAA7] to-transparent opacity-20"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center p-8">
        <div className="text-2xl font-bold text-[#F5DAA7] tracking-wider">
          TH
        </div>
        <div className="hidden md:flex space-x-12">
          <a href="#about" className="text-white hover:text-[#F5DAA7] transition-colors duration-300 font-light tracking-wide">About</a>
          <a href="#work" className="text-white hover:text-[#F5DAA7] transition-colors duration-300 font-light tracking-wide">Work</a>
          <a href="#contact" className="text-white hover:text-[#F5DAA7] transition-colors duration-300 font-light tracking-wide">Contact</a>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-between min-h-[80vh] px-8 max-w-7xl mx-auto">
        {/* Left Content */}
        <div className="flex-1 max-w-2xl">
          <h1 className="text-7xl md:text-8xl font-light leading-none mb-8">
            <div className="text-white mb-2">Creative</div>
            <div className="text-[#842A3B] font-medium">Developer</div>
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 max-w-lg leading-relaxed font-light">
            Crafting digital experiences with precision and artistry. 
            Where code meets creativity.
          </p>

          <div className="flex space-x-6">
            <button className="bg-[#842A3B] text-white px-8 py-4 font-medium tracking-wide hover:bg-[#6d2230] transition-colors duration-300 border border-[#842A3B]">
              VIEW WORK
            </button>
            <button className="border border-[#F5DAA7] text-[#F5DAA7] px-8 py-4 font-medium tracking-wide hover:bg-[#F5DAA7] hover:text-black transition-all duration-300">
              GET IN TOUCH
            </button>
          </div>
        </div>

        {/* Right Artistic Element */}
        <div className="hidden lg:flex flex-1 justify-center items-center relative">
          {/* Main Circle */}
          <div className="w-80 h-80 border border-[#F5DAA7] rounded-full relative">
            {/* Inner elements */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#842A3B] rounded-full opacity-80"></div>
            
            {/* Orbiting elements */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#F5DAA7] rounded-full"></div>
            <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 w-6 h-6 bg-[#842A3B] rounded-full"></div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#F5DAA7] rounded-full"></div>
            <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 w-5 h-5 bg-[#842A3B] rounded-full"></div>
          </div>

          {/* Sharp geometric lines */}
          <div className="absolute top-1/4 right-1/4 w-24 h-px bg-[#F5DAA7] transform rotate-45"></div>
          <div className="absolute bottom-1/4 left-1/4 w-32 h-px bg-[#842A3B] transform -rotate-45"></div>
          <div className="absolute top-1/2 right-0 w-16 h-px bg-[#F5DAA7] transform rotate-90"></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-[#F5DAA7]">
        <div className="w-px h-16 bg-[#F5DAA7] mb-4 opacity-60"></div>
        <span className="text-sm tracking-widest font-light">SCROLL</span>
      </div>

      {/* Side decorative elements */}
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4">
        <div className="w-1 h-12 bg-[#842A3B]"></div>
        <div className="w-1 h-8 bg-[#F5DAA7]"></div>
        <div className="w-1 h-16 bg-[#842A3B] opacity-50"></div>
      </div>

      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4">
        <div className="w-1 h-8 bg-[#F5DAA7] opacity-50"></div>
        <div className="w-1 h-16 bg-[#842A3B]"></div>
        <div className="w-1 h-12 bg-[#F5DAA7]"></div>
      </div>
    </div>
  )
}

export default App