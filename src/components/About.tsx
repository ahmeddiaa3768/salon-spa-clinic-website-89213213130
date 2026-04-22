import React from 'react';
import { Award, Users, Clock, Star } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Users className="w-6 h-6" />, number: "5000+", label: "Happy Clients" },
    { icon: <Award className="w-6 h-6" />, number: "15+", label: "Years Experience" },
    { icon: <Clock className="w-6 h-6" />, number: "50K+", label: "Services Completed" },
    { icon: <Star className="w-6 h-6" />, number: "4.9", label: "Average Rating" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50" id="about">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.pexels.com/photos/3985333/pexels-photo-3985333.jpeg"
                alt="Salon Interior"
                className="w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-full opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-rose-200 to-pink-200 rounded-full opacity-25 animate-pulse"></div>
          </div>

          {/* Content Section */}
          <div>
            <div className="mb-6">
              <span className="text-emerald-600 font-semibold tracking-wide uppercase text-sm">About Our Salon</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-emerald-800 bg-clip-text text-transparent">
              Where Beauty Meets Excellence
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              For over 15 years, Luxe Salon & Clinic has been the premier destination for 
              luxury beauty and wellness services. Our commitment to excellence and innovation 
              has earned us the trust of thousands of satisfied clients.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Our team of certified professionals uses only the finest products and 
              cutting-edge techniques to deliver results that exceed expectations. 
              We believe in creating a sanctuary where you can relax, rejuvenate, 
              and discover your most beautiful self.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-100"
                >
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <div className="text-emerald-600">{stat.icon}</div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;