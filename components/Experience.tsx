'use client'

import ScrollReveal from './ScrollReveal'
import { profile } from '@/src/data/profile'
import AnimatedBackground from './AnimatedBackground'

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30 backdrop-blur-sm relative overflow-hidden"
    >
      <AnimatedBackground />
      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal direction="down">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-purple-400 to-pink-400">Experience</span>
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg">
            Building scalable distributed systems and backend infrastructure
          </p>
        </ScrollReveal>

        <div className="space-y-6">
          {profile.experience.map((exp, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 100}>
              <div className="bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-gray-700 hover:border-primary-600 hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/30 group">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-5">
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-400 group-hover:to-purple-400 transition-all">
                      {exp.role}
                    </h3>
                    <p className="text-lg md:text-xl text-primary-400 font-semibold mb-1">{exp.company}</p>
                    <p className="text-sm text-gray-400">{exp.location}</p>
                  </div>
                  <div className="text-left md:text-right mt-3 md:mt-0 md:ml-4">
                    <span className="px-3 py-1.5 bg-primary-600/20 border border-primary-600/30 rounded-lg text-primary-400 font-semibold text-sm inline-block">
                      {exp.startDate} - {exp.endDate}
                    </span>
                  </div>
                </div>
                
                <div className="mb-5">
                  <ul className="space-y-2.5">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start text-gray-300 text-sm md:text-base leading-relaxed">
                        <span className="text-primary-400 mr-2.5 mt-1.5 flex-shrink-0">▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-700/50">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary-600/20 text-primary-400 rounded-full text-xs border border-primary-600/30 hover:bg-primary-600/30 hover:border-primary-500 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

