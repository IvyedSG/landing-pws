"use client"

import Link from "next/link"
import Image from "next/image"
import { Twitter, Linkedin, Github } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto w-full max-w-7xl px-6 pt-12 pb-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
          {/* Logo and description column */}
          <div className="xl:col-span-2">
            <Link href="/" className="inline-block">
              <Image
                src="/powersalesquare.webp"
                alt="PowerSales Logo"
                width={120}
                height={32}
                
              />
            </Link>
            <p className="mt-5 text-[13px] leading-relaxed text-white/60 max-w-[280px]">
              La próxima generación de CRM inmobiliario que te ayuda a cerrar más tratos y hacer crecer tu negocio.
            </p>
          </div>

          {/* Navigation columns */}
          <div>
            <h4 className="font-semibold text-[13px] text-white tracking-wide mb-4">EMPRESA</h4>
            <ul className="space-y-2.5">
              {['Sobre Nosotros', 'Blog', 'Carreras', 'Contacto'].map((link) => (
                <li key={link}>
                  <Link 
                    href={`/${link.toLowerCase().replace(' ', '-')}`} 
                    className="text-[13px] text-white/60 hover:text-white transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[13px] text-white tracking-wide mb-4">RECURSOS</h4>
            <ul className="space-y-2.5">
              {['Documentación', 'Guías', 'Soporte', 'API'].map((link) => (
                <li key={link}>
                  <Link 
                    href={`/${link.toLowerCase().replace('ó', 'o')}`} 
                    className="text-[13px] text-white/60 hover:text-white transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[13px] text-white tracking-wide mb-4">LEGAL</h4>
            <ul className="space-y-2.5">
              {['Privacidad', 'Términos', 'Seguridad'].map((link) => (
                <li key={link}>
                  <Link 
                    href={`/${link.toLowerCase().replace('é', 'e')}`} 
                    className="text-[13px] text-white/60 hover:text-white transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 bg-emerald-400 rounded-full" />
              <span className="text-[13px] text-white/60">
                Todos los sistemas operativos
              </span>
            </div>
            
            <div className="flex items-center">
              <span className="text-[13px] text-white/60 mr-6">
                © {currentYear} PowerSales, Inc.
              </span>
              <div className="flex items-center space-x-4">
                {[
                  { href: "/twitter", icon: Twitter },
                  { href: "/linkedin", icon: Linkedin },
                  { href: "/github", icon: Github }
                ].map(({ href, icon: Icon }) => (
                  <Link 
                    key={href} 
                    href={href} 
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                    <span className="sr-only">{href.slice(1)}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

