'use client'

import ScrollReveal from './ScrollReveal'
import AnimatedBackground from './AnimatedBackground'

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30 backdrop-blur-sm relative overflow-hidden"
    >
      <AnimatedBackground />
      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal direction="down">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            About{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-purple-400">
              Me
            </span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="right" delay={100}>
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I’m Aditya Patel, a backend and distributed-systems focused engineer who builds reliable services that
                handle scale, performance, and production realities. I enjoy designing clean APIs, resilient microservices,
                and data pipelines with strong observability, CI/CD, and operational discipline.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                Alongside systems work, I build ML driven components end to end, from dataset and evaluation pipelines to
                model experimentation and GPU accelerated runs. I care about measurable impact: throughput, latency, recall,
                and shipping improvements that show up in real usage.
              </p>

              <div className="space-y-4 mt-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Education</h3>
                  <div className="space-y-2 text-gray-300">
                    <div className="flex items-start">
                      <span className="text-primary-400 mr-2">•</span>
                      <div>
                        <p className="font-semibold">Masters in Data Science</p>
                        <p className="text-sm text-gray-400">Stony Brook University (2025-2027)</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-primary-400 mr-2">•</span>
                      <div>
                        <p className="font-semibold">B.Tech in Computer Science and Engineering</p>
                        <p className="text-sm text-gray-400">MIT WPU (2021-2025)</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mt-6">
                  <div className="px-4 py-2 bg-primary-600/20 border border-primary-600 rounded-lg">
                    <span className="text-primary-400 font-semibold">SDE (Backend)</span>
                  </div>
                  <div className="px-4 py-2 bg-primary-600/20 border border-primary-600 rounded-lg">
                    <span className="text-primary-400 font-semibold">Distributed Systems</span>
                  </div>
                  <div className="px-4 py-2 bg-primary-600/20 border border-primary-600 rounded-lg">
                    <span className="text-primary-400 font-semibold">ML + Data</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={200}>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary-600/20 to-primary-800/20 rounded-lg border border-primary-600/30 overflow-hidden backdrop-blur-sm hover:border-primary-500 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/20 group">
                {/* Photo - Place your photo at /public/profile-photo.jpg */}
                <img
  src="/profile-photo.jpg"
  alt="Aditya Patel"
  className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500 object-[60%_100%] sm:object-[60%_100%] md:object-[60%_100%]"
  onError={(e) => {
    e.currentTarget.style.display = 'none'
    const fallback = e.currentTarget.nextElementSibling as HTMLElement
    if (fallback) fallback.style.display = 'flex'
  }}
/>



                {/* Fallback name - shown when photo doesn't exist */}
                <div className="hidden w-full h-full bg-gradient-to-br from-primary-500/20 via-purple-500/20 to-pink-500/20 rounded-lg items-center justify-center backdrop-blur-sm">
                  <div className="flex flex-col items-center justify-center">
                    <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-purple-400 to-pink-400 mb-2 tracking-wide">
                      Aditya
                    </div>
                    <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-primary-400 tracking-wide">
                      Patel
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

export default About
