import { motion } from 'framer-motion'

export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="relative py-24 text-white">
      <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(60%_50%_at_50%_0%,black,transparent)]">
        <div className="absolute inset-x-0 -top-10 h-40 bg-gradient-to-b from-fuchsia-500/10 to-transparent blur-2xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}>
          <h2 className="text-2xl md:text-4xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-violet-400 to-indigo-400">{title}</span>
          </h2>
          {subtitle && <p className="mt-3 text-white/70 max-w-2xl">{subtitle}</p>}
        </motion.div>
        <div className="mt-10">
          {children}
        </div>
      </div>
    </section>
  )
}
