import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'

function App() {
  return (
    <div className="App overflow-x-hidden">
      <Hero />
      <About />
      <Skills />
      <Projects />
      {/* Future sections will go here */}
    </div>
  )
}

export default App