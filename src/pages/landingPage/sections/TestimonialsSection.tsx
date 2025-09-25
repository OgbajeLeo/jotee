import { motion } from "framer-motion";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { useState, useEffect } from "react";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      company: "TechStart Inc.",
      avatar: "👩‍💼",
      rating: 5,
      text: "Jotee has been our go-to partner for all our technology needs. Their products are top-notch and their customer service is exceptional. The team went above and beyond to ensure we got exactly what we needed for our startup.",
      product: "Business Laptops",
      verified: true,
      date: "2 weeks ago",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Gaming Enthusiast",
      company: "Independent",
      avatar: "👨‍💻",
      rating: 5,
      text: "I've been gaming for over 10 years and Jotee's gaming rigs are absolutely incredible. The build quality is outstanding and the performance is exactly what I expected. Highly recommend for any serious gamer!",
      product: "Gaming Desktop",
      verified: true,
      date: "1 month ago",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "IT Manager",
      company: "Corporate Solutions",
      avatar: "👩‍🔧",
      rating: 5,
      text: "We needed a complete CCTV system for our office and Jotee delivered beyond our expectations. The installation was professional and the system works flawlessly. Great value for money!",
      product: "CCTV System",
      verified: true,
      date: "3 weeks ago",
    },
    {
      id: 4,
      name: "David Kim",
      role: "Freelance Designer",
      company: "Independent",
      avatar: "👨‍🎨",
      rating: 5,
      text: "As a graphic designer, I need reliable equipment. Jotee's MacBook Pro setup has been perfect for my work. The customer support team was incredibly helpful in choosing the right configuration.",
      product: "MacBook Pro",
      verified: true,
      date: "1 week ago",
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Small Business Owner",
      company: "Thompson Consulting",
      avatar: "👩‍💼",
      rating: 5,
      text: "Jotee helped us set up our entire office with computers, networking, and security systems. The team was professional, knowledgeable, and delivered everything on time. Highly satisfied!",
      product: "Office Setup",
      verified: true,
      date: "2 months ago",
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            Customer Testimonials
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what our customers have to say about their experience with
            Jotee.
          </p>
        </motion.div>

        {/* Main Testimonial */}
        <motion.div
          className="relative bg-white rounded-lg p-6 md:p-8 shadow-md border border-gray-200 mb-12 max-w-4xl mx-auto"
    
          key={currentTestimonial}
        >
          <div className="relative">
            {/* Quote Icon */}
            <motion.div
              className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mb-4"
             
            >
              <Quote className="w-4 h-4 text-gray-600" />
            </motion.div>

            {/* Testimonial Content */}
            <motion.blockquote
              className="text-lg md:text-xl text-gray-800 leading-relaxed mb-6"
              
            >
              "{testimonials[currentTestimonial].text}"
            </motion.blockquote>

            {/* Customer Info */}
            <div className="flex items-center justify-between border-t border-gray-100 pt-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-lg mr-3">
                  {testimonials[currentTestimonial].avatar}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium text-gray-900">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <div className="flex items-center">
                      {[...Array(testimonials[currentTestimonial].rating)].map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="w-3 h-3 text-yellow-400 fill-current"
                          />
                        )
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    {testimonials[currentTestimonial].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="absolute top-4 right-4 flex gap-1">
            <motion.button
              onClick={prevTestimonial}
              className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-4 h-4 text-gray-600" />
            </motion.button>
            <motion.button
              onClick={nextTestimonial}
              className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-4 h-4 text-gray-600" />
            </motion.button>
          </div>
        </motion.div>

        {/* Testimonial Indicators */}
        <motion.div
          className="flex justify-center gap-2 mb-12"
         
          viewport={{ once: true }}
        >
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentTestimonial
                  ? "bg-gray-800"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </motion.div>

      
      </div>
    </section>
  );
};

export default TestimonialsSection;
