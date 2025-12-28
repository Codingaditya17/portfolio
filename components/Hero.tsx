'use client'

import { useEffect, useState } from 'react'
import { profile } from '@/src/data/profile'
import Typewriter from './Typewriter'
import AnimatedBackground from './AnimatedBackground'

const Hero = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden"
    >
      <AnimatedBackground />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div
          className={`transition-all duration-1000 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* UPDATED: line-height + padding to prevent clipping */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 relative leading-[1.12] md:leading-[1.08] pb-2">
            Hi, I'm{' '}
            {/* UPDATED: inline-block + padding to prevent gradient/text clip */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-purple-400 to-pink-400 animate-gradient inline-block pb-1">
              {profile.personal.name}
            </span>
            <span className="inline-block ml-6 md:ml-8 animate-wave">👋</span>
          </h1>

          <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-purple-400 to-pink-400 mb-4">
              {profile.personal.title}
            </p>
            <div className="text-xl md:text-2xl text-gray-300 min-h-[2rem] mb-4">
              <Typewriter text={profile.personal.heroTagline} speed={60} />
            </div>
          </div>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
            style={{ animationDelay: '0.6s' }}
          >
            <button
              onClick={scrollToContact}
              className="px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-primary-500/50 relative overflow-hidden group"
            >
              <span className="relative z-10">Get In Touch</span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>

            <button
              onClick={() => {
                const element = document.getElementById('projects')
                element?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-8 py-3 bg-transparent border-2 border-primary-600 text-primary-400 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-all transform hover:scale-110 hover:-translate-y-1 relative overflow-hidden group"
            >
              <span className="relative z-10">View My Work</span>
              <span className="absolute inset-0 bg-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </div>

          {/* Divider Line */}
          <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary-400 to-transparent mx-auto"></div>
          </div>
        </div>
      </div>

      {/* Floating orbs for additional visual effect */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
    </section>
  )
}

export default Hero
