import React from 'react';

const About: React.FC = () => {
  const features = [
    {
      icon: '🎨',
      title: 'UI/UX Design Excellence',
      description: 'Crafting intuitive, user-centric designs that guarantee exceptional user satisfaction and engagement. We believe great design is invisible—it just works.'
    },
    {
      icon: '💻',
      title: 'Custom Software Development',
      description: 'Building robust, scalable enterprise solutions tailored to your unique business requirements. From concept to deployment, we deliver excellence at every stage.'
    },
    {
      icon: '🌐',
      title: 'Web Application Development',
      description: 'Creating responsive, high-performance web applications using the latest frameworks and technologies. Your digital presence, perfected.'
    },
    {
      icon: '📱',
      title: 'Mobile App Development',
      description: 'Developing native and cross-platform mobile applications that users love. iOS, Android, or hybrid—we\'ve got you covered.'
    },
    {
      icon: '🔧',
      title: 'Full-Stack Development',
      description: 'End-to-end development expertise covering frontend elegance, backend power, database optimization, and cloud infrastructure.'
    },
    {
      icon: '🚀',
      title: 'Digital Transformation Consulting',
      description: 'Strategic guidance to help businesses navigate their digital journey, from legacy system modernization to cloud migration.'
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

        {/* Service Cards - Vertical Layout */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-transparent hover:border-blue-200 h-80 flex flex-col"
              >
                <div className="text-5xl mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-base text-gray-600 leading-relaxed flex-grow">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us - Horizontal Layout */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Why Choose AppDost? Card */}
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  🌟 Why Choose AppDost?
                </h3>
                <div className="space-y-4">
                  {values.map((value, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <span className="text-2xl">{value.icon}</span>
                      <span className="text-lg text-gray-700 font-medium">{value.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Work Culture & Values Card */}
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                <h4 className="text-3xl font-bold text-gray-900 mb-6">👥 Work Culture & Values</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <span className="text-2xl">🎯</span>
                    <div>
                      <div className="font-semibold text-gray-900 text-lg">Innovation First</div>
                      <div className="text-gray-600 text-base">Encouraging creative problem-solving</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="text-2xl">🤝</span>
                    <div>
                      <div className="font-semibold text-gray-900 text-lg">Collaborative Environment</div>
                      <div className="text-gray-600 text-base">Cross-functional teamwork</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="text-2xl">📚</span>
                    <div>
                      <div className="font-semibold text-gray-900 text-lg">Continuous Learning</div>
                      <div className="text-gray-600 text-base">Regular training & workshops</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="text-2xl">🌱</span>
                    <div>
                      <div className="font-semibold text-gray-900 text-lg">Growth Mindset</div>
                      <div className="text-gray-600 text-base">Diverse projects & new technologies</div>
                    </div>
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
