"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin } from 'lucide-react'

interface ContactSectionProps {
  id?: string;
}

const inputVariants = {
  initial: { 
    opacity: 0,
    y: 20,
  },
  animate: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: custom * 0.1,
    }
  }),
}

const formVariants = {
  initial: { 
    opacity: 0,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    }
  }
}

export function ContactSection({ id }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    company: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <section id={id} className="relative py-24 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <div className="relative z-10 container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold text-white mb-6">
                  Hablemos de tu próximo proyecto
                </h2>
                <p className="text-lg text-white/70 mb-12">
                  Estamos aquí para ayudarte a llevar tu negocio inmobiliario al siguiente nivel. 
                  Contáctanos y descubre cómo PowerSales puede impulsar tu éxito.
                </p>
                <div className="space-y-8">
                  <motion.div 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#00ffc8]/10 mr-4">
                      <Phone className="h-5 w-5 text-[#00ffc8]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Llámanos</h3>
                      <p className="text-white/70">+1 (555) 000-0000</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#00ffc8]/10 mr-4">
                      <Mail className="h-5 w-5 text-[#00ffc8]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Escríbenos</h3>
                      <p className="text-white/70">info@powersales.com</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#00ffc8]/10 mr-4">
                      <MapPin className="h-5 w-5 text-[#00ffc8]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Visítanos</h3>
                      <p className="text-white/70">123 PowerSales St, Tech City, TC 12345</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
            
            <div className="w-full lg:w-1/2 px-4">
              <motion.div
                variants={formVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/5"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div variants={inputVariants} custom={0}>
                    <label htmlFor="fullName" className="block text-sm font-medium text-white mb-2">
                      Nombres y Apellidos*
                    </label>
                    <Input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full bg-white/5 border-white/10 text-white focus:ring-[#00ffc8] focus:border-[#00ffc8]"
                      required
                    />
                  </motion.div>

                  <motion.div variants={inputVariants} custom={1}>
                    <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                      Celular*
                    </label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-white/5 border-white/10 text-white focus:ring-[#00ffc8] focus:border-[#00ffc8]"
                      required
                    />
                  </motion.div>

                  <motion.div variants={inputVariants} custom={2}>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      Correo*
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white/5 border-white/10 text-white focus:ring-[#00ffc8] focus:border-[#00ffc8]"
                      required
                    />
                  </motion.div>

                  <motion.div variants={inputVariants} custom={3}>
                    <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                      Empresa
                    </label>
                    <Input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-white/5 border-white/10 text-white focus:ring-[#00ffc8] focus:border-[#00ffc8]"
                    />
                  </motion.div>

                  <motion.div variants={inputVariants} custom={4}>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                      Déjanos tu consulta*
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-white/5 border-white/10 text-white focus:ring-[#00ffc8] focus:border-[#00ffc8]"
                      rows={4}
                      required
                    />
                  </motion.div>

                  <motion.div
                    variants={inputVariants}
                    custom={5}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      className="w-full h-12 bg-[#00ffc8] hover:bg-[#00ffc8]/90 text-black font-medium text-base"
                    >
                      Enviar mensaje
                    </Button>
                  </motion.div>
                </form>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

