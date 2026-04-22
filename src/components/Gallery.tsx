import React, { useState } from 'react';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    { src: "https://images.pexels.com/photos/3993456/pexels-photo-3993456.jpeg", category: "Interior" },
    { src: "https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg", category: "Hair" },
    { src: "https://images.pexels.com/photos/3985327/pexels-photo-3985327.jpeg", category: "Spa" },
    { src: "https://images.pexels.com/photos/3985322/pexels-photo-3985322.jpeg", category: "Treatment" },
    { src: "https://images.pexels.com/photos/3985334/pexels-photo-3985334.jpeg", category: "Interior" },
    { src: "https://images.pexels.com/photos/3992435/pexels-photo-3992435.jpeg", category: "Hair" },
    { src: "https://images.pexels.com/photos/4041279/pexels-photo-4041279.jpeg", category: "Spa" },
    { src: "https://images.pexels.com/photos/3985341/pexels-photo-3985341.jpeg", category: "Treatment" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-emerald-50" id="gallery">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-emerald-800 bg-clip-text text-transparent">
            Our Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Take a visual journey through our luxurious facilities and witness the 
            transformations we've helped our clients achieve.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105"
              onClick={() => setSelectedImage(image.src)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square relative">
                <img 
                  src={image.src}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {image.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-emerald-400 transition-colors duration-300"
              >
                <X size={32} />
              </button>
              <img 
                src={selectedImage}
                alt="Gallery Image"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;