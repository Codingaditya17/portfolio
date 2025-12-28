'use client'

import ScrollReveal from './ScrollReveal'
import AnimatedBackground from './AnimatedBackground'

const Skills = () => {
  const skillCategories = [
    {
      name: 'Languages & Databases',
      skills: [
        'Python',
        'Java',
        'C/C++',
        'JavaScript',
        'TypeScript',
        'Go',
        'SQL',
        'HTML5/CSS3',
        'MySQL',
        'PostgreSQL',
        'MongoDB',
        'Redis',
        'ElasticSearch',
      ],
    },
    {
      name: 'Frameworks & Technologies',
      skills: [
        'Django',
        'Node.js',
        'Spring Boot',
        'FastAPI',
        'Kafka',
        'Machine Learning',
        'Scikit-learn',
        'TensorFlow',
        'PyTorch',
        'Pandas',
        'NumPy',
        'React',
        'Next.js',
        'Redux',
        'TailwindCSS',
        'REST APIs',
        'Microservices',
        'OpenCV',
        'CUDA',
      ],
    },
    {
      name: 'Cloud & Tools',
      skills: [
        'Amazon Web Services',
        'Azure Cloud',
        'Google Cloud Platform',
        'Git',
        'Linux',
        'UNIX',
        'Docker',
        'Kubernetes',
        'Helm',
        'Jenkins',
        'Prometheus',
        'Grafana',
        'CI/CD',
        'AWS S3',
        'DuckDB',
        'Parquet',
      ],
    },
  ]

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <AnimatedBackground />
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal direction="down">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-purple-400">Technologies</span>
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg">
            Technologies I work with to build scalable solutions
          </p>
        </ScrollReveal>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <ScrollReveal key={category.name} direction="up" delay={categoryIndex * 100}>
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-1 h-8 bg-gradient-to-b from-primary-400 to-purple-400 rounded"></span>
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-full text-cyan-300 hover:border-cyan-400 hover:text-cyan-200 hover:bg-cyan-500/30 hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 cursor-default text-sm font-medium animate-fade-in-up"
                      style={{ animationDelay: `${skillIndex * 30}ms` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Stats Summary */}
        <ScrollReveal direction="up" delay={400}>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Total Skills', value: skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0), icon: '⚡' },
              { label: 'Categories', value: skillCategories.length, icon: '📚' },
              { label: 'Years Experience', value: '3+', icon: '🌟' },
              { label: 'Projects', value: '10+', icon: '🚀' },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="bg-gradient-to-br from-primary-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-6 border border-primary-500/30 text-center hover:border-primary-400 hover:scale-105 hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default Skills
