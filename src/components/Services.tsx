import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      icon: '📱',
      title: 'Android App Development',
      description: 'Custom Android applications built with the latest technologies to bring your ideas to life.',
      features: ['Native & Hybrid Apps', 'Play Store Deployment', 'Maintenance & Support'],
      color: 'from-green-500 to-blue-500'
    },
    {
      icon: '🌐',
      title: 'Web Development',
      description: 'Responsive and scalable web applications tailored to your business needs.',
      features: ['Responsive Design', 'E-commerce Solutions', 'Progressive Web Apps'],
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: '🎨',
      title: 'UI/UX Development',
      description: 'Beautiful, intuitive user interfaces that enhance user experience and engagement.',
      features: ['User Research', 'Wireframing', 'Brand Identity'],
      color: 'from-pink-500 to-orange-500'
    },
    {
      icon: '💼',
      title: 'CRM Software',
      description: 'Comprehensive CRM solutions to manage customer relationships and boost productivity.',
      features: ['Custom Development', 'Integration Services', 'Training & Support'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for modern businesses.',
      features: ['AWS, Azure, GCP', 'Migration Services', 'Performance Tuning'],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: '🔒',
      title: 'Cybersecurity',
      description: 'Protect your business with robust security solutions and best practices.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance'],
      color: 'from-red-500 to-orange-500'
    }
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Discovery & Planning',
      description: 'We deep dive into your requirements, understand your business goals, analyze competitors, and create a comprehensive project roadmap with clear milestones.'
    },
    {
      step: '2',
      title: 'Design & Prototype',
      description: 'Our design team creates intuitive wireframes, stunning UI mockups, and interactive prototypes that bring your vision to life before development begins.'
    },
    {
      step: '3',
      title: 'Development & Testing',
      description: 'Expert developers write clean, scalable code while our QA team performs rigorous testing to ensure flawless functionality across all devices and platforms.'
    },
    {
      step: '4',
      title: 'Deployment & Support',
      description: 'We handle the complete deployment process and provide ongoing maintenance, updates, and 24/7 technical support to keep your solution running smoothly.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-6xl lg:text-7xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            We deliver end-to-end IT solutions that drive business growth and digital transformation
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Development Process */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h3>
            <p className="text-xl text-gray-600">
              A proven methodology that ensures quality, efficiency, and client satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h4>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
