import { motion } from "framer-motion";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  ThumbsUp,
  Award,
  Shield,
  Zap,
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

  const features = [
    {
      icon: ThumbsUp,
      title: "98% Satisfaction Rate",
      description: "Based on customer feedback",
    },
    {
      icon: Award,
      title: "5-Star Service",
      description: "Consistently rated excellent",
    },
    {
      icon: Shield,
      title: "Quality Guaranteed",
      description: "100% satisfaction or money back",
    },
    {
      icon: Zap,
      title: "Fast Response",
      description: "Quick support and delivery",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

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
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our <span className="text-primary">Customers Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers
            have to say about their experience with Jotee.
          </p>
        </motion.div>

        {/* Main Testimonial */}
        <motion.div
          className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 mb-16 overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          key={currentTestimonial}
        >
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/5 rounded-full translate-y-12 -translate-x-12" />

          <div className="relative z-10">
            {/* Quote Icon */}
            <motion.div
              className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Quote className="w-8 h-8 text-primary" />
            </motion.div>

            {/* Testimonial Content */}
            <motion.blockquote
              className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              "{testimonials[currentTestimonial].text}"
            </motion.blockquote>

            {/* Customer Info */}
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-2xl mr-4">
                  {testimonials[currentTestimonial].avatar}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-lg font-semibold text-gray-900">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    {testimonials[currentTestimonial].verified && (
                      <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                  <p className="text-gray-600">
                    {testimonials[currentTestimonial].role} at{" "}
                    {testimonials[currentTestimonial].company}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex items-center">
                      {[...Array(testimonials[currentTestimonial].rating)].map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 text-yellow-400 fill-current"
                          />
                        )
                      )}
                    </div>
                    <span className="text-sm text-gray-500">
                      {testimonials[currentTestimonial].date}
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  {testimonials[currentTestimonial].product}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="absolute top-8 right-8 flex gap-2">
            <motion.button
              onClick={prevTestimonial}
              className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <motion.button
              onClick={nextTestimonial}
              className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>

        {/* Testimonial Indicators */}
        <motion.div
          className="flex justify-center gap-3 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? "bg-primary scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
