import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-novia-black border-t border-novia-purple/20">
      {/* Newsletter Section */}
      <div className="py-16 border-b border-novia-purple/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">
              Teknoloji Gündeminden
              <span className="text-novia-purple"> Haberdar Olun</span>
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              Haftalık bültenimize abone olun ve teknoloji dünyasındaki son gelişmeleri kaçırmayın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="flex-1 px-4 py-3 bg-novia-purple/10 border border-novia-purple/30 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-novia-purple transition-colors duration-300"
              />
              <button className="cta-button bg-novia-purple text-white hover:bg-novia-purple/90 transition-all duration-300 px-6">
                <span>Abone Ol</span>
                <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link to="/" className="text-3xl font-display font-bold text-novia-purple mb-4 block">
                NOVİA
              </Link>
              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                Geleceğin teknolojilerini bugünden kullanan, müşteri odaklı çözümler üreten 
                profesyonel yazılım geliştirme ekibi.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail size={18} className="text-novia-purple" />
                  <span>hello@novia.tech</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone size={18} className="text-novia-purple" />
                  <span>+90 (212) 555 0123</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin size={18} className="text-novia-purple" />
                  <span>İstanbul, Türkiye</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-6">Hızlı Linkler</h4>
              <nav className="space-y-3">
                {[
                  { path: '/', label: 'Ana Sayfa' },
                  { path: '/services', label: 'Hizmetler' },
                  { path: '/blog', label: 'Blog' },
                  { path: '/contact', label: 'İletişim' }
                ].map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block text-gray-300 hover:text-novia-purple transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold mb-6">Hizmetler</h4>
              <nav className="space-y-3">
                {[
                  'Web Geliştirme',
                  'Mobil Uygulama',
                  'Cloud Çözümleri',
                  'Sistem Entegrasyonu',
                  'Teknoloji Danışmanlığı',
                  'Veri Analizi'
                ].map((service) => (
                  <Link
                    key={service}
                    to="/services"
                    className="block text-gray-300 hover:text-novia-purple transition-colors duration-200"
                  >
                    {service}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-8 border-t border-novia-purple/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 NOVİA. Tüm hakları saklıdır.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-novia-purple transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-novia-purple transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-novia-purple transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;