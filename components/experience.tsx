export default function Experience() {
  const experiences = [
    {
      title: "Full Stack Engineer",
      company: "Tata Consultancy Services (TCS)",
      period: "April 2024 – Present",
      location: "Chennai, India",
      highlights: [
        "Developed enterprise-scale applications using Next.js and NestJS, improving load times by 25%",
        "Designed and implemented secure CI/CD pipelines in Jenkins with Docker, reducing deployment time by 30%",
        "Deployed and maintained services on Azure Cloud, optimizing uptime to 99.9%",
        "Collaborated with cross-functional teams to deliver 10+ major features per sprint",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border border-primary/30 bg-card hover:bg-card/80 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
                  <p className="text-primary font-semibold">{exp.company}</p>
                </div>
                <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">{exp.period}</span>
              </div>
              <p className="text-muted-foreground mb-4">{exp.location}</p>
              <ul className="space-y-2">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground">
                    <span className="text-accent">→</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
