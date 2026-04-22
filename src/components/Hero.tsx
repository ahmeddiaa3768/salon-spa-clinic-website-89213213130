import React, { useEffect, useRef } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
      
      const floatingElements = hero.querySelectorAll('.floating-element');
      floatingElements.forEach((el, index) => {
        const element = el as HTMLElement;
        const speed = 0.1 + (index * 0.05);
        element.style.transform = `translate3d(${x * speed}px, ${y * speed}px, 0) rotateX(${y * 0.1}deg) rotateY(${x * 0.1}deg)`;
      });
    };

    hero.addEventListener('mousemove', handleMouseMove);
    return () => hero.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50"
      id="home"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="floating-element absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-full opacity-20 animate-float"></div>
        <div className="floating-element absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-rose-200 to-pink-200 rounded-full opacity-25 animate-float-delayed"></div>
        <div className="floating-element absolute bottom-32 left-40 w-28 h-28 bg-gradient-to-br from-purple-200 to-indigo-200 rounded-full opacity-20 animate-float-slow"></div>
        <div className="floating-element absolute bottom-20 right-20 w-36 h-36 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full opacity-15 animate-float"></div>
      </div>

      {/* Particle Animation */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-2 h-2 bg-emerald-300 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <Sparkles className="text-emerald-600 mr-2 animate-pulse" size={28} />
              <span className="text-emerald-600 font-semibold tracking-wide uppercase text-sm">
                Premium Beauty Experience
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-emerald-800 to-teal-700 bg-clip-text text-transparent">
                Transform Your
              </span>
              <br />
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent animate-shimmer">
                Beauty Journey
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
              Experience luxury redefined at our state-of-the-art salon and clinic. 
              Where artistry meets science to reveal your most radiant self.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center font-semibold">
                Book Consultation
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </button>
              <button className="group border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-full hover:bg-emerald-600 hover:text-white hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold">
                View Services
              </button>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative">
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-700">
              <div className="bg-gradient-to-br from-white to-emerald-50 p-8 rounded-3xl shadow-2xl border border-gray-100">
                <img 
                  src="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg"
                  alt="Luxury Salon Interior"
                  className="w-full h-96 object-cover rounded-2xl"
                />
              </div>
            </div>
            
            {/* Floating Cards */}
            <div className="floating-element absolute -top-8 -right-8 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 max-w-48">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Sparkles className="text-emerald-600" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Premium Care</p>
                  <p className="text-sm text-gray-600">Expert Professionals</p>
                </div>
              </div>
            </div>
            
            <div className="floating-element absolute -bottom-8 -left-8 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 max-w-48">
              <div className="text-center">
                <p className="text-2xl font-bold text-emerald-600">5000+</p>
                <p className="text-sm text-gray-600">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-emerald-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-emerald-600 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;