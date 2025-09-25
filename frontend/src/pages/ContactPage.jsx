import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, Send, User, MessageSquare } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    console.log('Form submitted:', formData);
    alert('Mesajınız gönderildi! En kısa sürede size dönüş yapacağız.');
    setFormData({
      name: '',
      email: '',
      company: '',
      service: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-novia-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-novia-black to-novia-black/95">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-novia-purple/20 border border-novia-purple/30 rounded-full px-6 py-2 mb-8 backdrop-blur-sm">
              <span className="text-sm font-mono uppercase tracking-wider text-novia-purple">
                İletişim
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Projeni
              <span className="text-novia-purple"> Konuşalım</span>
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Teknoloji ihtiyaçlarınızı değerlendirip size en uygun çözümü birlikte belirleyelim. 
              Uzman ekibimiz her zaman yardıma hazır.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div className="order-2 lg:order-1">
              <div className="project-card bg-novia-purple/10 border border-novia-purple/20 backdrop-blur-sm">
                <h2 className="text-3xl font-display font-bold mb-6 text-white">
                  Mesaj Gönderin
                </h2>
                <p className="text-gray-300 mb-8">
                  Aşağıdaki formu doldurarak bize ulaşabilirsiniz. 24 saat içinde size dönüş yapacağız.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Ad Soyad *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-novia-purple/10 border border-novia-purple/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-novia-purple transition-colors duration-300"
                        placeholder="Adınızı girin"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        E-posta *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-novia-purple/10 border border-novia-purple/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-novia-purple transition-colors duration-300"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                        Şirket
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-novia-purple/10 border border-novia-purple/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-novia-purple transition-colors duration-300"
                        placeholder="Şirket adınız"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                        İlgilendiğiniz Hizmet
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-novia-purple/10 border border-novia-purple/30 rounded-lg text-white focus:outline-none focus:border-novia-purple transition-colors duration-300"
                      >
                        <option value="">Seçiniz</option>
                        <option value="web-gelistirme">Web Geliştirme</option>
                        <option value="mobil-uygulama">Mobil Uygulama</option>
                        <option value="sistem-entegrasyonu">Sistem Entegrasyonu</option>
                        <option value="teknoloji-danismanligi">Teknoloji Danışmanlığı</option>
                        <option value="cloud-cozumleri">Cloud Çözümleri</option>
                        <option value="veri-analizi">Veri Analizi</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Mesajınız *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-novia-purple/10 border border-novia-purple/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-novia-purple transition-colors duration-300 resize-none"
                      placeholder="Projeniz hakkında detayları paylaşın..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="cta-button large bg-novia-purple text-white hover:bg-novia-purple/90 w-full transform hover:scale-105 transition-all duration-300"
                  >
                    <Send size={16} className="mr-2" />
                    <span>Mesajı Gönder</span>
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <h2 className="text-3xl font-display font-bold mb-6 text-white">
                  İletişim Bilgileri
                </h2>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  Size en iyi hizmeti verebilmek için her zaman ulaşılabilir durumdayız. 
                  Projelerinizi ve teknoloji ihtiyaçlarınızı konuşmak için bize ulaşın.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="project-card bg-novia-purple/10 border border-novia-purple/20 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <div className="bg-novia-purple/20 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mt-1">
                      <Mail size={20} className="text-novia-purple" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">E-posta</h3>
                      <p className="text-gray-300">hello@novia.tech</p>
                      <p className="text-gray-300">info@novia.tech</p>
                    </div>
                  </div>
                </div>

                <div className="project-card bg-novia-purple/10 border border-novia-purple/20 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <div className="bg-novia-purple/20 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mt-1">
                      <Phone size={20} className="text-novia-purple" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Telefon</h3>
                      <p className="text-gray-300">+90 (212) 555 0123</p>
                      <p className="text-gray-300">+90 (532) 555 0123</p>
                    </div>
                  </div>
                </div>

                <div className="project-card bg-novia-purple/10 border border-novia-purple/20 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <div className="bg-novia-purple/20 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mt-1">
                      <MapPin size={20} className="text-novia-purple" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Adres</h3>
                      <p className="text-gray-300">
                        Levent Mahallesi<br />
                        Teknoloji Caddesi No: 123<br />
                        34330 Beşiktaş / İstanbul
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="project-card bg-novia-purple/10 border border-novia-purple/20 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-white mb-4">Çalışma Saatleri</h3>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Pazartesi - Cuma</span>
                    <span>09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cumartesi</span>
                    <span>09:00 - 15:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Pazar</span>
                    <span>Kapalı</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;