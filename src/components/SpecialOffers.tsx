import React, { useState, useEffect } from 'react';
import { Gift, Percent, Calendar, ArrowRight, Clock } from 'lucide-react';

const SpecialOffers = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 12,
    minutes: 30,
    seconds: 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const offers = [
    {
      icon: <Gift className="w-8 h-8" />,
      title: "New Client Special",
      discount: "30% OFF",
      description: "First-time clients enjoy 30% off any premium service",
      originalPrice: "$150",
      salePrice: "$105",
      validUntil: "Limited Time",
      gradient: "from-rose-500 to-pink-500",
      popular: true
    },
    {
      icon: <Percent className="w-8 h-8" />,
      title: "Bridal Package Deal",
      discount: "25% OFF",
      description: "Complete bridal beauty package with trial session included",
      originalPrice: "$400",
      salePrice: "$300",
      validUntil: "This Month",
      gradient: "from-purple-500 to-pink-500",
      popular: false
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Monthly Membership",
      discount: "Save $200",
      description: "Unlimited access to spa services with monthly membership",
      originalPrice: "$500/mo",
      salePrice: "$300/mo",
      validUntil: "Ongoing",
      gradient: "from-emerald-500 to-teal-500",
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-rose-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-rose-800 bg-clip-text text-transparent">
            Special Offers & Promotions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't miss out on our exclusive deals and limited-time offers. 
            Treat yourself to luxury at unbeatable prices.
          </p>
        </div>

        {/* Featured Countdown Offer */}
        <div className="bg-gradient-to-r from-rose-600 to-pink-600 rounded-3xl p-8 mb-12 text-white text-center shadow-2xl">
          <div className="flex items-center justify-center mb-4">
            <Clock className="w-8 h-8 mr-3 animate-pulse" />
            <h3 className="text-2xl font-bold">Flash Sale - Limited Time Only!</h3>
          </div>
          <p className="text-xl mb-6 opacity-90">50% OFF All Facial Treatments</p>
          
          {/* Countdown Timer */}
          <div className="flex justify-center space-x-4 mb-6">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="bg-white/20 backdrop-blur-sm rounded-xl p-4 min-w-[80px]">
                <div className="text-2xl font-bold">{value.toString().padStart(2, '0')}</div>
                <div className="text-sm opacity-80 capitalize">{unit}</div>
              </div>
            ))}
          </div>
          
          <button className="bg-white text-rose-600 px-8 py-4 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold">
            Claim This Offer Now
          </button>
        </div>

        {/* Offers Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <div 
              key={index}
              className={`group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 transform hover:scale-105 hover:-translate-y-2 overflow-hidden ${
                offer.popular 
                  ? 'border-rose-300 ring-4 ring-rose-100' 
                  : 'border-gray-100 hover:border-rose-200'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Popular Badge */}
              {offer.popular && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold transform rotate-12 shadow-lg">
                  Most Popular
                </div>
              )}

              {/* Background Gradient Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${offer.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-r ${offer.gradient} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  {offer.icon}
                </div>

                <div className="mb-4">
                  <span className={`inline-block bg-gradient-to-r ${offer.gradient} text-white px-4 py-2 rounded-full text-lg font-bold mb-2`}>
                    {offer.discount}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-rose-800 transition-colors duration-300">
                  {offer.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {offer.description}
                </p>

                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-gray-400 line-through text-lg">{offer.originalPrice}</span>
                    <span className="text-3xl font-bold text-rose-600 ml-2">{offer.salePrice}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm text-gray-500">Valid: {offer.validUntil}</span>
                  <span className="text-sm bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full">
                    Limited Time
                  </span>
                </div>

                <button className={`w-full bg-gradient-to-r ${offer.gradient} text-white px-6 py-4 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold flex items-center justify-center group`}>
                  Book This Offer
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                </button>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full opacity-20 group-hover:scale-150 group-hover:opacity-30 transition-all duration-500"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-15 group-hover:scale-125 group-hover:opacity-25 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Never Miss a Deal!</h3>
          <p className="text-xl mb-6 opacity-90">
            Subscribe to our newsletter and be the first to know about exclusive offers and promotions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 px-6 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/30"
            />
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;