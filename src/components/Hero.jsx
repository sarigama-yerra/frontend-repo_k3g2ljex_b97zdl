import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-[#0b0b12] via-[#0b0b12] to-[#0f0b18] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-[#0b0b12]/80 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 grid lg:grid-cols-2 gap-10">
        <div className="flex flex-col justify-center">
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} className="text-sm md:text-base text-fuchsia-300/90">Full‑Stack Developer • Building futuristic web experiences</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }} className="mt-3 text-4xl md:text-6xl font-bold tracking-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-violet-400 to-indigo-400">Your Name</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }} className="mt-4 text-white/80 max-w-xl">
            I design and engineer end‑to‑end applications that blend clean architecture with immersive, modern UI. Let’s build something remarkable.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7 }} className="mt-8 flex items-center gap-3">
            <a href="#projects" className="rounded-full bg-white text-black px-5 py-2 text-sm font-semibold hover:scale-[1.02] active:scale-[.99] transition-transform">View projects</a>
            <a href="#contact" className="rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white hover:bg-white/10 transition-colors">Contact</a>
          </motion.div>
        </div>

        <div className="hidden lg:flex items-center justify-center">
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 0.7 }} className="relative w-full max-w-md p-[1px] rounded-2xl bg-gradient-to-br from-fuchsia-500/40 to-indigo-500/40">
            <div className="rounded-2xl bg-black/40 backdrop-blur-xl p-6">
              <div className="grid grid-cols-3 gap-3 text-center text-sm">
                {['React', 'Next.js', 'Node', 'FastAPI', 'MongoDB', 'Tailwind', 'TypeScript', 'Framer', 'Vite'].map((s) => (
                  <div key={s} className="rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white/90">{s}</div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.6 }} className="w-5 h-8 rounded-full border border-white/30 p-1">
          <motion.div animate={{ y: [0, 12, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }} className="w-2 h-2 rounded-full bg-white" />
        </motion.div>
      </div>
    </section>
  )
}
