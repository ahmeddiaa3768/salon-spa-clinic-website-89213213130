import React from 'react';
import { Scissors, Sparkles, Heart, Zap, Crown, Flower2 } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "Hair Styling",
      description: "Expert cuts, colors, and styling for all hair types with premium products",
      features: ["Precision Cuts", "Color Treatments", "Styling"],
      price: "From $80",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Facial Treatments",
      description: "Rejuvenating facials using advanced skincare technology",
      features: ["Deep Cleansing", "Anti-Aging", "Hydrating"],
      price: "From $120",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Body Treatments",
      description: "Relaxing massages and body therapies for complete wellness",
      features: ["Massage Therapy", "Body Wraps", "Exfoliation"],
      price: "From $100",
      gradient: "from-rose-500 to-pink-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Laser Therapy",
      description: "Advanced laser treatments for hair removal and skin rejuvenation",
      features: ["Hair Removal", "Skin Resurfacing", "Scar Treatment"],
      price: "From $150",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Crown className="w-8 h-8" />,
      title: "Bridal Packages",
      description: "Complete bridal beauty packages for your special day",
      features: ["Hair & Makeup", "Trial Sessions", "Day-of Service"],
      price: "From $300",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Flower2 className="w-8 h-8" />,
      title: "Wellness Spa",
      description: "Holistic wellness treatments for mind, body, and soul",
      features: ["Aromatherapy", "Meditation", "Wellness Coaching"],
      price: "From $90",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-emerald-50" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-emerald-800 bg-clip-text text-transparent">
            Our Premium Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of beauty and wellness services, 
            each designed to enhance your natural radiance and boost your confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-emerald-200 transform hover:scale-105 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-emerald-800 transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                <span className="text-2xl font-bold text-emerald-600">{service.price}</span>
                <button className="bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 hover:scale-105 transition-all duration-300">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;