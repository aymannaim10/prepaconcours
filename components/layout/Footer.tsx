import Link from 'next/link'
import { Mail } from 'lucide-react'

const footerLinks = {
  Platform: [
    { label: 'Exam Library', href: '/concours' },
    { label: '2025 Exams', href: '/concours/2025' },
    { label: '2024 Exams', href: '/concours/2024' },
    { label: '2023 Exams', href: '/concours/2023' },
  ],
  Resources: [
    { label: 'Course Recap', href: '/concours' },
    { label: 'Revision Series', href: '/concours' },
    { label: 'Tips & Tricks', href: '/concours' },
    { label: 'Real Exams', href: '/concours' },
  ],
  About: [
    { label: 'Prof. Yasmine', href: '/about' },
    { label: 'UM6SS', href: 'https://um6ss.ma' },
    { label: 'Contact', href: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-gold/12 bg-gradient-to-b from-background to-[#050810] pt-16 pb-8">
      <div className="container-main">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-[10px] bg-gradient-to-br from-gold to-[#A8872A] flex items-center justify-center font-display font-extrabold text-base text-background">
                YM
              </div>
              <div>
                <div className="font-display font-bold text-foreground text-base">Prof. Yasmine</div>
                <div className="text-[0.65rem] text-gold tracking-widest uppercase">Medical Prep · UM6SS</div>
              </div>
            </div>
            <p className="text-muted text-sm leading-relaxed mb-6">
              Premium medical entrance examination preparation platform at the Université Mohammed VI des Sciences de la Santé, Morocco.
            </p>
            <div className="flex flex-col gap-2">
              {[
                { icon: <Mail size={14} />, text: 'prof.univ.yasmine@gmail.com' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-muted text-xs">
                  <span className="text-gold mt-0.5 shrink-0">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <p className="text-xs tracking-[0.12em] uppercase text-gold font-body font-bold mb-5">
                {section}
              </p>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="link-muted text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/6 pt-6 flex items-center justify-between flex-wrap gap-4">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Professor Yasmine – UM6SS Medical Concours Platform. All rights reserved.
          </p>
          <p className="text-xs text-[#4A4E62]">
            English Track · Université Mohammed VI des Sciences de la Santé
          </p>
        </div>
      </div>
    </footer>
  )
}
