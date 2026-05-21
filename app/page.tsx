'use client';

import { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X, ChevronDown } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">AT</div>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex gap-8 items-center">
            <button
              onClick={() => scrollToSection('about')}
              className={`transition-colors ${activeSection === 'about' ? 'text-accent font-semibold' : 'text-muted-foreground hover:text-foreground'}`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className={`transition-colors ${activeSection === 'experience' ? 'text-accent font-semibold' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className={`transition-colors ${activeSection === 'projects' ? 'text-accent font-semibold' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`transition-colors ${activeSection === 'contact' ? 'text-accent font-semibold' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Contact
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border px-6 py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection('about')}
              className="text-left text-foreground hover:text-accent transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-left text-foreground hover:text-accent transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-left text-foreground hover:text-accent transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-left text-foreground hover:text-accent transition-colors"
            >
              Contact
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-primary leading-tight">
              Abinesh Thavendrarajah
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              Backend Software Engineer
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Crafting scalable backend systems and modern architectures using Java, Spring Boot, and cloud technologies. Nearly 2 years of experience building resilient systems that power production applications.
            </p>
            
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/abinesht"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-border hover:bg-card hover:border-accent transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={24} className="text-foreground" />
              </a>
              <a
                href="https://linkedin.com/in/abinesht"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-border hover:bg-card hover:border-accent transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} className="text-foreground" />
              </a>
              <a
                href="mailto:abinesht12@gmail.com"
                className="p-3 rounded-lg border border-border hover:bg-card hover:border-accent transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={24} className="text-foreground" />
              </a>
            </div>

            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity mt-4"
            >
              Get in Touch
              <ChevronDown size={20} />
            </button>
          </div>

          <div className="hidden md:block">
            <div className="aspect-square bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl border border-border p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-accent mb-4">👨‍💻</div>
                <p className="text-muted-foreground">Backend Engineer & Problem Solver</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-primary">About</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I&apos;m a Software Engineer with a passion for building scalable, maintainable backend systems. Currently at Cloud Solutions International, I specialize in re-architecting complex systems and optimizing performance at scale using Spring Boot and microservices architecture.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                With a strong foundation in Computer Science from the University of Moratuwa (CGPA: 3.78), I combine theoretical knowledge with practical experience in DevOps, distributed systems, and modern development practices.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Beyond backend development, I have experience in ML engineering, NLP, and full-stack development, giving me a versatile perspective on software problems.
              </p>
            </div>

            <div className="bg-background rounded-xl p-8 border border-border">
              <h3 className="font-bold text-primary mb-4 text-lg">Quick Facts</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">→</span>
                  <span>Based in Colombo, Sri Lanka</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">→</span>
                  <span>2 years professional experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">→</span>
                  <span>BSc in Computer Science</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">→</span>
                  <span>Open source contributor</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">→</span>
                  <span>Chess enthusiast & player</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-primary">Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">Backend & Databases</h3>
              <div className="flex flex-wrap gap-3">
                {['Java', 'Spring Boot', 'Python', 'Django', 'REST APIs', 'PostgreSQL', 'Oracle', 'Redis', 'Microservices'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-background rounded-lg border border-border text-foreground">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary mb-4">DevOps & Cloud</h3>
              <div className="flex flex-wrap gap-3">
                {['Docker', 'Kubernetes', 'ArgoCD', 'Jenkins', 'CI/CD', 'NGINX', 'AWS', 'Linux'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-background rounded-lg border border-border text-foreground">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary mb-4">Distributed Systems</h3>
              <div className="flex flex-wrap gap-3">
                {['Apache Kafka', 'Elastic APM', 'API Design', 'System Design', 'Liquibase', 'Testcontainers'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-background rounded-lg border border-border text-foreground">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary mb-4">Data Science & ML</h3>
              <div className="flex flex-wrap gap-3">
                {['PyTorch', 'NLP', 'Machine Learning', 'Computer Vision', 'Deep Learning', 'Transformers'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-background rounded-lg border border-border text-foreground">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-primary">Experience</h2>
          
          <div className="space-y-8">
            <div className="bg-background rounded-xl p-8 border border-border hover:border-accent transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-primary">Software Engineer</h3>
                  <p className="text-accent font-semibold">Cloud Solutions International</p>
                </div>
                <span className="text-muted-foreground text-sm whitespace-nowrap">Jun 2024 - Present</span>
              </div>
              <ul className="space-y-2 text-muted-foreground ml-4">
                <li className="flex gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Re-architected pharmacy module backend using Spring Boot, designing unified order contracts and optimized REST APIs</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Researched and implemented Kafka and Kubernetes strategies for system scalability and resilience</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Developed reusable Django tool for structured data export/import with validation and rollback support</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Built mock server simulating NPHIES API for faster development and integration testing</span>
                </li>
              </ul>
            </div>

            <div className="bg-background rounded-xl p-8 border border-border hover:border-accent transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-primary">Machine Learning Engineer Intern</h3>
                  <p className="text-accent font-semibold">Insighture</p>
                </div>
                <span className="text-muted-foreground text-sm whitespace-nowrap">Jan 2023 - Jun 2023</span>
              </div>
              <ul className="space-y-2 text-muted-foreground ml-4">
                <li className="flex gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Developed NLP pipelines using SpaCy and Hugging Face Transformers for NER and question answering</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Built multi-label and multi-class classification models using PyTorch for text analysis</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Researched LLM approaches with vector datastores to overcome token limitations</span>
                </li>
              </ul>
            </div>

            <div className="bg-background rounded-xl p-8 border border-border hover:border-accent transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-primary">Visiting Teaching Assistant</h3>
                  <p className="text-accent font-semibold">University of Moratuwa</p>
                </div>
                <span className="text-muted-foreground text-sm whitespace-nowrap">Aug 2023 - Oct 2023</span>
              </div>
              <p className="text-muted-foreground">Mentored students in Programming Fundamentals course and helped design programming exercises</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-primary">Featured Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-background rounded-xl p-8 border border-border hover:border-accent transition-all duration-300 group">
              <h3 className="text-xl font-bold text-primary mb-2">Pharmacy Module Revamp</h3>
              <p className="text-accent text-sm font-semibold mb-4">Dec 2024 - Present</p>
              <p className="text-muted-foreground mb-4">
                Modernized pharmacy module with Spring Boot, implementing unified order contracts, optimized queries, standardized APIs, and data migration scripts for legacy system transition.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['Spring Boot', 'Java', 'PostgreSQL', 'Oracle', 'Microservices', 'Docker', 'Kubernetes'].map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 bg-card rounded-full text-muted-foreground border border-border">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-background rounded-xl p-8 border border-border hover:border-accent transition-all duration-300 group">
              <h3 className="text-xl font-bold text-primary mb-2">In-Air Signature Recognition</h3>
              <p className="text-accent text-sm font-semibold mb-4">Jul 2023 - May 2024</p>
              <p className="text-muted-foreground mb-4">
                Final year R&D project developing innovative authentication system using 2D/3D camera approaches with Leap Motion Controller, addressing spatial segmentation challenges.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['Computer Vision', 'Python', 'Mediapipe', 'Unity', 'Deep Learning'].map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 bg-card rounded-full text-muted-foreground border border-border">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-background rounded-xl p-8 border border-border hover:border-accent transition-all duration-300 group">
              <h3 className="text-xl font-bold text-primary mb-2">Resume.AI</h3>
              <p className="text-accent text-sm font-semibold mb-4">Jan 2023 - Mar 2023</p>
              <p className="text-muted-foreground mb-4">
                NLP-based automated resume parser for extracting candidate information, predicting suitable job roles, and ranking candidates using LLMs and vector datastores.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['NLP', 'PyTorch', 'Langchain', 'Pinecone', 'Streamlit', 'GPT'].map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 bg-card rounded-full text-muted-foreground border border-border">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-background rounded-xl p-8 border border-border hover:border-accent transition-all duration-300 group">
              <h3 className="text-xl font-bold text-primary mb-2">E-Commerce Platform</h3>
              <p className="text-accent text-sm font-semibold mb-4">Apr 2022 - Aug 2022</p>
              <p className="text-muted-foreground mb-4">
                Single-vendor e-commerce system for electronic items with full-stack development using React, Node.js, and MySQL. Implemented complete user journey from browsing to checkout.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['ReactJS', 'NodeJS', 'Express', 'MySQL', 'Full-Stack'].map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 bg-card rounded-full text-muted-foreground border border-border">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-6 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-primary">Education & Achievements</h2>
          
          <div className="space-y-8">
            <div className="bg-background rounded-xl p-8 border border-border">
              <h3 className="text-xl font-bold text-primary mb-2">BSc Engineering (Hons.) in Computer Science and Engineering</h3>
              <p className="text-accent font-semibold mb-2">University of Moratuwa</p>
              <p className="text-muted-foreground mb-4">Jan 2020 - Jun 2024</p>
              <p className="text-muted-foreground mb-4">CGPA: 3.78 | Dean&apos;s List: 1st, 2nd, 3rd, 4th, 8th semester</p>
              <p className="text-muted-foreground">Merit Award winner at National ICT Awards 2024 for In-Air Signature project</p>
            </div>

            <div className="bg-background rounded-xl p-8 border border-border">
              <h3 className="text-primary font-bold mb-4">Relevant Coursework</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {['Data Structures (A+)', 'OOP (A)', 'Machine Learning (A-)', 'Deep Neural Networks (A)', 'Computer Vision (A+)', 'Operating Systems (A)', 'Database Systems (A)', 'Big Data Analytics (A)', 'Linear Algebra (A+)'].map((course) => (
                  <span key={course} className="text-muted-foreground">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-primary">Get In Touch</h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            I&apos;m always interested in new opportunities and collaborations. Whether you have a question or just want to say hello, feel free to reach out!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="mailto:abinesht12@gmail.com"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              <Mail size={20} />
              Send Email
            </a>
            <a
              href="https://linkedin.com/in/abinesht"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border px-8 py-3 rounded-lg font-semibold hover:bg-card transition-all duration-300"
            >
              <Linkedin size={20} />
              LinkedIn
              <ExternalLink size={16} />
            </a>
          </div>

          <div className="bg-background rounded-xl p-8 border border-border">
            <p className="text-muted-foreground mb-4">Connect with me on social media</p>
            <div className="flex justify-center gap-6">
              <a
                href="https://github.com/abinesht"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-border hover:bg-card hover:border-accent transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/abinesht"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-border hover:bg-card hover:border-accent transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:abinesht12@gmail.com"
                className="p-3 rounded-lg border border-border hover:bg-card hover:border-accent transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6 text-center text-muted-foreground">
        <div className="max-w-6xl mx-auto">
          <p>© 2025 Abinesh Thavendrarajah. All rights reserved.</p>
          <p className="text-sm mt-2">Built with Next.js, React, and modern web technologies</p>
        </div>
      </footer>
    </div>
  );
}
