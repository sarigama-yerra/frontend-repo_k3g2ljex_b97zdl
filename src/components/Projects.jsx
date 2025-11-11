import { motion } from 'framer-motion'

const items = [
  {
    title: 'Cyber Nexus Platform',
    description: 'A modular, cloud-native app with real-time collaboration, microservices, and a reactive UI.',
    stack: ['React', 'FastAPI', 'MongoDB'],
    link: '#'
  },
  {
    title: 'HoloShop 3D',
    description: 'E-commerce with 3D product viewers, edge functions, and AI recommendations.',
    stack: ['Next.js', 'Node', 'Stripe'],
    link: '#'
  },
  {
    title: 'Nebula Analytics',
    description: 'Telemetry pipeline with Kafka, time-series DB, and beautiful dashboards.',
    stack: ['TypeScript', 'Python', 'Grafana'],
    link: '#'
  }
]

export default function Projects() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((p, i) => (
        <motion.a
          key={p.title}
          href={p.link}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 overflow-hidden hover:shadow-xl hover:shadow-fuchsia-500/10 transition-all"
        >
          <div className="absolute -inset-1 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-fuchsia-500/20 via-transparent to-indigo-500/20 blur-2xl transition-opacity" />
          <div className="relative">
            <div className="text-sm text-fuchsia-300/90">{p.stack.join(' • ')}</div>
            <h3 className="mt-2 text-xl font-semibold">{p.title}</h3>
            <p className="mt-2 text-white/80 text-sm">{p.description}</p>
          </div>
        </motion.a>
      ))}
    </div>
  )
}
