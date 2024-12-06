import { motion } from "framer-motion"
import { AnimatedCounter } from "./AnimatedCounter"

interface EnhancedMetricsSectionProps {
  id?: string;
}

export function EnhancedMetricsSection({ id }: EnhancedMetricsSectionProps) {
  return (
    <section id={id} className="relative border-t border-white/10 bg-black">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />
      <div className="mx-auto max-w-7xl px-6 py-24 relative">
        <div className="grid md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#00ffc8]/20 to-purple-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            <div className="relative bg-black/40 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-4xl font-bold text-[#00ffc8] mb-2">
                <AnimatedCounter value={98} />%
              </div>
              <p className="text-white/70">Satisfacción del Cliente</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#00ffc8]/20 to-purple-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            <div className="relative bg-black/40 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-4xl font-bold text-[#00ffc8] mb-2">
                <AnimatedCounter value={50} />K+
              </div>
              <p className="text-white/70">Usuarios Activos</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#00ffc8]/20 to-purple-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            <div className="relative bg-black/40 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-4xl font-bold text-[#00ffc8] mb-2">
                <AnimatedCounter value={2.5} />x
              </div>
              <p className="text-white/70">Más Rápido</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#00ffc8]/20 to-purple-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            <div className="relative bg-black/40 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-4xl font-bold text-[#00ffc8] mb-2">
                <AnimatedCounter value={24} />/7
              </div>
              <p className="text-white/70">Soporte Disponible</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

