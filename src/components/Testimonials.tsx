import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Jessica Marie",
      role: "Fashion Blogger",
      content: "Absolutely amazing experience! The team at Luxe Salon transformed my look completely. The attention to detail and personalized service exceeded all my expectations.",
      rating: 5,
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg"
    },
    {
      name: "Robert Wilson",
      role: "Business Executive",
      content: "Professional, clean, and incredibly skilled staff. I've been coming here for years and they never disappoint. The best salon experience in the city!",
      rating: 5,
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg"
    },
    {
      name: "Amanda Foster",
      role: "Makeup Artist",
      content: "The facial treatments here are phenomenal. My skin has never looked better! The aestheticians are knowledgeable and use top-quality products.",
      rating: 5,
      image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg"
    },
    {
      name: "Mark Thompson",
      role: "Photographer",
      content: "Great atmosphere, excellent service, and outstanding results. The laser hair removal treatment was comfortable and effective. Highly recommended!",
      rating: 5,
      image: "https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-emerald-800 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients 
            have to say about their experiences with us.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Client Image */}
              <div className="flex-shrink-0">
                <img 
                  src={testimonials[currentSlide].image}
                  alt={testimonials[currentSlide].name}
                  className="w-24 h-24 lg:w-32 lg:h-32 object-cover rounded-full border-4 border-emerald-100"
                />
              </div>

              {/* Testimonial Content */}
              <div className="flex-grow text-center lg:text-left">
                <div className="flex justify-center lg:justify-start mb-4">
                  {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-xl text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonials[currentSlide].content}"
                </p>

                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">
                    {testimonials[currentSlide].name}
                  </h4>
                  <p className="text-emerald-600 font-medium">
                    {testimonials[currentSlide].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center hover:bg-emerald-700 hover:scale-110 transition-all duration-300"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-emerald-600 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button 
              onClick={nextSlide}
              className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center hover:bg-emerald-700 hover:scale-110 transition-all duration-300"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;