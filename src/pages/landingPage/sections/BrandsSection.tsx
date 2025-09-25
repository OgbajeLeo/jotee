import { motion,type Variants } from "framer-motion";
import {
  Wifi,
  Shield,
  Star,
} from "lucide-react";

const BrandsSection = () => {
  const brands = [
    {
      name: "HP",
      logo: "🖥️",
      category: "Computers & Laptops",
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Dell",
      logo: "💻",
      category: "Business Solutions",
      color: "from-blue-600 to-blue-700",
    },
    {
      name: "Samsung",
      logo: "📱",
      category: "Mobile & Electronics",
      color: "from-blue-700 to-blue-800",
    },
    {
      name: "ASUS",
      logo: "🎮",
      category: "Gaming & Performance",
      color: "from-red-500 to-red-600",
    },
    {
      name: "Acer",
      logo: "💻",
      category: "Affordable Computing",
      color: "from-green-500 to-green-600",
    },
    {
      name: "OMEN",
      logo: "⚡",
      category: "Gaming Systems",
      color: "from-purple-500 to-purple-600",
    },
    {
      name: "Hisense",
      logo: "📺",
      category: "Smart Displays",
      color: "from-orange-500 to-orange-600",
    },
    {
      name: "itel",
      logo: "📱",
      category: "Budget Smartphones",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      name: "Lenovo",
      logo: "💼",
      category: "Business Laptops",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      name: "MSI",
      logo: "⚔️",
      category: "Gaming Hardware",
      color: "from-pink-500 to-pink-600",
    },
    {
      name: "Apple",
      logo: "🍎",
      category: "Premium Devices",
      color: "from-gray-600 to-gray-700",
    },
    {
      name: "Intel",
      logo: "🔧",
      category: "Processors",
      color: "from-blue-400 to-blue-500",
    },
  ];


  const marqueeVariants: Variants = {
    animate: {
      x: [0, -100 * brands.length],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop" as const,
          duration: 20,
          ease: "linear" as const,
        },
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
          animate={{
            y: [20, -20, 20],
            x: [10, -10, 10],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted <span className="text-primary">Brand Partners</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We partner with the world's leading technology brands to bring you
            the best products and solutions for your needs.
          </p>
        </motion.div>

        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          {/* First Marquee */}
          <motion.div
            className="flex gap-8 py-8"
            variants={marqueeVariants}
            animate="animate"
            style={{ width: `${brands.length * 200}px` }}
          >
            {brands.map((brand, index) => (
              <motion.div
                key={`first-${index}`}
                className="group flex-shrink-0 w-48 h-32 bg-white rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center justify-center p-6 hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${brand.color} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}
                >
                  <span className="text-2xl">{brand.logo}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors duration-300">
                  {brand.name}
                </h3>
                <p className="text-sm text-gray-600 text-center">
                  {brand.category}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Second Marquee (Reverse Direction) */}
          <motion.div
            className="flex gap-8 py-8"
            variants={{
              animate: {
                x: [-100 * brands.length, 0],
                transition: {
                  x: {
                    repeat: Infinity,
                    repeatType: "loop" as const,
                    duration: 20,
                    ease: "linear" as const,
                  },
                },
              },
            }}
            animate="animate"
            style={{ width: `${brands.length * 200}px` }}
          >
            {brands
              .slice()
              .reverse()
              .map((brand, index) => (
                <motion.div
                  key={`second-${index}`}
                  className="group flex-shrink-0 w-48 h-32 bg-white rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center justify-center p-6 hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${brand.color} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <span className="text-2xl">{brand.logo}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors duration-300">
                    {brand.name}
                  </h3>
                  <p className="text-sm text-gray-600 text-center">
                    {brand.category}
                  </p>
                </motion.div>
              ))}
          </motion.div>
        </div>

      

        {/* Trust Indicators */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-8 border border-primary/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our{" "}
              <span className="text-primary">Brand Partners</span>?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We carefully select our brand partners to ensure you get the best
              quality, reliability, and value for your technology investments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Authentic Products
              </h4>
              <p className="text-gray-600 text-sm">
                All products are 100% authentic with official warranties
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-secondary" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Premium Quality
              </h4>
              <p className="text-gray-600 text-sm">
                Only the best brands that meet our strict quality standards
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Wifi className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Expert Support
              </h4>
              <p className="text-gray-600 text-sm">
                Professional installation and ongoing technical support
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandsSection;
