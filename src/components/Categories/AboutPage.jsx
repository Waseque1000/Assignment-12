import React from "react";
import { Github, Linkedin, Mail, Globe, Code } from "lucide-react";
import { Helmet } from "react-helmet";

const AboutPage = () => {
  const developer = {
    name: "John Developer",
    title: "Full Stack Developer",
    image: "/api/placeholder/400/400",
    bio: "Passionate full-stack developer with 5 years of experience in building web applications. Specialized in React, Node.js, and modern web technologies.",
    skills: [
      "React",
      "Node.js",
      "MongoDB",
      "TypeScript",
      "Next.js",
      "TailwindCSS",
    ],
    projects: [
      {
        name: "E-Learning Platform",
        description:
          "A comprehensive platform for online education with video courses, quizzes, and progress tracking.",
        technologies: ["React", "Node.js", "MongoDB"],
        link: "https://project1.com",
      },
      {
        name: "Healthcare Management System",
        description:
          "A complete solution for managing healthcare facilities, patient records, and appointments.",
        technologies: ["Next.js", "PostgreSQL", "TypeScript"],
        link: "https://project2.com",
      },
      {
        name: "E-commerce Solution",
        description:
          "Feature-rich e-commerce platform with inventory management and payment integration.",
        technologies: ["React", "Express", "Redux"],
        link: "https://project3.com",
      },
    ],
    contact: {
      email: "john@example.com",
      github: "https://github.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
      portfolio: "https://johndoe.dev",
    },
  };

  return (
    <div className="container mx-auto py-8 px-4">
      {/* Developer Profile Section */}
      <Helmet>
        <title> Tour || About Us</title>
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <img
            src={developer.image}
            alt={developer.name}
            className="rounded-lg w-full max-w-md mx-auto shadow-lg"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-2">{developer.name}</h1>
          <h2 className="text-2xl text-gray-600 mb-4">{developer.title}</h2>
          <p className="text-gray-700 mb-6">{developer.bio}</p>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {developer.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <a
              href={developer.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm"
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </a>
            <a
              href={developer.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm"
            >
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </a>
            <a
              href={`mailto:${developer.contact.email}`}
              className="btn btn-outline btn-sm"
            >
              <Mail className="w-4 h-4 mr-2" />
              Email
            </a>
            <a
              href={developer.contact.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm"
            >
              <Globe className="w-4 h-4 mr-2" />
              Portfolio
            </a>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div>
        <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {developer.projects.map((project, index) => (
            <div key={index} className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">{project.name}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-100 px-2 py-1 rounded-md text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="card-actions">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    <Code className="w-4 h-4 mr-2" />
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
