import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Eye, Shield, Zap } from "lucide-react";
import { AnimatedCounter } from "./AnimatedCounter";
import Image from "next/image"; // Importa el componente

interface VisualizationSectionProps {
  id?: string;
}

export function VisualizationSection({ id }: VisualizationSectionProps) {
  return (
    <section id={id} className="relative border-t border-white/10 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-50" />
      <div className="mx-auto max-w-7xl px-6 py-24 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Visualiza tu Éxito en Tiempo Real
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Obtén una visión clara de tu negocio con dashboards interactivos y reportes detallados
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <Badge className="bg-[#00ffc8]/10 text-[#00ffc8] hover:bg-[#00ffc8]/20">
                Visualización Avanzada
              </Badge>
              <h3 className="text-2xl md:text-4xl font-bold text-white">
                Toma Decisiones Informadas con Datos en Tiempo Real
              </h3>
              <p className="text-white/70 text-lg">
                Nuestros dashboards interactivos te permiten visualizar el rendimiento de tu negocio, identificar tendencias y tomar decisiones estratégicas basadas en datos reales.
              </p>
            </div>

            <div className="grid gap-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-4 bg-white/5 rounded-lg p-4"
              >
                <Eye className="h-6 w-6 text-[#00ffc8]" />
                <span className="text-white/90">Visualización de datos en tiempo real</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-4 bg-white/5 rounded-lg p-4"
              >
                <Shield className="h-6 w-6 text-[#00ffc8]" />
                <span className="text-white/90">Seguridad y privacidad garantizadas</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-4 bg-white/5 rounded-lg p-4"
              >
                <Zap className="h-6 w-6 text-[#00ffc8]" />
                <span className="text-white/90">Actualizaciones instantáneas</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#00ffc8]/20 to-purple-500/20 rounded-xl blur-xl" />
            <div className="relative rounded-xl border border-white/10 overflow-hidden">
              <Image
                src="/11.png"
                alt="Dashboard Analytics"
                width={1200} // Cambia por el ancho real
                height={800} // Cambia por la altura real
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-4">
                <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-[#00ffc8]">
                    <AnimatedCounter value={98} />%
                  </div>
                  <div className="text-sm text-white/70">Precisión</div>
                </div>
                <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-[#00ffc8]">
                    <AnimatedCounter value={2.5} duration={1.5} />x
                  </div>
                  <div className="text-sm text-white/70">Más Rápido</div>
                </div>
                <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-[#00ffc8]">
                    <AnimatedCounter value={24} />/7
                  </div>
                  <div className="text-sm text-white/70">Monitoreo</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
