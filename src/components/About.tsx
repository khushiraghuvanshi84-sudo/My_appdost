import React from 'react';

const About: React.FC = () => {
  const features = [
    {
      icon: '🎨',
      title: 'UI/UX Design Excellence',
      description: 'Crafting intuitive, user-centric designs that guarantee exceptional user satisfaction and engagement.'
    },
    {
      icon: '💻',
      title: 'Custom Software Development',
      description: 'Building robust, scalable enterprise solutions tailored to your unique business requirements.'
    },
    {
      icon: '🌐',
      title: 'Web Application Development',
      description: 'Creating responsive, high-performance web applications using the latest frameworks and technologies.'
    },
    {
      icon: '📱',
      title: 'Mobile App Development',
      description: 'Developing native and cross-platform mobile applications that users love.'
    },
    {
      icon: '🔧',
      title: 'Full-Stack Development',
      description: 'End-to-end development expertise covering frontend elegance, backend power, and cloud infrastructure.'
    },
    {
      icon: '🚀',
      title: 'Digital Transformation Consulting',
      description: 'Strategic guidance to help businesses navigate their digital journey and modernization.'
    }
  ];

  const values = [
    { icon: '✅', text: 'Complete Lifecycle Expertise' },
    { icon: '✅', text: 'Cutting-Edge Technology Stack' },
    { icon: '✅', text: 'Agile Development Process' },
    { icon: '✅', text: 'Quality-First Approach' },
    { icon: '✅', text: 'Scalable Solutions' },
    { icon: '✅', text: 'Client-Centric Focus' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
              🚀 About AppDost
            </span>
          </div>
            <h2 className="text-7xl lg:text-6xl font-bold text-gray-900 mb-6">
            Your Trusted Partner for{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Complete Digital Transformation
            </span>
          </h2>
          
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                🌟 Why Choose AppDost?
              </h3>
              <div className="space-y-4">
                {values.map((value, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="text-2xl">{value.icon}</span>
                    <span className="text-lg text-gray-700 font-medium">{value.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">👥 Work Culture & Values</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <div className="font-semibold text-gray-900">Innovation First</div>
                    <div className="text-gray-600">Encouraging creative problem-solving</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🤝</span>
                  <div>
                    <div className="font-semibold text-gray-900">Collaborative Environment</div>
                    <div className="text-gray-600">Cross-functional teamwork</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">📚</span>
                  <div>
                    <div className="font-semibold text-gray-900">Continuous Learning</div>
                    <div className="text-gray-600">Regular training & workshops</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🌱</span>
                  <div>
                    <div className="font-semibold text-gray-900">Growth Mindset</div>
                    <div className="text-gray-600">Diverse projects & new technologies</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">📞 Get In Touch</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl mb-3">🌐</div>
              <div className="font-semibold text-gray-900 mb-2">Website</div>
              <div className="text-blue-600">www.appdost.in</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl mb-3">📧</div>
              <div className="font-semibold text-gray-900 mb-2">Email</div>
              <div className="text-blue-600">contact@appdost.in</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl mb-3">📍</div>
              <div className="font-semibold text-gray-900 mb-2">Locations</div>
              <div className="text-blue-600">HQ-Patna, Motihari, Banka</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
