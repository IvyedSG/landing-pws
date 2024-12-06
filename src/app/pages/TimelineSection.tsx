import { motion } from "framer-motion"

interface TimelineSectionProps {
  id?: string;
}

export function TimelineSection({ id }: TimelineSectionProps) {
  return (
    <section id={id} className="relative border-t border-white/10 bg-black/95">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Evolución Constante
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Mejoramos continuamente para ofrecerte la mejor experiencia en gestión inmobiliaria
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 h-full w-px bg-white/10 -translate-x-1/2" />
            
            <div className="space-y-12">
              {[
                {
                  year: "2024",
                  title: "Lanzamiento de PowerSales AI",
                  description: "Inteligencia artificial aplicada a la gestión inmobiliaria"
                },
                {
                  year: "2023",
                  title: "Integración con Portales Inmobiliarios",
                  description: "Conexión automática con los principales portales del mercado"
                },
                {
                  year: "2022",
                  title: "Sistema de Análisis Predictivo",
                  description: "Predicciones basadas en machine learning para optimizar ventas"
                }
              ].map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? "flex-row-reverse text-right" : ""
                  }`}
                >
                  <div className="flex-1">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
                      <div className="text-[#00ffc8] font-bold mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-white/70">{item.description}</p>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-center w-6 h-6">
                    <div className="absolute w-3 h-3 bg-[#00ffc8] rounded-full" />
                    <div className="absolute w-6 h-6 bg-[#00ffc8]/30 rounded-full animate-ping" />
                  </div>
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

