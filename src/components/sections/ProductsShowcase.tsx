import { motion } from "framer-motion";
import {
  Star,
  ShoppingCart,
  Heart,
  Eye,
  ArrowRight,
  Monitor,
  Laptop,
  Smartphone,
  Camera,
  Headphones,
  Wifi,
} from "lucide-react";
import { useState } from "react";

const ProductsShowcase = () => {
  const [activeCategory, setActiveCategory] = useState("featured");

  const categories = [
    { id: "featured", name: "Featured", icon: Star },
    { id: "computers", name: "Computers", icon: Monitor },
    { id: "laptops", name: "Laptops", icon: Laptop },
    { id: "gadgets", name: "Gadgets", icon: Smartphone },
    { id: "cctv", name: "CCTV", icon: Camera },
    { id: "audio", name: "Audio", icon: Headphones },
    { id: "networking", name: "Networking", icon: Wifi },
  ];

  const products = {
    featured: [
      {
        id: 1,
        name: "Gaming Desktop Pro",
        price: "1,299",
        originalPrice: "1,599",
        rating: 4.9,
        reviews: 127,
        image: "🖥️",
        badge: "Best Seller",
        features: ["RTX 4070", "32GB RAM", "1TB SSD"],
      },
      {
        id: 2,
        name: "MacBook Air M3",
        price: "1,199",
        originalPrice: "1,399",
        rating: 4.8,
        reviews: 89,
        image: "💻",
        badge: "New",
        features: ["M3 Chip", "16GB RAM", "512GB SSD"],
      },
      {
        id: 3,
        name: "iPhone 15 Pro",
        price: "999",
        originalPrice: "1,199",
        rating: 4.9,
        reviews: 203,
        image: "📱",
        badge: "Hot",
        features: ["A17 Pro", "256GB", "Titanium"],
      },
    ],
    computers: [
      {
        id: 4,
        name: "Workstation Elite",
        price: "2,499",
        originalPrice: "2,999",
        rating: 4.7,
        reviews: 45,
        image: "🖥️",
        badge: "Professional",
        features: ["RTX 4080", "64GB RAM", "2TB SSD"],
      },
      {
        id: 5,
        name: "Budget Gaming PC",
        price: "799",
        originalPrice: "999",
        rating: 4.6,
        reviews: 156,
        image: "🖥️",
        badge: "Value",
        features: ["RTX 4060", "16GB RAM", "500GB SSD"],
      },
    ],
    laptops: [
      {
        id: 6,
        name: "Gaming Laptop Pro",
        price: "1,899",
        originalPrice: "2,199",
        rating: 4.8,
        reviews: 78,
        image: "💻",
        badge: "Gaming",
        features: ["RTX 4070", "32GB RAM", "1TB SSD"],
      },
      {
        id: 7,
        name: "Business Ultrabook",
        price: "1,299",
        originalPrice: "1,599",
        rating: 4.7,
        reviews: 92,
        image: "💻",
        badge: "Business",
        features: ["i7 Processor", "16GB RAM", "512GB SSD"],
      },
    ],
  };

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

  const currentProducts =
    products[activeCategory as keyof typeof products] || products.featured;

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
            Featured <span className="text-primary">Products</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our carefully curated selection of premium technology
            products designed to meet your every need.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group flex items-center px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-primary text-white shadow-lg shadow-primary/25"
                  : "bg-white text-gray-600 hover:text-primary hover:bg-primary/5 border border-gray-200"
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <category.icon className="w-5 h-5 mr-2" />
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={activeCategory}
        >
          {currentProducts.map((product) => (
            <motion.div
              key={product.id}
              className="group relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Badge */}
              <motion.div
                className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold z-10 ${
                  product.badge === "Best Seller"
                    ? "bg-red-500 text-white"
                    : product.badge === "New"
                    ? "bg-green-500 text-white"
                    : product.badge === "Hot"
                    ? "bg-orange-500 text-white"
                    : "bg-primary text-white"
                }`}
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2 }}
              >
                {product.badge}
              </motion.div>

              {/* Product Image */}
              <div className="relative mb-6 overflow-hidden rounded-2xl bg-gray-50 h-48 flex items-center justify-center">
                <motion.div
                  className="text-8xl"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {product.image}
                </motion.div>

                {/* Quick Actions */}
                <motion.div
                  className="absolute top-4 left-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: -20 }}
                  whileHover={{ x: 0 }}
                >
                  <motion.button
                    className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Heart className="w-4 h-4" />
                  </motion.button>
                  <motion.button
                    className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Eye className="w-4 h-4" />
                  </motion.button>
                </motion.div>
              </div>

              {/* Product Info */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-primary">
                      ₦{product.price}
                    </span>
                    <span className="text-lg text-gray-400 line-through">
                      ₦{product.originalPrice}
                    </span>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <motion.button
                  className="w-full bg-primary text-white py-3 rounded-2xl font-semibold flex items-center justify-center gap-2 hover:bg-primary-dark transition-colors duration-300 group/btn"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </div>

              {/* Hover Effect */}
              <motion.div
                className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="group px-8 py-4 bg-white text-primary border-2 border-primary rounded-2xl font-semibold text-lg hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Products
            <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsShowcase;
