'use client'

import { useState } from 'react'
import ScrollReveal from './ScrollReveal'
import AnimatedBackground from './AnimatedBackground'

const Projects = () => {
  const [showAll, setShowAll] = useState(false)

  const featuredProjects = [
    {
      title: 'AutoGPTQ',
      description:
        'Advanced quantization toolkit for GPT models, enabling efficient inference and deployment of large language models. Optimizes model performance while maintaining accuracy through innovative quantization techniques.',
      technologies: ['Python', 'PyTorch', 'CUDA', 'Deep Learning', 'Model Optimization'],
      image: '🤖',
      link: '#',
      github: 'https://github.com/Codingaditya17',
      featured: true,
    },
    {
      title: 'Train Ticket Booking System',
      description:
        'Full-stack railway ticket booking platform with real-time seat availability, user authentication, payment integration, and admin dashboard. Features secure booking system with confirmation and cancellation.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'REST API', 'Payment Gateway'],
      image: '🚂',
      link: '#',
      github: 'https://github.com/Codingaditya17',
      featured: true,
    },
    {
      title: 'SafeSupport AI',
      description:
        'AI-powered customer support system with intelligent ticket routing, automated responses, and sentiment analysis. Enhances customer experience through natural language processing and machine learning.',
      technologies: ['Python', 'NLP', 'Machine Learning', 'Flask', 'OpenAI API', 'Sentiment Analysis'],
      image: '🛡️',
      link: '#',
      github: 'https://github.com/Codingaditya17',
      featured: true,
    },
    {
      title: 'Vehicle Telemetry System',
      description:
        'Real-time vehicle monitoring and analytics platform that tracks vehicle performance, location, and diagnostics. Includes dashboard visualization, alerts, and predictive maintenance insights.',
      technologies: ['IoT', 'Python', 'React', 'Time Series DB', 'WebSocket', 'Data Visualization'],
      image: '🚗',
      link: '#',
      github: 'https://github.com/Codingaditya17',
      featured: true,
    },
    {
      title: 'Agent Verse',
      description:
        'Multi-agent AI system for collaborative problem solving. Implements agent communication protocols, task distribution, and collective intelligence for complex decision-making scenarios.',
      technologies: ['Python', 'Multi-Agent Systems', 'Reinforcement Learning', 'Distributed Computing'],
      image: '🌐',
      link: '#',
      github: 'https://github.com/Codingaditya17',
      featured: true,
    },
    {
      title: 'Movie Recommender',
      description:
        'A machine learning-based movie recommendation system that suggests personalized movie recommendations based on user preferences and viewing history. Built using collaborative filtering and content-based filtering techniques.',
      technologies: ['Python', 'Machine Learning', 'Jupyter Notebook', 'Pandas', 'NumPy'],
      image: '🎬',
      link: '#',
      github: 'https://github.com/Codingaditya17/MovieRecommender',
      featured: true,
    },
  ]

  const otherProjects = [
    {
      title: 'Bank Churn Analysis',
      description:
        'Comprehensive analysis of bank customer churn using data science techniques. Includes exploratory data analysis, feature engineering, and predictive modeling to identify factors leading to customer attrition.',
      technologies: ['Python', 'Data Analysis', 'Jupyter Notebook', 'Scikit-learn', 'Matplotlib'],
      image: '📊',
      link: '#',
      github: 'https://github.com/Codingaditya17/BankChurnAnalysis',
      featured: false,
    },
    {
      title: 'Hand Sign Detection',
      description:
        'Computer vision application for real-time hand sign detection and recognition. Uses deep learning models to classify and interpret various hand gestures with high accuracy.',
      technologies: ['Python', 'Deep Learning', 'Computer Vision', 'TensorFlow', 'OpenCV'],
      image: '✋',
      link: '#',
      github: 'https://github.com/Codingaditya17/Hand-Sign-Detection',
      featured: false,
    },
    {
      title: 'T20 World Cup Analysis',
      description:
        'Data analysis project examining T20 World Cup cricket statistics. Includes player performance analysis, team statistics, and match predictions using various data visualization and statistical techniques.',
      technologies: ['Python', 'Data Analysis', 'Jupyter Notebook', 'Pandas', 'Data Visualization'],
      image: '🏏',
      link: '#',
      github: 'https://github.com/Codingaditya17/T20-world-cup-analysis',
      featured: false,
    },
    {
      title: 'Plant Disease Detection',
      description:
        'AI-powered plant disease detection system using image classification. Helps farmers identify plant diseases early through image analysis, enabling timely treatment and improved crop yield.',
      technologies: ['Python', 'Deep Learning', 'Image Classification', 'Jupyter Notebook', 'CNN'],
      image: '🌿',
      link: '#',
      github: 'https://github.com/Codingaditya17/Plant-disease-detetion',
      featured: false,
    },
    {
      title: 'SQL Bachatagt',
      description:
        'SQL database project focused on data analysis and query optimization. Includes complex queries, data modeling, and performance optimization techniques for efficient data retrieval.',
      technologies: ['SQL', 'Python', 'Database Management', 'Data Modeling'],
      image: '🗄️',
      link: '#',
      github: 'https://github.com/Codingaditya17/Sql-Bachatagt',
      featured: false,
    },
  ]

  const displayProjects = showAll ? [...featuredProjects, ...otherProjects] : featuredProjects

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30 backdrop-blur-sm relative overflow-hidden"
    >
      <AnimatedBackground />
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal direction="down">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-purple-400 to-pink-400 animate-gradient">Projects</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Innovative solutions built with cutting-edge technologies
            </p>
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProjects.map((project, index) => (
            <ScrollReveal 
              key={`${project.title}-${index}`} 
              direction="up" 
              delay={index * 100}
            >
              <div className="bg-gray-800/70 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-700 hover:border-primary-600 transition-all hover:shadow-xl hover:shadow-primary-500/30 group hover:scale-105 hover:-translate-y-2 duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-primary-600/20 via-purple-600/20 to-pink-600/20 flex items-center justify-center text-8xl group-hover:scale-110 transition-transform duration-300 relative overflow-hidden">
                  <span className="relative z-10">{project.image}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-400 group-hover:to-purple-400 transition-all">
                    {project.title}
                  </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary-600/20 text-primary-400 rounded-full text-sm border border-primary-600/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.link !== '#' && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors inline-block"
                    >
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-transparent border-2 border-primary-600 text-primary-400 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-all inline-block"
                  >
                    View on GitHub
                  </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Show All Button */}
        {!showAll && otherProjects.length > 0 && (
          <ScrollReveal direction="up" delay={400}>
            <div className="mt-12 text-center">
              <button
                onClick={() => setShowAll(true)}
                className="px-8 py-4 bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-primary-700 hover:via-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-primary-500/50 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Show All Projects
                  <svg 
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
            </div>
          </ScrollReveal>
        )}

        {showAll && (
          <ScrollReveal direction="up" delay={400}>
            <div className="mt-12 text-center">
              <button
                onClick={() => {
                  setShowAll(false)
                  window.scrollTo({ top: document.getElementById('projects')?.offsetTop || 0, behavior: 'smooth' })
                }}
                className="px-8 py-4 bg-transparent border-2 border-primary-600 text-primary-400 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-all transform hover:scale-105 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Show Less
                  <svg 
                    className="w-5 h-5 group-hover:-translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  )
}

export default Projects

