import React from 'react'
import { Loader2 } from 'lucide-react';
import { BlurFade } from '../../components/UIComponent/blur-fade.tsx';

const Laurels = () => {
  // Static gallery data
  const images = [
    {
      _id: 1,
      galleryImage: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&h=300&fit=crop&crop=center",
      title: "Fresh Orange Juice"
    },
    {
      _id: 2,
      galleryImage: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop&crop=center",
      title: "Tropical Smoothie"
    },
    {
      _id: 3,
      galleryImage: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=300&fit=crop&crop=center",
      title: "Berry Blast"
    },
    {
      _id: 4,
      galleryImage: "https://images.unsplash.com/photo-1626074356565-517a681e40be?w=400&h=300&fit=crop&crop=center",
      title: "Mango Paradise"
    },
    {
      _id: 5,
      galleryImage: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=400&h=300&fit=crop&crop=center",
      title: "Green Apple Fresh"
    },
    {
      _id: 6,
      galleryImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center",
      title: "Grape Delight"
    },
    
    {
      _id: 8,
      galleryImage: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop&crop=center",
      title: "Rainbow Sandwich"
    },
    {
      _id: 9,
      galleryImage: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop&crop=center",
      title: "Sweet Potato Fries"
    },
    {
      _id: 10,
      galleryImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop&crop=center",
      title: "Colorful Wrap"
    },
    {
      _id: 11,
      galleryImage: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop&crop=center",
      title: "Fresh Garden Salad"
    },
    {
      _id: 12,
      galleryImage: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop&crop=center",
      title: "Rainbow Combo"
    },
    {
      _id: 8,
      galleryImage: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop&crop=center",
      title: "Rainbow Sandwich"
    },
    {
      _id: 9,
      galleryImage: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop&crop=center",
      title: "Sweet Potato Fries"
    },
    {
      _id: 10,
      galleryImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop&crop=center",
      title: "Colorful Wrap"
    },
    {
      _id: 11,
      galleryImage: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop&crop=center",
      title: "Fresh Garden Salad"
    },
    {
      _id: 12,
      galleryImage: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop&crop=center",
      title: "Rainbow Combo"
    }
  ];

  return (
    <section id="photos">
      <div className="max-w-4xl mx-auto text-center mb-10 md:mb-16">
        <BlurFade direction="up" offset={24}>
          <h2 className="text-xs font-bold text-amber-600 tracking-[0.2em] uppercase mb-4 font-serif">CRAFTED VISIONS</h2>
          <h1 className="text-3xl md:text-5xl font-light text-gray-800 mb-4 font-serif leading-tight">Our Gallery</h1>
          <div className="flex justify-center mb-2">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-px bg-amber-300"></div>
              <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
              <div className="w-8 h-px bg-amber-300"></div>
            </div>
          </div>
        </BlurFade>
      </div>
      
      <div className="columns-2 gap-4 sm:columns-3">
        {images.map((img, idx) => (
          <BlurFade key={img._id || img.image || idx} delay={0.25 + idx * 0.05} inView>
            <div className="mb-4 group relative overflow-hidden rounded-lg cursor-pointer">
              {/* Image */}
              <img
                className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-110 group-hover:brightness-110"
                src={img.galleryImage}
                alt={img.title || `Gallery image ${idx + 1}`}
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out"></div>
              {/* Golden Border Effect */}
              <div 
                className="absolute inset-0 border-2 opacity-0 group-hover:opacity-80 transition-all duration-300 ease-out rounded-lg"
                style={{ borderColor: '#e3b873' }}
              ></div>
              {/* Subtle Glow Effect */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-all duration-500 ease-out rounded-lg blur-sm"
                style={{ 
                  background: 'radial-gradient(circle at center, #e3b873 0%, transparent 70%)',
                  transform: 'scale(1.1)'
                }}
              ></div>
              {/* Corner Accents */}
              <div className="absolute top-2 right-2 w-4 h-4 opacity-0 group-hover:opacity-60 transition-all duration-300 delay-100">
                <div 
                  className="absolute top-0 right-0 w-full h-0.5 transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                  style={{ background: '#e3b873' }}
                ></div>
                <div 
                  className="absolute top-0 right-0 h-full w-0.5 transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300 delay-75"
                  style={{ background: '#e3b873' }}
                ></div>
              </div>
              <div className="absolute bottom-2 left-2 w-4 h-4 opacity-0 group-hover:opacity-60 transition-all duration-300 delay-150">
                <div 
                  className="absolute bottom-0 left-0 w-full h-0.5 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                  style={{ background: '#e3b873' }}
                ></div>
                <div 
                  className="absolute bottom-0 left-0 h-full w-0.5 transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300 delay-75"
                  style={{ background: '#e3b873' }}
                ></div>
              </div>
            </div>
          </BlurFade>
        ))}
      </div>
    </section>
  )
}

export default Laurels