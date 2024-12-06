import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Sparkles } from 'lucide-react'
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-8rem)] flex items-center">
      <div className="absolute inset-0 bg-[url('/sep09.jpg')] bg-cover bg-center bg-no-repeat opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black" />
      <div className="relative px-6 py-12 md:py-16 lg:py-20 mx-auto max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center space-y-6"
        >
          <Link 
            href="/features/ai"
            className="group inline-flex items-center rounded-full border border-white/10 bg-white/5 px-6 py-2 text-sm font-medium backdrop-blur transition-colors hover:border-white/20 hover:bg-white/10"
          >
            <Badge variant="secondary" className="mr-2 bg-[#00ffc8]/10 text-[#00ffc8]">Nuevo</Badge>
            <span className="text-white/80">Presentamos PowerSales CRM</span>
            <ArrowRight className="ml-2 h-4 w-4 text-white/60 transition-transform group-hover:translate-x-1" />
          </Link>
          
          <div className="space-y-4 max-w-4xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white text-glow">
              El Futuro de la Gestión Inmobiliaria
              <span className="block text-[#00ffc8] mt-2">
                Está Aquí
              </span>
            </h1>
            <p className="mx-auto max-w-[42rem] leading-relaxed text-white/80 text-lg sm:text-xl">
              Transforma tu negocio inmobiliario con insights impulsados por IA, flujos de trabajo automatizados y análisis potentes. Cierra más tratos, más rápido.
            </p>
          </div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-6 w-full justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/signup">
              <Button size="lg" className="w-full sm:w-auto px-8 bg-[#00ffc8] hover:bg-[#00ffc8]/90 text-black font-medium">
                ¡LO QUIERO YA!
              </Button>
            </Link>
            <Link href="/demo">
              <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 border-white/10 hover:bg-white/10">
                Solicita una demo
              </Button>
            </Link>
          </motion.div>

          <motion.div 
            className="relative w-full max-w-[1200px] mt-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="rounded-xl border border-white/10 bg-black/50 shadow-2xl backdrop-blur-sm overflow-hidden">
              <Image
                src="/exem.jpeg"
                alt="PowerSales Dashboard"
                width={1200}
                height={600}
                className="w-full h-auto rounded-xl opacity-90"
              />
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 rounded-full border border-white/10 bg-black/50 px-6 py-2 backdrop-blur">
              <Sparkles className="h-5 w-5 text-[#00ffc8]" />
              <span className="text-sm font-medium text-white/80">Mejoramos todo</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}


