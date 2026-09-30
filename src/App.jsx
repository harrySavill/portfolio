import './App.css'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from "./components/Projects.jsx";
import Contact from './components/Contact.jsx'
import { Analytics } from '@vercel/analytics/react'

function App() {

  return (
    <>
      <Header />
      <main>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
        <Analytics />
    </>
  )
}

export default App
