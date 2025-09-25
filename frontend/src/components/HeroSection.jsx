import React from 'react';
import { ArrowRight, Zap, Shield, Code } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-novia-black via-novia-black to-novia-purple/20"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-novia-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-novia-purple/15 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Badge */}
          <div className="inline-flex items-center gap-2 bg-novia-purple/20 border border-novia-purple/30 rounded-full px-6 py-2 mb-8 backdrop-blur-sm">
            <Zap size={16} className="text-novia-purple" />
            <span className="text-sm font-mono uppercase tracking-wider text-novia-purple">
              Teknoloji Öncüsü
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
            <span className="text-white">Geleceği</span>
            <br />
            <span className="text-novia-purple">Bugün İnşa Ediyoruz</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            NOVİA olarak, en ileri teknoloji çözümleri ile işinizi dijital çağa taşıyoruz. 
            Profesyonel yazılım geliştirme, sistem entegrasyonu ve teknoloji danışmanlığında uzmanız.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="cta-button large bg-novia-purple text-white hover:bg-novia-purple/90 transform hover:scale-105 transition-all duration-300">
              <span>Hizmetlerimizi Keşfet</span>
              <ArrowRight size={16} className="ml-2" />
            </button>
            <button className="cta-button large bg-transparent border-2 border-novia-purple text-novia-purple hover:bg-novia-purple hover:text-white transition-all duration-300">
              İletişime Geç
            </button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="bg-novia-purple/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-novia-purple/30 transition-colors duration-300">
                <Code size={24} className="text-novia-purple" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Özel Yazılım</h3>
              <p className="text-gray-400 text-sm">İşinize özel, ölçeklenebilir yazılım çözümleri</p>
            </div>

            <div className="text-center group">
              <div className="bg-novia-purple/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-novia-purple/30 transition-colors duration-300">
                <Shield size={24} className="text-novia-purple" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Güvenli Altyapı</h3>
              <p className="text-gray-400 text-sm">Kurumsal seviyede güvenlik ve performans</p>
            </div>

            <div className="text-center group">
              <div className="bg-novia-purple/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-novia-purple/30 transition-colors duration-300">
                <Zap size={24} className="text-novia-purple" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Hızlı Teslimat</h3>
              <p className="text-gray-400 text-sm">Agile metodoloji ile hızlı ve kaliteli çözümler</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;