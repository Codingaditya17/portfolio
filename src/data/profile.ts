
export const profile = {
  personal: {
    name: "Aditya Patel",
    title: "Software Development Engineer  + Data Engineer",
    heroTagline: "Building reliable backend systems and ML-powered products at scale.",
    location: "United States",
    email: "adityapatel0813@gmail.com",
    phone: "+1 (631) 652-5698",
    github: "https://github.com/Codingaditya17",
    linkedin: "https://www.linkedin.com/in/adityapatel1317",
  },

  experience: [
    {
      company: "Stony Brook University",
      role: "Machine Learning Intern",
      location: "Stony Brook, NY",
      startDate: "Aug 2025",
      endDate: "Present",
      achievements: [
        "Built an illumination-invariant feature-matching pipeline using SIFT, ORB, SuperPoint + SuperGlue, and LoFTR, aligning 28K+ object–shadow pairs and improving accuracy by 42% with 27% lower geometric error.",
        "Optimized GPU-based evaluation with Python, PyTorch, and OpenCV, enabling 20K+ automated runs and delivering 35% higher feature-match recall on Linux systems.",
      ],
      technologies: ["Python", "PyTorch", "OpenCV", "SIFT", "ORB", "SuperPoint", "SuperGlue", "LoFTR", "Linux", "CUDA"],
    },

    {
      company: "Leap and Scale",
      role: "Software Developer Intern",
      location: "Pune, India",
      startDate: "Aug 2024",
      endDate: "Jan 2025",
      achievements: [
        "Built an enterprise web application with React and TypeScript handling 2,000+ daily transactions and serving 50K+ users through modular component architecture and responsive UI foundations.",
        "Developed backend microservices in Java with REST APIs and PostgreSQL persistence, coordinating end-to-end delivery across 12 services deployed via Docker to accelerate feature rollout by 35% and mentoring 2 interns to drive execution.",
        "Implemented CI/CD pipelines using Jenkins for automated testing and deployments, integrating Prometheus monitoring to reduce production incidents by 40% across engineering teams.",
        "Built a high-performance Go data-processing service handling 100K+ requests per minute using goroutines and concurrency patterns, improving throughput by 3x.",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Java",
        "Go",
        "PostgreSQL",
        "REST APIs",
        "Docker",
        "Jenkins",
        "Prometheus",
        "Microservices",
        "Concurrency",
      ],
    },

    {
      company: "MIT WPU",
      role: "Backend Developer Intern",
      location: "Pune, India",
      startDate: "Mar 2024",
      endDate: "May 2025",
      achievements: [
        "Migrated Arbiter.report backend to AWS, integrating DuckDB and optimizing queries with Hive-style partitioning over 1M+ records stored as S3 Parquet files to reduce data retrieval times.",
        "Engineered backend services in C++ for a developer tools platform, implementing multithreaded processing for 15K+ code analysis tasks with 30% improved performance using lock-free data structures.",
        "Designed a Java REST API gateway connecting 8 microservices, applying versioning and documentation best practices to reduce client integration time by 50%.",
      ],
      technologies: ["AWS", "Amazon S3", "Parquet", "DuckDB", "Hive Partitioning", "C++", "Multithreading", "Java", "REST APIs", "Microservices"],
    },
  ],
  
  achievements: [
    {
      title: "Published Research Paper",
      description: "Handling Class Imbalance Across various Data Types",
      publication: "IEEE Xplore",
      date: "2024",
      link: "https://ieeexplore.ieee.org/document/10837043", // TODO: Add full IEEE Xplore link
    },
    {
      title: "Upcoming Tech Star",
      description: "Got awarded as upcoming tech star 2024-2025",
      organization: "CSI MITWPU (Computer Society of India)",
      date: "2024-2025",
      link: "",
    },
  ],
}
