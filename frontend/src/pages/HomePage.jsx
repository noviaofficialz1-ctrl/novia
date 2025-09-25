import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import BlogPreview from '../components/BlogPreview';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-novia-black text-white">
      <Header />
      <HeroSection />
      <ServicesSection />
      <BlogPreview />
      <Footer />
    </div>
  );
};

export default HomePage;