'use client'

import { Card } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { Layout, Users2, ClipboardList } from 'lucide-react'

const features = [
  {
    icon: Layout,
    title: 'Intuitive Interface',
    description: 'Clean and modern design that makes task management a breeze',
  },
  {
    icon: Users2,
    title: 'Team Collaboration',
    description: 'Work together seamlessly with real-time updates and sharing',
  },
  {
    icon: ClipboardList,
    title: 'Smart Organization',
    description: 'Powerful tools to organize and prioritize your tasks efficiently',
  },
]

export function Features() {
  return (
    <section className="py-32 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(150deg,#f0f9ff_50%,transparent_50%)]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-900  dark:text-white dark:border-gray-400 ">Everything you need to manage tasks effectively</h2>
          <p className="text-xl text-blue-800/80 max-w-2xl  dark:text-white dark:border-gray-400 mx-auto">Streamline your workflow with powerful features designed for modern teams</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ icon: Icon, title, description, index }: any) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.2 }}>
      <Card className="group p-8 hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
        <div className="mb-6 relative">
          <div className="absolute inset-0 bg-blue-100 rounded-lg transform rotate-6 group-hover:rotate-0 transition-transform duration-300" />
          <div className="relative bg-blue-900 text-white p-4 rounded-lg">
            <Icon className="w-8 h-8" />
          </div>
        </div>
        <h3 className="text-xl font-semibold text-blue-900 mb-3">{title}</h3>
        <p className="text-blue-800/80">{description}</p>
      </Card>
    </motion.div>
  )
}
