import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Code, Smartphone, Settings, Lightbulb, Cloud, BarChart, ArrowRight, Check } from 'lucide-react';
import { services } from '../mock/data';

const iconMap = {
  code: Code,
  smartphone: Smartphone,
  settings: Settings,
  lightbulb: Lightbulb,
  cloud: Cloud,
  'bar-chart': BarChart
};

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-novia-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-novia-black to-novia-black/95">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-novia-purple/20 border border-novia-purple/30 rounded-full px-6 py-2 mb-8 backdrop-blur-sm">
              <span className="text-sm font-mono uppercase tracking-wider text-novia-purple">
                Hizmetlerimiz
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Teknoloji
              <span className="text-novia-purple"> Çözümlerimiz</span>
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Modern teknolojilerin gücüyle işinizi dijital çağa taşıyoruz. 
              Özel yazılım çözümlerinden cloud altyapılarına kadar her alanda uzmanız.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detailed Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon];
              return (
                <div
                  key={service.id}
                  className="project-card bg-novia-purple/10 border border-novia-purple/20 hover:border-novia-purple/40 backdrop-blur-sm group transition-all duration-300 hover:transform hover:translate-y-[-8px]"
                  style={{
                    animationDelay: `${index * 150}ms`
                  }}
                >
                  <div className="p-8">
                    {/* Icon */}
                    <div className="bg-novia-purple/20 rounded-full w-20 h-20 flex items-center justify-center mb-6 group-hover:bg-novia-purple/30 transition-colors duration-300">
                      <IconComponent size={32} className="text-novia-purple" />
                    </div>

                    {/* Title */}
                    <h2 className="text-3xl font-display font-bold mb-4 text-white group-hover:text-novia-purple transition-colors duration-300">
                      {service.title}
                    </h2>

                    {/* Description */}
                    <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <Check size={18} className="text-novia-purple flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <button className="cta-button bg-novia-purple text-white hover:bg-novia-purple/90 transition-all duration-300 w-full">
                      <span>Detaylı Bilgi Al</span>
                      <ArrowRight size={16} className="ml-2" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-novia-purple/20 to-novia-purple/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
              Projenizi Konuşalım
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Teknoloji ihtiyaçlarınızı değerlendirip size en uygun çözümü birlikte belirleyelim.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cta-button large bg-novia-purple text-white hover:bg-novia-purple/90 transform hover:scale-105 transition-all duration-300">
                <span>Ücretsiz Danışmanlık</span>
                <ArrowRight size={16} className="ml-2" />
              </button>
              <button className="cta-button large bg-transparent border-2 border-novia-purple text-novia-purple hover:bg-novia-purple hover:text-white transition-all duration-300">
                Portfolyomuzu İncele
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;