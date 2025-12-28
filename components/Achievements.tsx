'use client'

import ScrollReveal from './ScrollReveal'
import AnimatedBackground from './AnimatedBackground'
import { profile } from '@/src/data/profile'

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30 backdrop-blur-sm relative overflow-hidden"
    >
      <AnimatedBackground />
      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal direction="down">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Achievements & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-purple-400 to-pink-400">Publications</span>
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg">
            Research contributions and notable accomplishments
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {profile.achievements.map((achievement, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 100}>
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-primary-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/20 h-full group hover:scale-[1.02] hover:-translate-y-1">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-purple-500 rounded-lg flex items-center justify-center text-2xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    🏆
                  </div>
                  {achievement.date && (
                    <span className="px-3 py-1 bg-primary-600/20 border border-primary-600/30 rounded-lg text-primary-400 text-sm">
                      {achievement.date}
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-400 group-hover:to-purple-400 transition-all">
                  {achievement.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {achievement.description}
                </p>
                
                {achievement.publication && (
                  <p className="text-primary-400 font-semibold mb-4">Published in: {achievement.publication}</p>
                )}
                
                {achievement.organization && (
                  <p className="text-primary-400 font-semibold mb-4">Organization: {achievement.organization}</p>
                )}
                
                {achievement.link && (
                  <a
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors group/link"
                  >
                    {achievement.publication ? 'View Publication' : 'View Details'}
                    <svg className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements

