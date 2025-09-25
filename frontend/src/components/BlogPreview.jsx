import React from 'react';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { blogPosts } from '../mock/data';

const BlogPreview = () => {
  // Show only first 3 blog posts for preview
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-24 bg-gradient-to-b from-novia-black/95 to-novia-black">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-novia-purple/20 border border-novia-purple/30 rounded-full px-6 py-2 mb-8 backdrop-blur-sm">
            <span className="text-sm font-mono uppercase tracking-wider text-novia-purple">
              Blog & İçerikler
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white">
            Teknoloji
            <span className="text-novia-purple"> Gündemini</span>
            <br />
            Takip Edin
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Teknoloji dünyasındaki son gelişmeler, trend analízler ve uzman görüşleri ile 
            bilginizi güncel tutun.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredPosts.map((post, index) => (
            <article
              key={post.id}
              className="project-card bg-novia-purple/10 border border-novia-purple/20 hover:border-novia-purple/40 backdrop-blur-sm group cursor-pointer transition-all duration-300 hover:transform hover:translate-y-[-8px] overflow-hidden"
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
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

              <div className="p-6">
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
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-novia-purple transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>

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
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 2).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="service-button bg-novia-purple/20 text-novia-purple text-xs border-none"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read More Link */}
                <button className="flex items-center gap-2 text-novia-purple hover:text-white transition-colors duration-300 font-medium group">
                  <span>Devamını Oku</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Blog CTA */}
        <div className="text-center">
          <button className="cta-button large bg-transparent border-2 border-novia-purple text-novia-purple hover:bg-novia-purple hover:text-white transition-all duration-300">
            <span>Tüm Blog Yazılarını Gör</span>
            <ArrowRight size={16} className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;