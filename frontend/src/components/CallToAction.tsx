'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export function CallToAction() {
  return (
    <section className="py-32 relative">
      <div className="absolute inset-0 bg-blue-900" />
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,#1e3a8a_48%,#1e3a8a_52%,transparent_52%)]" />
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-4xl font-bold text-white mb-6">Ready to transform your workflow?</h2>
        <p className="text-xl text-blue-100 mb-8">Join thousands of teams already using Planorama to achieve their goals.</p>
        <Button size="lg" variant="secondary" className="text-lg px-12 py-6 bg-white text-blue-900 hover:bg-blue-50">
          Start Free Trial
        </Button>
      </motion.div>
    </section>
  )
}
