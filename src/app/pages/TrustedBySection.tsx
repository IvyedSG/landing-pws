export function TrustedBySection() {
    return (
      <section className="relative border-t border-white/10 bg-black/95">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-center text-xl text-white/80 mb-12">
            Más de 1000+ Inmobiliarias Confían en Nosotros
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
            {['remax', 'century21', 'coldwellbanker', 'kw', 'era'].map((brand) => (
              <div key={brand} className="h-12 w-32 bg-white/5 rounded-lg flex items-center justify-center">
                <span className="text-white/40 font-medium">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  