import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Master Stylist & Colorist",
      experience: "12+ Years",
      specialties: ["Hair Coloring", "Precision Cuts", "Bridal Styling"],
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      social: { instagram: "#", facebook: "#", twitter: "#" }
    },
    {
      name: "Michael Chen",
      role: "Aesthetic Practitioner",
      experience: "8+ Years",
      specialties: ["Laser Treatments", "Skin Rejuvenation", "Facial Therapy"],
      image: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg",
      social: { instagram: "#", facebook: "#", twitter: "#" }
    },
    {
      name: "Emma Rodriguez",
      role: "Wellness Therapist",
      experience: "10+ Years",
      specialties: ["Massage Therapy", "Aromatherapy", "Body Treatments"],
      image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg",
      social: { instagram: "#", facebook: "#", twitter: "#" }
    },
    {
      name: "David Thompson",
      role: "Nail Artist & Technician",
      experience: "6+ Years",
      specialties: ["Nail Art", "Gel Manicures", "Pedicures"],
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg",
      social: { instagram: "#", facebook: "#", twitter: "#" }
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-emerald-50 to-teal-50" id="team">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-emerald-800 bg-clip-text text-transparent">
            Meet Our Experts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our team of certified professionals brings years of experience and 
            passion to every service, ensuring exceptional results for every client.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Social Links Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-4">
                  <div className="flex space-x-4">
                    <a href={member.social.instagram} className="text-white hover:text-emerald-200 transition-colors duration-300">
                      <Instagram size={20} />
                    </a>
                    <a href={member.social.facebook} className="text-white hover:text-emerald-200 transition-colors duration-300">
                      <Facebook size={20} />
                    </a>
                    <a href={member.social.twitter} className="text-white hover:text-emerald-200 transition-colors duration-300">
                      <Twitter size={20} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-emerald-800 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-emerald-600 font-semibold mb-2">{member.role}</p>
                <p className="text-sm text-gray-600 mb-4">{member.experience} Experience</p>
                
                <div className="space-y-1">
                  <p className="text-sm font-medium text-gray-700 mb-2">Specialties:</p>
                  {member.specialties.map((specialty, specialtyIndex) => (
                    <span 
                      key={specialtyIndex}
                      className="inline-block bg-emerald-100 text-emerald-800 text-xs px-3 py-1 rounded-full mr-2 mb-1"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;