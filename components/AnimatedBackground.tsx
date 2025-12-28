'use client'

const AnimatedBackground = () => {
  // Generate random positions for stars
  const generateStars = (count: number) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      delay: Math.random() * 3,
      duration: Math.random() * 3 + 2,
    }))
  }

  const stars = generateStars(150)
  const brightStars = generateStars(30)

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-0">
      {/* Dark space background with subtle nebula */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"></div>
      
      {/* Nebula-like gradients */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
      </div>
      
      {/* Twinkling Stars - Small - Brighter */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <div
            key={`star-${star.id}`}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`,
              boxShadow: `0 0 ${star.size * 3}px rgba(255, 255, 255, 1), 0 0 ${star.size * 6}px rgba(255, 255, 255, 0.8), 0 0 ${star.size * 10}px rgba(59, 130, 246, 0.6)`,
            }}
          />
        ))}
      </div>
      
      {/* Bright Twinkling Stars - Larger - Much Brighter */}
      <div className="absolute inset-0">
        {brightStars.map((star) => (
          <div
            key={`bright-star-${star.id}`}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size * 2}px`,
              height: `${star.size * 2}px`,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration * 0.7}s`,
              boxShadow: `0 0 ${star.size * 6}px rgba(255, 255, 255, 1), 0 0 ${star.size * 12}px rgba(255, 255, 255, 0.9), 0 0 ${star.size * 20}px rgba(59, 130, 246, 0.8), 0 0 ${star.size * 30}px rgba(147, 51, 234, 0.4)`,
            }}
          />
        ))}
      </div>
      
      {/* Moving shooting stars - from left to right - Increased frequency */}
      <div className="absolute inset-0 opacity-40">
        {[...Array(5)].map((_, i) => (
          <div
            key={`shooting-star-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-primary-300 to-transparent animate-line-move"
            style={{
              top: `${20 + i * 15}%`,
              width: '200px',
              left: '-200px',
              animationDelay: `${i * 1.5}s`,
              animationDuration: '5s',
            }}
          />
        ))}
      </div>
      
      {/* Telescope Vignette Effect */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: `radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(0, 0, 0, 0.3) 70%, rgba(0, 0, 0, 0.7) 100%)`,
      }}></div>
      
      {/* Subtle moving particles (distant stars) */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute rounded-full bg-white/30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 1 + 0.5}px`,
              height: `${Math.random() * 1 + 0.5}px`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 15 + 20}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default AnimatedBackground

