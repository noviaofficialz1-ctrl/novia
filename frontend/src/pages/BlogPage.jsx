import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Calendar, Clock, User, Search, Filter } from 'lucide-react';
import { blogPosts } from '../mock/data';

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-novia-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-novia-black to-novia-black/95">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-novia-purple/20 border border-novia-purple/30 rounded-full px-6 py-2 mb-8 backdrop-blur-sm">
              <span className="text-sm font-mono uppercase tracking-wider text-novia-purple">
                Blog & İçerikler
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Teknoloji
              <span className="text-novia-purple"> Gündemini</span>
              <br />
              Keşfedin
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Teknoloji dünyasındaki son gelişmeler, trend analizler ve uzman görüşleri ile 
              bilginizi güncel tutun ve kariyerinizi geliştirin.
            </p>
            
            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <div className="flex-1 relative">
                <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Blog yazılarında ara..."
                  className="w-full pl-12 pr-4 py-3 bg-novia-purple/10 border border-novia-purple/30 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-novia-purple transition-colors duration-300"
                />
              </div>
              <button className="flex items-center gap-2 px-6 py-3 bg-novia-purple/20 border border-novia-purple/30 rounded-full text-novia-purple hover:bg-novia-purple/30 transition-colors duration-300">
                <Filter size={16} />
                <span>Filtrele</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={post.id}
                className="project-card bg-novia-purple/10 border border-novia-purple/20 hover:border-novia-purple/40 backdrop-blur-sm group cursor-pointer transition-all duration-300 hover:transform hover:translate-y-[-8px] overflow-hidden"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Image */}
                <div className="relative overflow-hidden -m-8 mb-6">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="service-button bg-novia-purple/90 text-white text-xs">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="px-8 pb-8">
                  {/* Meta Information */}
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-semibold mb-3 text-white group-hover:text-novia-purple transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-400 mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-2 mb-4">
                    <User size={16} className="text-novia-purple" />
                    <span className="text-sm text-gray-300">{post.author}</span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="service-button bg-novia-purple/20 text-novia-purple text-xs border-none"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-16">
            <button className="cta-button large bg-novia-purple text-white hover:bg-novia-purple/90 transform hover:scale-105 transition-all duration-300">
              Daha Fazla Yükle
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;