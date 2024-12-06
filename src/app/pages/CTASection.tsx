import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="relative border-t border-white/10 bg-gradient-to-b from-black to-black/95">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00ffc8]/20 to-purple-500/20 rounded-3xl blur-2xl" />
          <div className="relative bg-black/40 border border-white/10 rounded-3xl p-12 backdrop-blur-sm">
            <div className="max-w-2xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white">¿Listo para Revolucionar tu Negocio Inmobiliario?</h2>
              <p className="text-white/70 text-lg">
                Únete a las empresas líderes que ya están transformando la industria inmobiliaria con PowerSales
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/signup">
                  <Button size="lg" className="w-full sm:w-auto px-8 bg-[#00ffc8] hover:bg-[#00ffc8]/90 text-black font-medium">
                    Comienza tu prueba gratuita
                  </Button>
                </Link>
                <Link href="/demo">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 border-white/10 hover:bg-white/10">
                    Solicita una demostración
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

