export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML/CSS", "Responsive Design"],
    },
    {
      category: "Backend",
      skills: ["NestJS", "Node.js", "Express.js", "Django", "Java", "REST APIs"],
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
    },
    {
      category: "DevOps & Cloud",
      skills: ["Azure", "Docker", "Jenkins", "CI/CD", "Git", "Microservices"],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border border-primary/30 bg-card hover:bg-card/80 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-primary mb-4">{cat.category}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20 text-foreground font-medium text-sm hover:from-primary/30 hover:to-secondary/30 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
