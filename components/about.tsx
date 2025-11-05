export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/anime-programmer-working-at-computer-3d.jpg"
              alt="Working"
              className="rounded-xl border border-primary/30 shadow-lg shadow-primary/10"
            />
          </div>

          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a Full Stack Engineer with over a year of experience at{" "}
              <span className="text-primary font-semibold">Tata Consultancy Services</span>, specializing in building
              scalable, high-performance web applications.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              My expertise spans <span className="text-secondary font-semibold">frontend development</span> with React
              and Next.js, <span className="text-secondary font-semibold">backend architecture</span> with NestJS and
              Node.js, and <span className="text-secondary font-semibold">cloud deployment</span> on Azure with CI/CD
              automation.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm passionate about solving complex problems through elegant code, optimizing performance, and delivering
              exceptional user experiences. When I'm not coding, you'll find me exploring new technologies, contributing
              to open-source, or learning about AI/ML.
            </p>

            <div className="pt-6">
              <p className="text-sm text-accent font-semibold mb-3">Currently pursuing:</p>
              <p className="text-muted-foreground">🎓 MCA from Dr. BAMU University (2024-Present)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
