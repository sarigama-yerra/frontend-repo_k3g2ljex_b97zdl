import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    // demo: pretend to submit
    await new Promise((r) => setTimeout(r, 800))
    setStatus('Thanks! I will get back to you soon.')
  }

  return (
    <form onSubmit={onSubmit} className="max-w-2xl">
      <div className="grid md:grid-cols-2 gap-4">
        <input required placeholder="Name" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white/90 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40" />
        <input type="email" required placeholder="Email" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white/90 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40" />
      </div>
      <textarea required placeholder="Tell me about your project..." rows="5" className="mt-4 w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white/90 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40" />
      <div className="mt-4 flex items-center gap-3">
        <button className="rounded-full bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white px-5 py-2 font-semibold hover:opacity-95 transition-opacity">Send</button>
        <span className="text-sm text-white/70">{status}</span>
      </div>
    </form>
  )
}
