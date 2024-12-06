import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Users2, Lock } from 'lucide-react'

interface FeaturesCardsSectionProps {
  id?: string;
}

export default function FeaturesCardsSection({ id }: FeaturesCardsSectionProps) {
  return (
    <section id={id} className="relative border-t border-white/10 bg-gradient-to-b from-black to-black/95">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            <div className="relative bg-black/40 border border-white/10 rounded-3xl p-8 h-full backdrop-blur-sm">
              <Users2 className="h-12 w-12 text-[#00ffc8] mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Construido para Equipos</h3>
              <p className="text-white/70 mb-6">
                Una plataforma inmobiliaria diseñada para la velocidad del equipo y una mayor colaboración.
              </p>
              <Link href="/features/teams" className="inline-flex items-center text-[#00ffc8] hover:text-[#00ffc8]/80">
                <span>Potencia tu Equipo</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            <div className="relative bg-black/40 border border-white/10 rounded-3xl p-8 h-full backdrop-blur-sm">
              <Lock className="h-12 w-12 text-[#00ffc8] mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Grado Empresarial</h3>
              <p className="text-white/70 mb-6">
                Soluciones diseñadas para seguridad, privacidad y control a gran escala.
              </p>
              <Link href="/features/enterprise" className="inline-flex items-center text-[#00ffc8] hover:text-[#00ffc8]/80">
                <span>Asegura tu Negocio</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

