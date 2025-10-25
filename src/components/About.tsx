import React from 'react';

const About: React.FC = () => {
  const features = [
    {
      icon: '🎨',
      title: 'UI/UX Design Excellence',
      description: 'Crafting intuitive, user-centric designs that guarantee exceptional user satisfaction. Our design process combines aesthetic appeal with functional efficiency for seamless interactions.'
    },
    {
      icon: '💻',
      title: 'Custom Software Development',
      description: 'Building robust, scalable enterprise solutions tailored to your unique business requirements using cutting-edge technologies and industry best practices.'
    },
    {
      icon: '🌐',
      title: 'Web Application Development',
      description: 'Creating responsive, high-performance web applications using modern frameworks. We deliver powerful functionality with seamless user experience.'
    },
    {
      icon: '📱',
      title: 'Mobile App Development',
      description: 'Developing native and cross-platform mobile applications that users love. Expert in iOS and Android development with focus on performance and user experience.'
    },
    {
      icon: '🔧',
      title: 'Full-Stack Development',
      description: 'End-to-end development expertise covering frontend, backend, database, and cloud infrastructure. Complete solutions from UI design to server architecture.'
    },
    {
      icon: '🚀',
      title: 'Digital Transformation Consulting',
      description: 'Strategic guidance for businesses navigating digital transformation. Expertise in modernization, cloud migration, and technology optimization.'
    }
  ];

  const values = [
    { 
      icon: '🔄',
      text: 'Complete Lifecycle Expertise',
      description: 'From planning to maintenance, we handle every phase of your project with expertise.'
    },
    { 
      icon: '⚡',
      text: 'Cutting-Edge Technology Stack',
      description: 'We use the latest technologies and frameworks to build future-proof solutions.'
    },
    { 
      icon: '🔄',
      text: 'Agile Development Process',
      description: 'Flexible, iterative approach ensuring quick adaptability to changing requirements.'
    },
    { 
      icon: '🎯',
      text: 'Quality-First Approach',
      description: 'Rigorous testing and quality assurance at every development stage.'
    },
    { 
      icon: '📈',
      text: 'Scalable Solutions',
      description: 'Building systems that grow with your business needs and user base.'
    },
    { 
      icon: '🤝',
      text: 'Client-Centric Focus',
      description: 'Your success is our priority - we ensure complete client satisfaction.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            🚀 About AppDost
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            Your Trusted Partner for Complete Digital Transformation
          </p>
        </div>

        {/* Service Cards - Vertical Layout */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-transparent hover:border-blue-200 min-h-[300px] flex flex-col"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed flex-grow">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Work With Us? Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Why Work With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Expert Team Card */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 min-h-[380px] flex flex-col">
              <div className="bg-purple-100 w-16 h-16 rounded-lg flex items-center justify-center mb-8">
                <span className="text-4xl">👥</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Expert Team</h3>
              <div className="space-y-4 flex-grow">
                <p className="text-gray-700 text-xl leading-relaxed">
                  Work alongside 20+ talented developers who are passionate about technology and innovation.
                </p>
                <ul className="text-gray-600 text-lg space-y-3 mt-4">
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">•</span>
                    Experienced professionals
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">•</span>
                    Diverse skill sets
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">•</span>
                    Collaborative environment
                  </li>
                </ul>
              </div>
            </div>

            {/* Career Growth Card */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 min-h-[380px] flex flex-col">
              <div className="bg-purple-100 w-16 h-16 rounded-lg flex items-center justify-center mb-8">
                <span className="text-4xl">📈</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Career Growth</h3>
              <div className="space-y-4 flex-grow">
                <p className="text-gray-700 text-xl leading-relaxed">
                  Continuous learning opportunities, skill development programs, and clear career progression paths.
                </p>
                <ul className="text-gray-600 text-lg space-y-3 mt-4">
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">•</span>
                    Mentorship programs
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">•</span>
                    Skill advancement
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">•</span>
                    Leadership opportunities
                  </li>
                </ul>
              </div>
            </div>

            {/* Innovative Projects Card */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 min-h-[380px] flex flex-col">
              <div className="bg-yellow-100 w-16 h-16 rounded-lg flex items-center justify-center mb-8">
                <span className="text-4xl">💡</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Innovative Projects</h3>
              <div className="space-y-4 flex-grow">
                <p className="text-gray-700 text-xl leading-relaxed">
                  Work on cutting-edge projects using the latest technologies and industry best practices.
                </p>
                <ul className="text-gray-600 text-lg space-y-3 mt-4">
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">•</span>
                    Latest tech stack
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">•</span>
                    Challenging problems
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">•</span>
                    Innovation-driven
                  </li>
                </ul>
              </div>
            </div>

            {/* Work-Life Balance Card */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 min-h-[380px] flex flex-col">
              <div className="bg-red-100 w-16 h-16 rounded-lg flex items-center justify-center mb-8">
                <span className="text-4xl">⚖️</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Work-Life Balance</h3>
              <div className="space-y-4 flex-grow">
                <p className="text-gray-700 text-xl leading-relaxed">
                  Flexible working hours, remote work options, and a supportive work environment.
                </p>
                <ul className="text-gray-600 text-lg space-y-3 mt-4">
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">•</span>
                    Flexible schedules
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">•</span>
                    Remote work options
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">•</span>
                    Wellness programs
                  </li>
                </ul>
              </div>
            </div>

            {/* Recognition Card */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 min-h-[380px] flex flex-col">
              <div className="bg-yellow-100 w-16 h-16 rounded-lg flex items-center justify-center mb-8">
                <span className="text-4xl">🏆</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Recognition</h3>
              <div className="space-y-4 flex-grow">
                <p className="text-gray-700 text-xl leading-relaxed">
                  Performance-based rewards, employee recognition programs, and competitive incentives.
                </p>
                <ul className="text-gray-600 text-lg space-y-3 mt-4">
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">•</span>
                    Performance bonuses
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">•</span>
                    Award ceremonies
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">•</span>
                    Career milestones
                  </li>
                </ul>
              </div>
            </div>

            {/* Learning Culture Card */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 min-h-[380px] flex flex-col">
              <div className="bg-purple-100 w-16 h-16 rounded-lg flex items-center justify-center mb-8">
                <span className="text-4xl">📚</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Learning Culture</h3>
              <div className="space-y-4 flex-grow">
                <p className="text-gray-700 text-xl leading-relaxed">
                  Regular training sessions, workshops, certifications, and conference sponsorships.
                </p>
                <ul className="text-gray-600 text-lg space-y-3 mt-4">
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">•</span>
                    Training programs
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">•</span>
                    Certification support
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">•</span>
                    Conference access
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-16 text-center">
          <h3 className="text-4xl font-bold text-gray-900 mb-12">📞 Get In Touch</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 min-h-[300px] flex flex-col items-center">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <span className="text-4xl">🌐</span>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Website</h4>
              <div className="text-blue-600 mb-4 text-lg">www.appdost.in</div>
              <p className="text-gray-600 text-base">
                Visit our website to explore our full range of services and latest projects.
                Available 24/7 for your convenience.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 min-h-[300px] flex flex-col items-center">
              <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <span className="text-4xl">📧</span>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Email</h4>
              <div className="text-blue-600 mb-4 text-lg">contact@appdost.in</div>
              <p className="text-gray-600 text-base">
                Send us an email for inquiries, support, or collaboration opportunities.
                We typically respond within 24 hours.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 min-h-[300px] flex flex-col items-center">
              <div className="bg-purple-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <span className="text-4xl">📍</span>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Locations</h4>
              <div className="text-blue-600 mb-4 text-lg">Multiple Offices</div>
              <div className="text-gray-600 text-base">
                <p className="mb-2">🏢 HQ: Patna, Bihar</p>
                <p className="mb-2">📍 Branch: Motihari</p>
                <p>📍 Branch: Banka</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
