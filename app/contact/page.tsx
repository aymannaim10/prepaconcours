'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react'
import SectionBadge from '@/components/ui/SectionBadge'

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sent'>('idle')
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setTimeout(() => setStatus('sent'), 600)
  }

  const inputClass = 'w-full py-3.5 px-4 rounded-lg bg-surface/60 border border-white/8 text-foreground text-sm font-body outline-none transition-colors focus:border-gold/50 focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:outline-none'

  return (
    <div className="pt-20 min-h-screen">
      <div className="grid-bg py-20 relative overflow-hidden">
        <div className="max-w-[1100px] mx-auto px-8 relative">
          <nav className="breadcrumb mb-8">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">›</span>
            <span className="text-gold">Contact</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Info */}
            <div>
              <div className="mb-4">
                <SectionBadge>Get in Touch</SectionBadge>
              </div>
              <h1 className="text-foreground mb-4">
                Contact <span className="gradient-gold">Prof. Yasmine</span>
              </h1>
              <p className="text-muted text-[0.95rem] leading-relaxed mb-10">
                Have questions about the platform, resources, or your preparation strategy?
                Prof. Yasmine is happy to help guide you on your journey to medical school.
              </p>

              {[
                { icon: <Mail size={18} />, label: 'Email', value: 'yasmine@um6ss.ma' },
                { icon: <MapPin size={18} />, label: 'Location', value: 'UM6SS, Casablanca, Morocco' },
                { icon: <Phone size={18} />, label: 'Inquiries', value: 'Via email preferred' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 mb-6">
                  <div className="w-11 h-11 rounded-[10px] bg-gold-dim border border-gold/20 flex items-center justify-center text-gold shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-muted text-[0.75rem] tracking-widest uppercase mb-0.5">{item.label}</div>
                    <div className="text-foreground text-[0.9rem] font-medium">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="glass-card-gold p-10">
              {status === 'sent' ? (
                <div className="text-center py-8">
                  <CheckCircle size={48} color="#4CE87C" className="mb-4 mx-auto" />
                  <h3 className="text-foreground mb-2">Message Sent!</h3>
                  <p className="text-muted text-[0.9rem]">
                    Prof. Yasmine will get back to you soon. In the meantime, start exploring the exam library.
                  </p>
                  <Link href="/concours" className="btn-gold mt-6 inline-flex">
                    Explore Exams
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <h3 className="text-foreground mb-2">Send a Message</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-muted text-[0.8rem] block mb-1.5">Full Name</label>
                      <input
                        required
                        className={inputClass}
                        placeholder="Your name"
                        value={form.name}
                        onChange={(e) => setForm(f => ({ ...f, name: e.target.value }))}
                      />
                    </div>
                    <div>
                      <label className="text-muted text-[0.8rem] block mb-1.5">Email</label>
                      <input
                        type="email"
                        required
                        className={inputClass}
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={(e) => setForm(f => ({ ...f, email: e.target.value }))}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-muted text-[0.8rem] block mb-1.5">Subject</label>
                    <input
                      required
                      className={inputClass}
                      placeholder="How can Prof. Yasmine help?"
                      value={form.subject}
                      onChange={(e) => setForm(f => ({ ...f, subject: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label className="text-muted text-[0.8rem] block mb-1.5">Message</label>
                    <textarea
                      required
                      rows={5}
                      className={`${inputClass} resize-y`}
                      placeholder="Tell us about your preparation goals, questions about specific exam years, or any other inquiry..."
                      value={form.message}
                      onChange={(e) => setForm(f => ({ ...f, message: e.target.value }))}
                    />
                  </div>
                  <button type="submit" className="btn-gold justify-center mt-2">
                    <Send size={16} /> Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
