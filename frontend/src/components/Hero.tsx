'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(30deg,#f0f9ff_33%,transparent_33%)] dark:bg-[linear-gradient(30deg,#1e293b_33%,transparent_33%)]" />
        <div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-[linear-gradient(210deg,#dbeafe_50%,transparent_50%)] dark:bg-[linear-gradient(210deg,#334155_50%,transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-blue-900 dark:text-white mb-6">
              Manage Tasks, <span className="bg-gradient-to-r from-blue-700 to-blue-900 text-transparent bg-clip-text dark:from-blue-300 dark:to-blue-500">Achieve More</span>
            </h1>
            <p className="text-xl text-blue-800/80 dark:text-gray-300 mb-8 max-w-lg">Transform your workflow with our intuitive task management platform.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 bg-blue-900 hover:bg-blue-800  dark:text-white dark:border-gray-400 dark:hover:bg-gray-700 transition-all duration-300 group">
                Get Started
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 text-blue-900 border-blue-900 hover:bg-blue-50 dark:text-white dark:border-gray-400 dark:hover:bg-gray-700">
                Watch Demo
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-8">
              {['10K+ Users', '99% Uptime', '24/7 Support'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-700 dark:text-blue-300" />
                  <span className="text-sm font-medium text-blue-900 dark:text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative">
            <div className="aspect-square rounded-full bg-blue-100 dark:bg-gray-800 absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%]" />
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="h-[400px] bg-blue-50 dark:bg-gray-800 rounded-lg" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
