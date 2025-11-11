import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#0b0b12]">
      <Navbar />
      <Hero />

      <Section id="about" title="About" subtitle="I craft performant, scalable products with an eye for aesthetics and detail.">
        <div className="relative p-[1px] rounded-2xl bg-gradient-to-br from-fuchsia-500/30 to-indigo-500/30">
          <div className="rounded-2xl bg-black/40 backdrop-blur-xl p-6 text-white/80">
            Over the last few years, I’ve built full‑stack platforms, design systems, and delightful user interfaces. I love shipping features end‑to‑end — from data models and APIs to pixel‑perfect frontend.
          </div>
        </div>
      </Section>

      <Section id="skills" title="Skills" subtitle="A pragmatic toolset for modern product engineering.">
        <Skills />
      </Section>

      <Section id="projects" title="Projects" subtitle="Selected work that highlights my approach to product and engineering.">
        <Projects />
      </Section>

      <Section id="contact" title="Let’s build the future" subtitle="Have an idea in mind? I’m open to freelance, contract, and full‑time roles.">
        <Contact />
      </Section>

      <footer className="border-t border-white/10 py-8 text-center text-white/60">
        <div className="max-w-7xl mx-auto px-4">© {new Date().getFullYear()} Your Name — All rights reserved.</div>
      </footer>
    </div>
  )
}

export default App
