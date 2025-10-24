import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Careers', href: '#careers' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    { name: 'Android App Development', href: '#android' },
    { name: 'Web Development', href: '#web' },
    { name: 'UI/UX Design', href: '#ui-ux' },
    { name: 'CRM Software', href: '#crm' },
    { name: 'Cloud Solutions', href: '#cloud' },
    { name: 'Cybersecurity', href: '#security' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: '💼', href: '#' },
    { name: 'Twitter', icon: '🐦', href: '#' },
    { name: 'GitHub', icon: '🐙', href: '#' },
    { name: 'Instagram', icon: '📷', href: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-2xl font-bold">AppDost</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Delivering innovative IT solutions since 2025. We transform ideas into powerful digital experiences with cutting-edge technology and expert craftsmanship.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="font-semibold text-blue-300">10+</div>
                <div className="text-gray-400">Web Projects</div>
              </div>
              <div>
                <div className="font-semibold text-green-300">4+</div>
                <div className="text-gray-400">Android Apps</div>
              </div>
              <div>
                <div className="font-semibold text-purple-300">1</div>
                <div className="text-gray-400">CRM System</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors flex items-center"
                  >
                    <span className="mr-2">→</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-white transition-colors flex items-center"
                  >
                    <span className="mr-2">→</span>
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-2xl">📧</span>
                <div>
                  <div className="text-gray-300">contact@appdost.in</div>
                  <div className="text-gray-300">hr@appdost.in</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">📞</span>
                <div>
                  <div className="text-gray-300">+91 76350 75422</div>
                  <div className="text-gray-300">+91 11 6929 0750</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">📍</span>
                <div>
                  <div className="text-gray-300">Mon - Sat: 9:00 AM - 6:00 PM IST</div>
                  <div className="text-gray-300">3 Offices: Banka (HQ), Motihari, Patna</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                    title={social.name}
                  >
                    <span className="text-lg">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} AppDost - Complete IT Solution. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Sitemap
              </a>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-gray-500 text-sm">
              Built with ❤️ in India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
