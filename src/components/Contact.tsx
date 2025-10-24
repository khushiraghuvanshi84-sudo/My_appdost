import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      details: ['contact@appdost.in', 'hr@appdost.in'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: '📞',
      title: 'Phone',
      details: ['+91 76350 75422', '+91 11 6929 0750'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: '📍',
      title: 'Locations',
      details: ['HQ-Patna', 'Motihari', 'Banka'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: '🕒',
      title: 'Working Hours',
      details: ['Mon - Sat: 9:00 AM - 6:00 PM IST'],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
              Contact Us
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ready to Start Your{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Project?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let's discuss how we can help transform your ideas into reality with cutting-edge technology and expert development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Free Consultation</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
              <p className="text-gray-600 mb-8">
                We're here to help you bring your ideas to life. Reach out to us through any of the channels below.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center text-2xl flex-shrink-0`}>
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{info.title}</h4>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-600">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6">
              <h4 className="font-bold text-gray-900 mb-4">Quick Actions</h4>
              <div className="space-y-3">
                <button className="w-full bg-white text-gray-700 py-3 px-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all text-left">
                  📋 Download Our Portfolio
                </button>
                <button className="w-full bg-white text-gray-700 py-3 px-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all text-left">
                  💼 View Our Services
                </button>
                <button className="w-full bg-white text-gray-700 py-3 px-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all text-left">
                  🎯 Get Free Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
