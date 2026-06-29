import "./Portfolio.css";

const projects = [
  {
    title: "Enterprise CRM Platform",
    category: ["Enterprise", "Cloud"],
    image: "/projects/crm.jpg",
    description:
      "Cloud-native CRM platform with AI automation, analytics and customer engagement.",
    stats: [
      { value: "250K+", label: "Users" },
      { value: "99.99%", label: "Uptime" },
      { value: "18", label: "Countries" },
    ],
    tech: ["React", "Node.js", "AWS"],
  },

  {
    title: "Healthcare AI Dashboard",
    category: ["Healthcare", "AI"],
    image: "/projects/health.jpg",
    description:
      "Real-time patient monitoring platform powered by AI-driven predictive analytics.",
    stats: [
      { value: "94%", label: "Accuracy" },
      { value: "5K+", label: "Patients" },
      { value: "<1s", label: "Latency" },
    ],
    tech: ["React", "Python", "Docker"],
  },

  {
    title: "FinTech Banking Platform",
    category: ["Finance", "Cloud"],
    image: "/projects/finance.jpg",
    description:
      "Secure banking platform supporting digital payments and intelligent fraud detection.",
    stats: [
      { value: "$35M", label: "Volume" },
      { value: "24/7", label: "Support" },
      { value: "99.9%", label: "Security" },
    ],
    tech: ["React", "Go", "Kubernetes"],
  },
];

export default function Portfolio() {
  return (
    <section className="portfolio">

      <div className="section-title">

        <span>OUR PORTFOLIO</span>

        <h2>Projects That Create Business Impact</h2>

        <p>
          Innovative products built with modern technologies,
          enterprise architecture and AI-powered experiences.
        </p>

      </div>

      <div className="portfolio-grid">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            <div className="image">

              <img src={project.image} alt={project.title} />

              <div className="overlay"></div>

            </div>

            <div className="content">

              <div className="tags">

                {project.category.map((tag) => (

                  <span key={tag}>{tag}</span>

                ))}

              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="stats">

                {project.stats.map((stat) => (

                  <div className="stat" key={stat.label}>

                    <h4>{stat.value}</h4>

                    <small>{stat.label}</small>

                  </div>

                ))}

              </div>

              <div className="bottom">

                <div className="tech">

                  {project.tech.map((tech) => (

                    <span key={tech}>{tech}</span>

                  ))}

                </div>

                <a href="#">
                  View Case Study →
                </a>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}