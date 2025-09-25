import { motion, AnimatePresence } from "framer-motion";
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
  X,
  Plus,
  Minus,
  Search,
  Filter,
  GitCompare,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import { useCart } from "../../../contexts/CartContext";
import type { Product } from "../../../contexts/CartContext";

// Types

interface Notification {
  id: string;
  type: "success" | "error" | "info";
  message: string;
  duration?: number;
}

const ProductsShowcase = () => {
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState("featured");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
  const [showQuickView, setShowQuickView] = useState<Product | null>(null);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [productQuantities, setProductQuantities] = useState<{
    [key: number]: number;
  }>({});

  const categories = [
    { id: "featured", name: "Featured", icon: Star },
    { id: "computers", name: "Computers", icon: Monitor },
    { id: "laptops", name: "Laptops", icon: Laptop },
    { id: "gadgets", name: "Gadgets", icon: Smartphone },
    { id: "cctv", name: "CCTV", icon: Camera },
    { id: "audio", name: "Audio", icon: Headphones },
    { id: "networking", name: "Networking", icon: Wifi },
  ];

  const products: { [key: string]: Product[] } = {
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
        description:
          "High-performance gaming desktop with cutting-edge graphics and lightning-fast storage",
        stock: 15,
        brand: "TechPro",
        category: "computers",
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
        description:
          "Ultra-thin and powerful laptop with Apple's latest M3 processor",
        stock: 8,
        brand: "Apple",
        category: "laptops",
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
        description:
          "Premium smartphone with professional camera system and titanium design",
        stock: 25,
        brand: "Apple",
        category: "gadgets",
      },
      {
        id: 8,
        name: "Sony WH-1000XM5",
        price: "399",
        originalPrice: "499",
        rating: 4.8,
        reviews: 156,
        image: "🎧",
        badge: "Premium",
        features: ["Noise Cancelling", "30hr Battery", "Hi-Res Audio"],
        description:
          "Industry-leading noise-canceling headphones with exceptional sound quality",
        stock: 12,
        brand: "Sony",
        category: "audio",
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
        description:
          "Professional workstation for content creators and developers",
        stock: 5,
        brand: "WorkStation Pro",
        category: "computers",
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
        description:
          "Affordable gaming desktop that delivers excellent performance",
        stock: 20,
        brand: "GameMaster",
        category: "computers",
      },
      {
        id: 9,
        name: "Mini PC Pro",
        price: "599",
        originalPrice: "749",
        rating: 4.5,
        reviews: 78,
        image: "🖥️",
        badge: "Compact",
        features: ["i7-12700", "16GB RAM", "512GB NVMe"],
        description: "Compact desktop perfect for office and home use",
        stock: 18,
        brand: "MiniTech",
        category: "computers",
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
        description:
          "High-performance gaming laptop with desktop-class graphics",
        stock: 10,
        brand: "GameLap",
        category: "laptops",
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
        description: "Sleek business laptop with all-day battery life",
        stock: 14,
        brand: "BusinessPro",
        category: "laptops",
      },
      {
        id: 10,
        name: "Student Laptop",
        price: "699",
        originalPrice: "899",
        rating: 4.4,
        reviews: 203,
        image: "💻",
        badge: "Student",
        features: ["AMD Ryzen 5", "8GB RAM", "256GB SSD"],
        description: "Affordable laptop perfect for students and everyday use",
        stock: 30,
        brand: "EduTech",
        category: "laptops",
      },
    ],
    gadgets: [
      {
        id: 11,
        name: "Samsung Galaxy S24",
        price: "899",
        originalPrice: "1,099",
        rating: 4.7,
        reviews: 145,
        image: "📱",
        badge: "Latest",
        features: ["Snapdragon 8 Gen 3", "128GB", "AI Camera"],
        description: "Latest Android flagship with advanced AI features",
        stock: 22,
        brand: "Samsung",
        category: "gadgets",
      },
      {
        id: 12,
        name: "iPad Air M2",
        price: "599",
        originalPrice: "699",
        rating: 4.8,
        reviews: 89,
        image: "📱",
        badge: "Creative",
        features: ["M2 Chip", "10.9-inch", "Apple Pencil"],
        description: "Powerful tablet for creativity and productivity",
        stock: 16,
        brand: "Apple",
        category: "gadgets",
      },
    ],
    cctv: [
      {
        id: 13,
        name: "Security Camera Pro",
        price: "199",
        originalPrice: "249",
        rating: 4.6,
        reviews: 67,
        image: "📹",
        badge: "Security",
        features: ["4K Recording", "Night Vision", "Motion Detection"],
        description:
          "Professional security camera with advanced monitoring features",
        stock: 35,
        brand: "SecureCam",
        category: "cctv",
      },
    ],
    audio: [
      {
        id: 14,
        name: "Studio Monitor Speakers",
        price: "299",
        originalPrice: "399",
        rating: 4.7,
        reviews: 43,
        image: "🔊",
        badge: "Studio",
        features: ["5-inch Woofer", "Bluetooth", "USB-C"],
        description:
          "Professional studio monitors for accurate sound reproduction",
        stock: 12,
        brand: "AudioPro",
        category: "audio",
      },
    ],
    networking: [
      {
        id: 15,
        name: "WiFi 6 Router",
        price: "179",
        originalPrice: "229",
        rating: 4.5,
        reviews: 89,
        image: "📡",
        badge: "Fast",
        features: ["WiFi 6", "Gigabit", "MU-MIMO"],
        description: "High-speed WiFi 6 router for seamless connectivity",
        stock: 24,
        brand: "NetSpeed",
        category: "networking",
      },
    ],
  };

  // Load saved wishlist from localStorage
  useEffect(() => {
    const savedWishlist = localStorage.getItem("jotee-wishlist");
    if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
  }, []);

  // Save wishlist to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("jotee-wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // Notification system
  const addNotification = (type: Notification["type"], message: string) => {
    const id = Date.now().toString();
    setNotifications((prev) => [...prev, { id, type, message }]);

    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, 3000);
  };

  // Cart functions
  const handleAddToCart = (product: Product, quantity: number = 1) => {
    addToCart(product, quantity);
    addNotification("success", `${product.name} added to cart!`);
  };

  // Wishlist functions
  const toggleWishlist = (productId: number) => {
    const isInWishlist = wishlist.includes(productId);

    if (isInWishlist) {
      setWishlist((prev) => prev.filter((id) => id !== productId));
      addNotification("info", "Removed from wishlist");
    } else {
      setWishlist((prev) => [...prev, productId]);
      addNotification("success", "Added to wishlist!");
    }
  };

  // Product comparison
  const toggleProductComparison = (productId: number) => {
    const isSelected = selectedProducts.includes(productId);

    if (isSelected) {
      setSelectedProducts((prev) => prev.filter((id) => id !== productId));
    } else if (selectedProducts.length < 3) {
      setSelectedProducts((prev) => [...prev, productId]);
    } else {
      addNotification("error", "You can only compare up to 3 products");
    }
  };

  // Quantity management
  const updateProductQuantity = (productId: number, quantity: number) => {
    setProductQuantities((prev) => ({
      ...prev,
      [productId]: Math.max(1, quantity),
    }));
  };

  // Get all products for search and filtering
  const allProducts = useMemo(() => {
    return Object.values(products).flat();
  }, []);

  // Filtered and sorted products
  const filteredProducts = useMemo(() => {
    let filtered =
      activeCategory === "all" ? allProducts : products[activeCategory] || [];

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.features.some((feature) =>
            feature.toLowerCase().includes(searchQuery.toLowerCase())
          ) ||
          product.brand?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort products
    switch (sortBy) {
      case "price-low":
        filtered = [...filtered].sort(
          (a, b) =>
            parseInt(a.price.replace(/,/g, "")) -
            parseInt(b.price.replace(/,/g, ""))
        );
        break;
      case "price-high":
        filtered = [...filtered].sort(
          (a, b) =>
            parseInt(b.price.replace(/,/g, "")) -
            parseInt(a.price.replace(/,/g, ""))
        );
        break;
      case "rating":
        filtered = [...filtered].sort((a, b) => b.rating - a.rating);
        break;
      case "reviews":
        filtered = [...filtered].sort((a, b) => b.reviews - a.reviews);
        break;
      case "name":
        filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // Keep original order for 'featured'
        break;
    }

    return filtered;
  }, [activeCategory, searchQuery, sortBy, products, allProducts]);

  // Animation variants
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
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover our carefully curated selection of premium technology
            products designed to meet your every need.
          </p>

          {/* Search and Filter Bar */}
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
              />
            </div>

            <div className="flex gap-2">
              <motion.button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-3 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Filter className="w-5 h-5" />
                Filters
              </motion.button>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="reviews">Most Reviews</option>
                <option value="name">Name A-Z</option>
              </select>
            </div>
          </div>

          {/* Wishlist Summary */}
          <div className="flex justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4" />
              <span>{wishlist.length} items in wishlist</span>
            </div>
            {selectedProducts.length > 0 && (
              <div className="flex items-center gap-2">
                <GitCompare className="w-4 h-4" />
                <span>{selectedProducts.length} selected for comparison</span>
              </div>
            )}
          </div>
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
          key={`${activeCategory}-${searchQuery}-${sortBy}`}
        >
          {filteredProducts.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                No products found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search or filter criteria
              </p>
            </div>
          ) : (
            filteredProducts.map((product) => (
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
                      onClick={() => toggleWishlist(product.id)}
                      className={`w-10 h-10 rounded-full shadow-lg flex items-center justify-center transition-colors duration-300 ${
                        wishlist.includes(product.id)
                          ? "bg-red-500 text-white"
                          : "bg-white hover:bg-red-500 hover:text-white"
                      }`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Heart
                        className={`w-4 h-4 ${
                          wishlist.includes(product.id) ? "fill-current" : ""
                        }`}
                      />
                    </motion.button>
                    <motion.button
                      onClick={() => setShowQuickView(product)}
                      className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Eye className="w-4 h-4" />
                    </motion.button>
                    <motion.button
                      onClick={() => toggleProductComparison(product.id)}
                      className={`w-10 h-10 rounded-full shadow-lg flex items-center justify-center transition-colors duration-300 ${
                        selectedProducts.includes(product.id)
                          ? "bg-primary text-white"
                          : "bg-white hover:bg-primary hover:text-white"
                      }`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <GitCompare className="w-4 h-4" />
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
                    {product.features.map((feature: string, index: number) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Stock Status */}
                  {product.stock && (
                    <div className="text-sm">
                      {product.stock > 10 ? (
                        <span className="text-green-600 flex items-center gap-1">
                          <CheckCircle className="w-4 h-4" />
                          In Stock ({product.stock} available)
                        </span>
                      ) : product.stock > 0 ? (
                        <span className="text-orange-600 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          Only {product.stock} left in stock
                        </span>
                      ) : (
                        <span className="text-red-600 flex items-center gap-1">
                          <X className="w-4 h-4" />
                          Out of Stock
                        </span>
                      )}
                    </div>
                  )}

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
                    {product.brand && (
                      <span className="text-sm text-gray-500 font-medium">
                        {product.brand}
                      </span>
                    )}
                  </div>

                  {/* Quantity Selector */}
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-gray-700">
                      Quantity:
                    </span>
                    <div className="flex items-center gap-2">
                      <motion.button
                        onClick={() =>
                          updateProductQuantity(
                            product.id,
                            (productQuantities[product.id] || 1) - 1
                          )
                        }
                        className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Minus className="w-4 h-4" />
                      </motion.button>
                      <span className="w-8 text-center font-medium">
                        {productQuantities[product.id] || 1}
                      </span>
                      <motion.button
                        onClick={() =>
                          updateProductQuantity(
                            product.id,
                            (productQuantities[product.id] || 1) + 1
                          )
                        }
                        className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Plus className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <motion.button
                    onClick={() =>
                      handleAddToCart(
                        product,
                        productQuantities[product.id] || 1
                      )
                    }
                    disabled={product.stock === 0}
                    className={`w-full py-3 rounded-2xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 group/btn ${
                      product.stock === 0
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-primary text-white hover:bg-primary-dark"
                    }`}
                    whileHover={product.stock !== 0 ? { scale: 1.02 } : {}}
                    whileTap={product.stock !== 0 ? { scale: 0.98 } : {}}
                  >
                    <ShoppingCart className="w-5 h-5" />
                    {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
                    {product.stock !== 0 && (
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    )}
                  </motion.button>
                </div>

                {/* Hover Effect */}
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                />
              </motion.div>
            ))
          )}
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

        {/* Notification System */}
        <AnimatePresence>
          {notifications.map((notification) => (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0, y: 50, x: 300 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              exit={{ opacity: 0, y: -50, x: 300 }}
              className={`fixed top-4 right-4 z-50 p-4 rounded-xl shadow-lg max-w-sm ${
                notification.type === "success"
                  ? "bg-green-500 text-white"
                  : notification.type === "error"
                  ? "bg-red-500 text-white"
                  : "bg-blue-500 text-white"
              }`}
            >
              <div className="flex items-center gap-3">
                {notification.type === "success" && (
                  <CheckCircle className="w-5 h-5" />
                )}
                {notification.type === "error" && <X className="w-5 h-5" />}
                {notification.type === "info" && (
                  <AlertCircle className="w-5 h-5" />
                )}
                <span className="font-medium">{notification.message}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Quick View Modal */}
        <AnimatePresence>
          {showQuickView && (
            <motion.div
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowQuickView(null)}
            >
              <motion.div
                className="bg-white rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-3xl font-bold text-gray-900">
                    {showQuickView.name}
                  </h3>
                  <button
                    onClick={() => setShowQuickView(null)}
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-300"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="text-8xl text-center p-8 bg-gray-50 rounded-2xl">
                      {showQuickView.image}
                    </div>
                    <div className="flex justify-center gap-4">
                      <motion.button
                        onClick={() => toggleWishlist(showQuickView.id)}
                        className={`px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-colors duration-300 ${
                          wishlist.includes(showQuickView.id)
                            ? "bg-red-500 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-red-500 hover:text-white"
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Heart
                          className={`w-5 h-5 ${
                            wishlist.includes(showQuickView.id)
                              ? "fill-current"
                              : ""
                          }`}
                        />
                        {wishlist.includes(showQuickView.id)
                          ? "Remove from Wishlist"
                          : "Add to Wishlist"}
                      </motion.button>
                      <motion.button
                        onClick={() =>
                          handleAddToCart(
                            showQuickView,
                            productQuantities[showQuickView.id] || 1
                          )
                        }
                        className="px-6 py-3 bg-primary text-white rounded-xl font-semibold flex items-center gap-2 hover:bg-primary-dark transition-colors duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <ShoppingCart className="w-5 h-5" />
                        Add to Cart
                      </motion.button>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold mb-3">
                        Description
                      </h4>
                      <p className="text-gray-600">
                        {showQuickView.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold mb-3">Features</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {showQuickView.features.map(
                          (feature: string, index: number) => (
                            <div
                              key={index}
                              className="flex items-center gap-2"
                            >
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              <span className="text-sm text-gray-600">
                                {feature}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <span className="text-3xl font-bold text-primary">
                          ₦{showQuickView.price}
                        </span>
                        <span className="text-xl text-gray-400 line-through">
                          ₦{showQuickView.originalPrice}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-5 h-5 ${
                                i < Math.floor(showQuickView.rating)
                                  ? "text-yellow-400 fill-current"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-gray-600">
                          {showQuickView.rating} ({showQuickView.reviews}{" "}
                          reviews)
                        </span>
                      </div>

                      {showQuickView.stock && (
                        <div className="text-sm">
                          {showQuickView.stock > 10 ? (
                            <span className="text-green-600 flex items-center gap-1">
                              <CheckCircle className="w-4 h-4" />
                              In Stock ({showQuickView.stock} available)
                            </span>
                          ) : showQuickView.stock > 0 ? (
                            <span className="text-orange-600 flex items-center gap-1">
                              <AlertCircle className="w-4 h-4" />
                              Only {showQuickView.stock} left in stock
                            </span>
                          ) : (
                            <span className="text-red-600 flex items-center gap-1">
                              <X className="w-4 h-4" />
                              Out of Stock
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProductsShowcase;
