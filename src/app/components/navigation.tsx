"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Users2, LineChart, Boxes, MessageSquare } from 'lucide-react'

const features = [
  {
    title: "Gestión de Leads",
    href: "/#features",
    description: "Sistema de seguimiento y nutrición de leads impulsado por IA.",
    icon: Users2
  },
  {
    title: "Portafolio de Propiedades",
    href: "/#features",
    description: "Solución integral de gestión de propiedades.",
    icon: Boxes
  },
  {
    title: "Panel de Analytics",
    href: "/#visualization",
    description: "Insights en tiempo real y métricas de rendimiento.",
    icon: LineChart
  },
  {
    title: "Colaboración en Equipo",
    href: "/#features",
    description: "Comunicación y gestión de tareas optimizadas para equipos.",
    icon: MessageSquare
  },
]

export function Navigation() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-sm"
    >
      <nav className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/powersalesquare.webp"
              alt="PowerSales Logo"
              width={64}
              height={32}
              priority
            />
          </Link>
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="space-x-1">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-8 px-3 text-[13px] font-medium text-white/90 hover:text-white data-[state=open]:text-white">
                  Características
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-2 p-3 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {features.map((feature) => (
                      <ListItem
                        key={feature.title}
                        title={feature.title}
                        href={feature.href}
                        icon={feature.icon}
                      >
                        {feature.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/#timeline" legacyBehavior passHref>
                  <NavigationMenuLink className="inline-flex h-8 w-max items-center justify-center rounded-md bg-transparent px-3 py-1.5 text-[13px] font-medium text-white/90 transition-colors hover:text-white">
                    Evolución
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/#metrics" legacyBehavior passHref>
                  <NavigationMenuLink className="inline-flex h-8 w-max items-center justify-center rounded-md bg-transparent px-3 py-1.5 text-[13px] font-medium text-white/90 transition-colors hover:text-white">
                    Métricas
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex items-center">
            <Link href="/#contact">
              <Button 
                className="h-8 px-4 text-[13px] font-medium bg-[#00ffc8] hover:bg-[#00ffc8]/90 text-black"
              >
                Contáctanos
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </motion.header>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon: React.ElementType }
>(({ className, title, children, icon: Icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-2.5 leading-none no-underline outline-none transition-colors hover:bg-white/5",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-2 text-[13px] font-medium text-white/90">
            <Icon className="h-4 w-4 text-[#00ffc8]" />
            {title}
          </div>
          <p className="line-clamp-2 text-[12px] leading-relaxed text-white/70 mt-1.5">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

