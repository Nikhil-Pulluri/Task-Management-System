'use client'

import { Hero } from '@/components/Hero'
import { Features } from '@/components/Features'
import { Benefits } from '@/components/Benefits'
import { CallToAction } from '@/components/CallToAction'

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Hero />
      <Features />
      <Benefits />
      <CallToAction />
    </div>
  )
}
