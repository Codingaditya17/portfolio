import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Achievements from '@/components/Achievements'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Achievements />
      <Skills />
      <Contact />
    </main>
  )
}

