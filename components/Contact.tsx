'use client'

import ScrollReveal from './ScrollReveal'
import AnimatedBackground from './AnimatedBackground'
import { profile } from '@/src/data/profile'

const Contact = () => {

  const socialLinks = [
    {
      name: 'GitHub',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      url: 'https://github.com/Codingaditya17',
    },
    {
      name: 'LinkedIn',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      url: 'https://www.linkedin.com/in/adityapatel1317',
    },
    {
      name: 'Email',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      url: 'mailto:adityapatel0813@gmail.com',
    }
  ]

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <AnimatedBackground />
      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal direction="down">
          <>
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
              Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-purple-400">Touch</span>
            </h2>
            <p className="text-center text-gray-400 mb-16 text-lg">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
          </>
        </ScrollReveal>
        
        <div className="max-w-3xl mx-auto">
          <ScrollReveal direction="up" delay={100}>
            <>
              <div className="text-center mb-12">
                <p className="text-gray-300 mb-12 leading-relaxed text-base max-w-2xl mx-auto">
                  Feel free to reach out if you&apos;re looking for a developer, have a question,
                  or just want to connect.
                </p>
              </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <a 
                href={`mailto:${profile.personal.email}`}
                className="flex items-center space-x-4 p-5 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 hover:border-primary-500/50 hover:bg-gray-800/70 transition-all group"
              >
                <div className="w-12 h-12 bg-primary-600/20 rounded-lg flex items-center justify-center border border-primary-600/30 group-hover:bg-primary-600/30 transition-all flex-shrink-0">
                  <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="text-left min-w-0">
                  <p className="text-gray-400 text-xs mb-1">Email</p>
                  <p className="text-white group-hover:text-primary-400 transition-colors text-sm font-medium truncate">{profile.personal.email}</p>
                </div>
              </a>
              
              {profile.personal.phone && (
                <a 
                  href={`tel:${profile.personal.phone.replace(/\s/g, '').replace(/[()]/g, '').replace(/-/g, '')}`}
                  className="flex items-center space-x-4 p-5 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 hover:border-primary-500/50 hover:bg-gray-800/70 transition-all group"
                >
                  <div className="w-12 h-12 bg-primary-600/20 rounded-lg flex items-center justify-center border border-primary-600/30 group-hover:bg-primary-600/30 transition-all flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="text-left min-w-0">
                    <p className="text-gray-400 text-xs mb-1">Phone</p>
                    <p className="text-white group-hover:text-primary-400 transition-colors text-sm font-medium">{profile.personal.phone}</p>
                  </div>
                </a>
              )}
            </div>

            <div className="text-center">
              <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex justify-center space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-800/50 backdrop-blur-sm rounded-lg flex items-center justify-center text-gray-400 hover:text-primary-400 hover:bg-primary-600/20 border border-gray-700/50 hover:border-primary-600/50 transition-all hover:scale-105"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            </>
          </ScrollReveal>
        </div>
      </div>
      
      <footer className="mt-20 pt-8 border-t border-gray-700">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Aditya Patel. All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  )
}

export default Contact

