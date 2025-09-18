import { motion } from "framer-motion";
import {
  ArrowRight,
  Phone,
  Mail,
  MessageCircle,
  Calendar,
  CheckCircle,
  Star,
  Shield,
  Zap,
  Gift,
  Users,
  Award,
} from "lucide-react";

const CTASection = () => {
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
        ease: "easeOut",
      },
    },
  };

  const benefits = [
    {
      icon: CheckCircle,
      text: "Free consultation and product recommendations",
    },
    {
      icon: Star,
      text: "Premium quality products with warranty",
    },
    {
      icon: Shield,
      text: "Professional installation and setup",
    },
    {
      icon: Zap,
      text: "Fast delivery and quick response",
    },
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with our experts",
      action: "+1 (555) 123-4567",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Get detailed information",
      action: "info@jotee.com",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Instant support",
      action: "Start Chat",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Calendar,
      title: "Book Consultation",
      description: "Schedule a meeting",
      action: "Book Now",
      color: "from-orange-500 to-orange-600",
    },
  ];

  const specialOffers = [
    {
      icon: Gift,
      title: "New Customer Discount",
      description: "Get 15% off your first order",
      code: "WELCOME15",
    },
    {
      icon: Users,
      title: "Bulk Purchase Deal",
      description: "Special rates for bulk orders",
      code: "BULK20",
    },
    {
      icon: Award,
      title: "Referral Program",
      description: "Earn rewards for referrals",
      code: "REFER50",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary-dark to-primary text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut" as const,
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
          animate={{
            y: [20, -20, 20],
            x: [10, -10, 10],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut" as const,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut" as const,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 border border-white/30 mb-8"
            variants={itemVariants}
          >
            <Star className="w-4 h-4 text-secondary mr-2" />
            <span className="text-sm font-medium">
              Limited Time Offer - Get Started Today!
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            variants={itemVariants}
          >
            Ready to Transform Your
            <span className="block text-secondary">Technology Experience?</span>
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Join thousands of satisfied customers who trust Jotee for their
            technology needs. Get expert advice, premium products, and
            exceptional service.
          </motion.p>

          {/* Benefits */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.3 }}
              >
                <benefit.icon className="w-6 h-6 text-secondary mr-3 flex-shrink-0" />
                <span className="text-sm font-medium">{benefit.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            variants={itemVariants}
          >
            <motion.button
              className="group relative px-8 py-4 bg-secondary text-gray-900 rounded-2xl font-bold text-lg shadow-2xl shadow-secondary/25 hover:shadow-secondary/40 transition-all duration-300 overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center">
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-secondary to-secondary-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <motion.button
              className="group flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-2xl font-bold text-lg border-2 border-white/30 hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              Call Now
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              className="group relative bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20 hover:border-white/40 transition-all duration-500 overflow-hidden"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              <div className="relative z-10 text-center">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-secondary transition-colors duration-300">
                  {method.title}
                </h3>
                <p className="text-white/80 text-sm mb-4">
                  {method.description}
                </p>
                <motion.button
                  className="w-full bg-white/20 text-white py-2 rounded-xl font-medium hover:bg-white/30 transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {method.action}
                </motion.button>
              </div>

              {/* Hover Effect */}
              <motion.div
                className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Special Offers */}
        <motion.div
          className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Special <span className="text-secondary">Offers</span>
            </h3>
            <p className="text-white/80">
              Take advantage of these exclusive deals available for a limited
              time
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {specialOffers.map((offer, index) => (
              <motion.div
                key={offer.title}
                className="group bg-white/5 rounded-2xl p-6 border border-white/20 hover:border-secondary/50 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-secondary/30 transition-colors duration-300">
                  <offer.icon className="w-6 h-6 text-secondary" />
                </div>
                <h4 className="text-lg font-semibold mb-2 group-hover:text-secondary transition-colors duration-300">
                  {offer.title}
                </h4>
                <p className="text-white/80 text-sm mb-4">
                  {offer.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-secondary font-bold text-lg">
                    {offer.code}
                  </span>
                  <motion.button
                    className="px-4 py-2 bg-secondary text-gray-900 rounded-lg font-medium hover:bg-secondary-dark transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Use Code
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
