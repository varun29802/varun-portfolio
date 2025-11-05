export default function Projects() {
  const projects = [
    {
      name: "SmartRecruit AI",
      description:
        "AI-driven recruitment automation platform that leverages OpenAI APIs for intelligent resume screening and job-fit analysis. Features real-time candidate ranking with WebSocket integration and a comprehensive analytics dashboard for recruitment insights.",
      tech: ["Next.js", "NestJS", "OpenAI", "WebSockets", "Redis"],
      link: "#",
      features: ["Real-time candidate ranking", "AI resume screening", "Analytics dashboard"],
      image: "/ai-recruitment-platform-dashboard-with-modern-ui.jpg",
    },
    {
      name: "CloudSync Dashboard",
      description:
        "Enterprise-grade cloud monitoring and CI/CD analytics dashboard built on Azure infrastructure. Provides real-time pipeline health tracking, resource utilization metrics, and Dockerized microservices deployment with comprehensive visualization.",
      tech: ["React", "NestJS", "Azure SDKs", "Docker", "Chart.js"],
      link: "https://github.com/varun29802",
      features: ["Pipeline health tracking", "Resource metrics", "Azure integration"],
      image: "/cloud-dashboard-analytics-with-real-time-metrics-a.jpg",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-xl border border-primary/30 bg-card hover:bg-card/80 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2"
            >
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.name}
                className="w-full h-40 rounded-lg mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.name}
              </h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1 text-xs rounded-full bg-primary/20 text-primary font-medium">
                    {t}
                  </span>
                ))}
              </div>
              <ul className="text-sm text-muted-foreground space-y-1">
                {project.features.map((f) => (
                  <li key={f}>✨ {f}</li>
                ))}
              </ul>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
