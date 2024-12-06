import { MessageSquare, Users, FileText, BarChart3, Headphones, PenTool as Tool } from 'lucide-react';

// Definimos los tipos para las props del componente `Feature`
type FeatureProps = {
  icon: React.ReactNode; // Para componentes JSX
  title: string;
  description: string;
};

interface FeaturesGridSectionProps {
  id?: string;
}

export function FeaturesGridSection({ id }: FeaturesGridSectionProps) {
  return (
    <section id={id} className="relative border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Todo lo que Necesitas en Un Solo Lugar</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Gestiona todo tu negocio inmobiliario desde una única plataforma potente e intuitiva
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Feature 
            icon={<MessageSquare className="h-8 w-8 text-[#00ffc8]" />}
            title="Comunicación Unificada"
            description="Integra WhatsApp, Facebook, portales inmobiliarios y páginas web en un solo lugar."
          />
          <Feature 
            icon={<Users className="h-8 w-8 text-[#00ffc8]" />}
            title="Colaboración Eficiente"
            description="Mejora la comunicación entre áreas con acceso detallado a la información."
          />
          <Feature 
            icon={<FileText className="h-8 w-8 text-[#00ffc8]" />}
            title="Gestión de Proyectos"
            description="Crea y gestiona proyectos con almacenamiento ilimitado."
          />
          <Feature 
            icon={<BarChart3 className="h-8 w-8 text-[#00ffc8]" />}
            title="Control de Ventas"
            description="Gestiona ventas y genera contratos personalizados."
          />
          <Feature 
            icon={<Headphones className="h-8 w-8 text-[#00ffc8]" />}
            title="Atención al Cliente"
            description="Gestiona reclamos y solicitudes de manera eficiente."
          />
          <Feature 
            icon={<Tool className="h-8 w-8 text-[#00ffc8]" />}
            title="Postventa Integral"
            description="Sistema completo de gestión postventa."
          />
        </div>
      </div>
    </section>
  );
}

// Tipamos las props del componente `Feature` con TypeScript
const Feature = ({ icon, title, description }: FeatureProps) => (
  <div className="relative group">
    <div className="absolute inset-0 bg-gradient-to-r from-[#00ffc8]/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative bg-black/40 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
      <div className="p-3 bg-white/5 rounded-full w-fit mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-white/70">{description}</p>
    </div>
  </div>
);
