import React from 'react';

const Projects: React.FC = () => {
  const featuredProjects = [
    {
      title: 'BEU Mate - Bihar Engineering',
      description: 'An AI-powered study companion for B.Tech students offering personalized learning, career guidance, and placement preparation.',
      image: '🎓',
      tech: ['React Native', 'Node.js', 'AI/ML'],
      links: { playstore: '#', website: '#' },
      category: 'Educational Platform'
    },
    {
      title: 'Devskillquest',
      description: 'An interactive learning platform designed for aspiring developers to master coding skills through hands-on projects.',
      image: '💻',
      tech: ['Next.js', 'TypeScript', 'PostgreSQL'],
      links: { website: '#' },
      category: 'Educational Platform'
    },
    {
      title: 'The Weddings Chapter',
      description: 'A premium wedding planning platform connecting couples with top vendors, venues, and services.',
      image: '💒',
      tech: ['PHP', 'Laravel', 'MySQL'],
      links: { website: '#' },
      category: 'Wedding Planning Portal'
    }
  ];

  const openSourceProjects = [
    {
      title: 'DeepFake Detection',
      description: 'AI/ML Summer Internship Project - Advanced deep learning model for detecting manipulated media using computer vision and neural networks.',
      tech: ['AI/ML', 'Jupyter'],
      icon: '🤖',
      link: '#'
    },
    {
      title: 'NooBot',
      description: 'Intelligent Python Automation Bot - Smart automation bot built with Python for task scheduling, data processing, and intelligent workflow automation.',
      tech: ['Python', 'Automation'],
      icon: '🐍',
      link: '#'
    },
    {
      title: 'EduTools',
      description: 'Educational Web Platform - Collection of educational tools and utilities for students and teachers. Interactive learning resources and study aids.',
      tech: ['HTML/CSS', 'Education'],
      icon: '📚',
      link: '#'
    },
    {
      title: 'DialogFlow Chatbot',
      description: 'Conversational AI Assistant - Intelligent chatbot using Google\'s DialogFlow ES for natural language processing and automated customer support.',
      tech: ['DialogFlow', 'NLP'],
      icon: '💬',
      link: '#'
    },
    {
      title: 'CloudSync',
      description: 'Cloud Storage Management Tool - Secure file synchronization and backup solution with real-time collaboration features and advanced encryption.',
      tech: ['Cloud', 'Security'],
      icon: '☁️',
      link: '#'
    },
    {
      title: 'DataViz Pro',
      description: 'Advanced Data Visualization Platform - Interactive dashboard creation tool for business intelligence and data analytics with real-time updates.',
      tech: ['Data Science', 'Analytics'],
      icon: '📊',
      link: '#'
    }
  ];

  const technologies = [
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Python', icon: '🐍' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Kotlin', icon: '📱' },
    { name: 'TypeScript', icon: '💙' }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-6xl lg:text-7xl font-bold text-gray-900 mb-4">
            Our Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            Real solutions for real businesses - explore our successful projects
          </p>
        </div>

        {/* Featured Projects */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-transparent hover:border-blue-200 h-110 flex flex-col"
            >
              <div className="text-5xl mb-4">{project.image}</div>
              <div className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-3">
                {project.category}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
              <p className="text-lg text-gray-600 leading-relaxed flex-grow mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-2">
                {project.links.playstore && (
                  <a
                    href={project.links.playstore}
                    className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors text-base"
                  >
                    <span>📱</span>
                    <span>Play Store</span>
                  </a>
                )}
                {project.links.website && (
                  <a
                    href={project.links.website}
                    className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors text-base"
                  >
                    <span>🌐</span>
                    <span>Website</span>
                  </a>
                )}
              </div>
            </div>
          ))}
          </div>
        </div>

        {/* Open Source Projects */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Open Source & Innovation Projects
          </h3>
          <p className="text-xl text-gray-600 text-center mb-12">
            Explore our contributions to AI, automation, and educational technology
          </p>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {openSourceProjects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-transparent hover:border-blue-200 h-110 flex flex-col"
                >
                  <div className="text-5xl mb-4">{project.icon}</div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h4>
                  <p className="text-lg text-gray-600 leading-relaxed mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="text-blue-600 font-medium hover:text-blue-700 flex items-center text-base"
                  >
                    View on GitHub →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Technologies We Master
          </h3>
          <p className="text-xl text-gray-600 text-center mb-12">
            We leverage cutting-edge technologies to build robust, scalable, and innovative solutions
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <div className="text-4xl mb-2">{tech.icon}</div>
                <span className="font-medium text-gray-700">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Interested in working with us on your next project?
          </h3>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all">
            Start Your Project →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
