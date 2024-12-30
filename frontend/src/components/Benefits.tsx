'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const benefits = ['Boost productivity with smart task organization', 'Real-time collaboration and updates', 'Customizable workflows for any project', 'Detailed analytics and progress tracking']

export function Benefits() {
  return (
    <section className="py-32 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-[linear-gradient(330deg,#dbeafe_50%,transparent_50%)] dark:bg-[linear-gradient(330deg,#1e293b_50%,transparent_50%)]" />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Benefits List */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
            <h2 className="text-3xl font-bold text-blue-900 dark:text-white">Why Choose Planorama?</h2>
            <div className="space-y-6">
              {benefits.map((text, index) => (
                <motion.div
                  key={text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-start gap-4 group"
                >
                  <CheckCircle2 className="w-6 h-6 text-blue-700 dark:text-blue-300 flex-shrink-0 mt-1" />
                  <p className="text-lg text-blue-800/80 dark:text-gray-300 group-hover:text-blue-900 dark:group-hover:text-white transition-colors duration-300">{text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Representation */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative">
            <div className="aspect-[4/3] bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-6 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="h-full bg-blue-50 dark:bg-gray-800 rounded-lg" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
