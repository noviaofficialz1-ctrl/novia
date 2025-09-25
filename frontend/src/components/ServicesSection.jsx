import React from 'react';
import { Code, Smartphone, Settings, Lightbulb, Cloud, BarChart, ArrowRight } from 'lucide-react';
import { services } from '../mock/data';

const iconMap = {
  code: Code,
  smartphone: Smartphone,
  settings: Settings,
  lightbulb: Lightbulb,
  cloud: Cloud,
  'bar-chart': BarChart
};

const ServicesSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-novia-black to-novia-black/95">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-novia-purple/20 border border-novia-purple/30 rounded-full px-6 py-2 mb-8 backdrop-blur-sm">
            <span className="text-sm font-mono uppercase tracking-wider text-novia-purple">
              Hizmetlerimiz
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white">
            Teknoloji
            <span className="text-novia-purple"> Çözümlerimiz</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Modern teknolojilerin gücüyle işinizi dijital çağa taşıyoruz. 
            Özel yazılım çözümlerinden cloud altyapılarına kadar her alanda uzmanız.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className="project-card bg-novia-purple/10 border border-novia-purple/20 hover:border-novia-purple/40 backdrop-blur-sm group cursor-pointer transition-all duration-300 hover:transform hover:translate-y-[-8px]"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="p-8">
                  {/* Icon */}
                  <div className="bg-novia-purple/20 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-novia-purple/30 transition-colors duration-300">
                    <IconComponent size={24} className="text-novia-purple" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-novia-purple transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-novia-purple rounded-full"></div>
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button className="flex items-center gap-2 text-novia-purple hover:text-white transition-colors duration-300 font-medium group">
                    <span>Detayları Gör</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="cta-button large bg-novia-purple text-white hover:bg-novia-purple/90 transform hover:scale-105 transition-all duration-300">
            <span>Tüm Hizmetleri Gör</span>
            <ArrowRight size={16} className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;