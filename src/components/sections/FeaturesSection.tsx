import { motion } from "framer-motion";
import {
  Monitor,
  Laptop,
  Smartphone,
  Camera,
  Headphones,
  Wifi,
  Shield,
  Zap,
  Award,
  Users,
  Clock,
  CheckCircle,
} from "lucide-react";

const FeaturesSection = () => {
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

  const features = [
    {
      icon: Monitor,
      title: "Desktop Computers",
      description:
        "High-performance desktops for gaming, work, and creative projects",
      benefits: [
        "Custom builds",
        "Gaming rigs",
        "Workstations",
        "Budget options",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Laptop,
      title: "Laptops & Notebooks",
      description:
        "Portable computing solutions for professionals and students",
      benefits: [
        "Business laptops",
        "Gaming laptops",
        "Ultrabooks",
        "Convertibles",
      ],
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Smartphone,
      title: "Gadgets & Accessories",
      description: "Latest smartphones, tablets, and tech accessories",
      benefits: ["Smartphones", "Tablets", "Wearables", "Accessories"],
      color: "from-green-500 to-green-600",
    },
    {
      icon: Camera,
      title: "CCTV Solutions",
      description:
        "Professional surveillance systems for security and monitoring",
      benefits: [
        "HD cameras",
        "Night vision",
        "Remote access",
        "Professional installation",
      ],
      color: "from-red-500 to-red-600",
    },
    {
      icon: Headphones,
      title: "Audio Equipment",
      description: "Premium audio devices for music and communication",
      benefits: [
        "Gaming headsets",
        "Studio monitors",
        "Wireless earbuds",
        "Microphones",
      ],
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Wifi,
      title: "Networking Solutions",
      description: "Complete networking setup for homes and businesses",
      benefits: ["Routers", "Switches", "Access points", "Cables"],
      color: "from-cyan-500 to-cyan-600",
    },
  ];

  const serviceFeatures = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description:
        "All products come with comprehensive warranty and quality guarantee",
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description:
        "Quick shipping and same-day delivery for urgent requirements",
    },
    {
      icon: Award,
      title: "Expert Installation",
      description:
        "Professional setup and installation services by certified technicians",
    },
    {
      icon: Users,
      title: "24/7 Support",
      description: "Round-the-clock customer support and technical assistance",
    },
    {
      icon: Clock,
      title: "Quick Service",
      description: "Fast repair and maintenance services with minimal downtime",
    },
    {
      icon: CheckCircle,
      title: "Satisfaction Guarantee",
      description: "100% satisfaction guarantee or your money back",
    },
  ];

  return (
    <section className="py-20 bg-white">
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
            Our <span className="text-primary">Product Range</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From cutting-edge computers to advanced security solutions, we
            provide everything you need for your digital journey.
          </p>
        </motion.div>

        {/* Product Categories */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />

              {/* Icon */}
              <div
                className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {feature.description}
              </p>

              {/* Benefits */}
              <ul className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <motion.li
                    key={benefit}
                    className="flex items-center text-sm text-gray-600"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: benefitIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                    {benefit}
                  </motion.li>
                ))}
              </ul>

              {/* Hover Effect */}
              <motion.div
                className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Service Features */}
        <motion.div
          className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-primary">Jotee</span>?
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to providing exceptional service and support that
              goes beyond just selling products.
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {serviceFeatures.map((service, index) => (
              <motion.div
                key={service.title}
                className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {service.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
