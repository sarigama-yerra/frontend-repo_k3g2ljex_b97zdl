import { motion } from 'framer-motion'
import { Code2, Server, Database, Sparkles } from 'lucide-react'

const skills = [
  {
    icon: Code2,
    title: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
  },
  {
    icon: Server,
    title: 'Backend',
    items: ['FastAPI', 'Node/Express', 'REST', 'GraphQL', 'Auth'],
  },
  {
    icon: Database,
    title: 'Data & Infra',
    items: ['MongoDB', 'Postgres', 'Redis', 'CI/CD', 'Docker'],
  },
]

export default function Skills() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {skills.map((s, i) => (
        <motion.div
          key={s.title}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 overflow-hidden"
        >
          <div className="absolute -inset-1 bg-gradient-to-br from-fuchsia-500/10 via-transparent to-indigo-500/10 blur-2xl" />
          <div className="relative">
            <s.icon className="w-6 h-6 text-fuchsia-300" />
            <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
            <div className="mt-2 text-sm text-white/80">{s.items.join(' • ')}</div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
